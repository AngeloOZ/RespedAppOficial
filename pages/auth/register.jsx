import Link from "next/link";

import { Input } from "../../components/Components";
import { AuthLayout } from "../../components/layouts/AuthLayout";

import css from "../../styles/Auth.module.scss";

export default function Register() {
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

  return (
    <AuthLayout config={config}>
      <form className={css.inputs_container}>
        <Input
          type="email"
          styles={css.input}
          placeholder="Correo electrónico"
          styleErrors={styles}
        />
        <Input
          type="text"
          styles={css.input}
          placeholder="Nombre de usuario"
          styleErrors={styles}
        />
        <Input
          type="password"
          styles={css.input}
          placeholder="Contraseña"
          styleErrors={styles}
        />
        <button type="submit" className={css.btn_login}>Registrarse</button>
        <p>
          ¿Ya estás registrado?
          <Link href="/auth/login" passHref>
            <span className={css.span}> Inicia sesión</span>
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
