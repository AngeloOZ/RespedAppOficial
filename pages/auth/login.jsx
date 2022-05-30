import Link from "next/link";

import { AuthLayout } from "../../components/layouts/AuthLayout";
import { Input } from "../../components/Components";

import css from "../../styles/Auth.module.scss";

export default function Login() {
  const styles = {
    marginLeft: "20px",
  };

  const config = {
    titlePage: "Iniciar Sesión",
    descriptionPage: "",
    titleContainer:"Iniciar Sesión",
    imgContainer: "https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1653757606/website/undraw_login_re_4vu2_hyivhi.svg",
  };
  return (
    <AuthLayout config={config}>
      <form className={css.inputs_container}>
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
        <p>
          ¿He olvidado mi contraseña?
          <span className={css.span}> Clic aquí</span>
        </p>
        <button className={css.btn_login}>Iniciar sesión</button>
        <p>
          ¿No tienes cuenta?
          <Link href="/auth/register" passHref>
            <span className={css.span}> Registrate</span>
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
