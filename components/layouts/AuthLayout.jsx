import Head from "next/head";
import { ImageContainer, SocialLogin } from "../AuthComponents";
import css from "../../styles/Auth.module.scss";

export const AuthLayout = ({ config, children }) => {
  return (
    <>
      <Head>
        <meta name="description" content={config.descriptionPage} />
        <title>{config.titlePage}</title>
      </Head>
      <main className={css.main_layaout}>
        {
          <div className={css.login_container}>
            <div className={css.login_info_container}>
              <h1 className={css.title}>{config.titleContainer}</h1>
              <SocialLogin />
              {children}
            </div>
            <ImageContainer src={config.imgContainer} />
          </div>
        }
      </main>
    </>
  );
};
