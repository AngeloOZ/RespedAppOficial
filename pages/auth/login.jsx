import { useContext, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import axios from "axios";

import { AuthContext } from "../../context/Auth";
import { AuthLayout } from "../../components/layouts/AuthLayout";
import { Input } from "../../components/Components";
import css from "../../styles/Auth.module.scss";
import { RenderIf } from "../../components/Components/RenderIf";
import { ListErrors } from "../../components/AuthComponents/ListErrors";

const styles = {
  marginLeft: "20px",
};

const config = {
  titlePage: "Iniciar Sesión",
  descriptionPage: "",
  titleContainer: "Iniciar Sesión",
  imgContainer:
    "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1653757606/website/undraw_login_re_4vu2_hyivhi.svg",
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [showError, setShowError] = useState(false);
  const [showMessageError, setShowMessageError] = useState("");
  const { loginUser } = useContext(AuthContext);

  const onLoginUser = async ({ username, password }) => {
    setShowError(false);
    const isValidLogin = await loginUser(username, password);
    if (!isValidLogin.state) {
      console.log(isValidLogin.message);
      setShowMessageError("El usuario y/o contraseña no son válidos");
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      const response = isValidLogin.message;
      switch (response.status) {
        case 400:
          return setShowMessageError(
            <ListErrors errors={response.errors} message={response.message} />
          );
        case 404:
          return setShowMessageError(
            "El usuario y/o contraseña no son válidos"
          );
        default:
          return setShowMessageError("Error generico");
      }
    }
    const destination = router.query.p?.toString() || "/";
    router.replace(destination);
  };

  return (
    <AuthLayout config={config}>
      <form
        className={css.inputs_container}
        onSubmit={handleSubmit(onLoginUser)}
      >
        <RenderIf isTrue={showError}>
          <div className={`${css.display_error} fadeIn`}>
            <i className="bi bi-exclamation-circle"></i>
            <span>{showMessageError}</span>
          </div>
        </RenderIf>
        <Input
          type="text"
          styles={css.input}
          placeholder="Nombre de usuario"
          styleErrors={styles}
          useFormRegister={{
            ...register("username", {
              required: "El nombre de usuario es requerido",
            }),
          }}
          errors={!!errors.username}
          helperText={errors.username?.message}
        />
        <Input
          type="password"
          styles={css.input}
          placeholder="Contraseña"
          styleErrors={styles}
          useFormRegister={{
            ...register("password", {
              required: "La contraseña es requerida",
              minLength: { value: 4, message: "Mínimo 4 caracteres" },
            }),
          }}
          errors={!!errors.password}
          helperText={errors.password?.message}
        />
        <p>
          ¿He olvidado mi contraseña?
          <span className={css.span}> Clic aquí</span>
        </p>
        <button type="submit" disabled={showError} className={css.btn_login}>
          Iniciar sesión
        </button>
        <p>
          ¿No tienes cuenta?
          <Link
            href={
              router.query.p
                ? `/auth/register?p=${router.query.p}`
                : "/auth/register"
            }
            passHref
          >
            <span className={css.span}> Registrate</span>
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
