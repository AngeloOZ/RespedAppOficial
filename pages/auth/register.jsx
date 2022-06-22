import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { AuthContext } from "../../context";

import { FullScreenloader, Input } from "../../components/Components";
import { AuthLayout } from "../../components/layouts/AuthLayout";
import { RenderIf } from "../../components/Components/RenderIf";
import { ListErrors } from "../../components/AuthComponents/ListErrors";

import css from "../../styles/Auth.module.scss";

const styles = {
  marginLeft: "20px",
};

const config = {
  titlePage: "Registrar usuario",
  descriptionPage: "",
  titleContainer: "Registrarse",
  imgContainer:
    "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1653754753/website/login_kzexeq.svg",
};
const pattern =
  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [showError, setShowError] = useState(false);
  const [displayLoader, setDisplayLoader] = useState(false);
  const [showMessageError, setShowMessageError] = useState("");
  const { registerUser } = useContext(AuthContext);

  const onRegisterUser = async (data) => {
    setDisplayLoader(true);
    const { hasError, response } = await registerUser(data);
    if (hasError) {
      setDisplayLoader(false);
      setShowError(true);
      const sms =
        typeof response.data == "string" ? response.data : response.message;
      setShowMessageError(
        <ListErrors message={sms} errors={response?.errors || []} />
      );
      setTimeout(() => setShowError(false), 4000);
      return;
    }
    const destination = router.query.p?.toString() || "/";
    router.replace(destination);
  };

  return (
    <AuthLayout config={config}>
      <FullScreenloader display={displayLoader} />
      <form
        className={`${css.inputs_container} ${css.register}`}
        onSubmit={handleSubmit(onRegisterUser)}
      >
        <RenderIf isTrue={showError}>
          <div className={`${css.display_error} fadeIn`}>
            <i className="bi bi-exclamation-circle"></i>
            <span>{showMessageError}</span>
          </div>
        </RenderIf>
        <Input
          type="email"
          styles={css.input}
          placeholder="Correo electrónico"
          styleErrors={styles}
          useFormRegister={{
            ...register("EMAIL", {
              required: "El correo electrónico es requerido",
              pattern: {
                value: pattern,
                message: "El correo ingresado no es válido",
              },
            }),
          }}
          errors={!!errors.EMAIL}
          helperText={errors.EMAIL?.message}
        />
        <Input
          type="tel"
          styles={css.input}
          placeholder="Teléfono"
          styleErrors={styles}
          useFormRegister={{
            ...register("PHONE", {
              required: "El número de teléfono es requerido",
              pattern: {
                value: /[\d+]/,
                message: "El número ingresado no es válido",
              },
            }),
          }}
          errors={!!errors.PHONE}
          helperText={errors.PHONE?.message}
        />
        <Input
          type="text"
          styles={css.input}
          placeholder="Nombre de usuario"
          styleErrors={styles}
          useFormRegister={{
            ...register("USERNAME", {
              required: "El nombre de usuario es requerido",
              pattern: {
                value: /^[A-Za-z0-9ñ]+$/i,
                message: "Solo es permitido caracteres alfanuméricos",
              },
            }),
          }}
          errors={!!errors.USERNAME}
          helperText={errors.USERNAME?.message}
        />
        <Input
          type="password"
          styles={css.input}
          placeholder="Contraseña"
          styleErrors={styles}
          useFormRegister={{
            ...register("PASSWORD", {
              required: "La contraseña es requerida",
              minLength: { value: 4, message: "Mínimo 4 caracteres" },
            }),
          }}
          errors={!!errors.PASSWORD}
          helperText={errors.PASSWORD?.message}
        />
        <button type="submit" className={css.btn_login}>
          Registrarse
        </button>
        <p>
          ¿Ya estás registrado?
          <Link
            href={
              router.query.p ? `/auth/login?p=${router.query.p}` : "/auth/login"
            }
            passHref
          >
            <span className={css.span}> Inicia sesión</span>
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
