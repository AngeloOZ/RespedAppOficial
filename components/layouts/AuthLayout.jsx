import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { ImageContainer } from "../AuthComponents";
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
              <Link href="/" passHref>
                <div className={css.container_logo}>
                  <Image
                    src="https://res.cloudinary.com/el-fogon-de-coz/image/upload/v1655927637/website/logov3_qhidg2.png"
                    alt="Logo el fogon de coz"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>
              <h1 className={css.title}>{config.titleContainer}</h1>
              {children}
            </div>
            <ImageContainer src={config.imgContainer} />
          </div>
        }
      </main>
    </>
  );
};
