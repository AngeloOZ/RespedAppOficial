import css from "../../styles/Auth.module.scss";

export const SocialLogin = () => {
  return (
    <>
      <div className={css.social_login}>
        <div className={css.social_login_element}>
          <i className="bi bi-google"></i>
          <span>Google</span>
        </div>
        <div className={css.social_login_element}>
          <i className="bi bi-facebook"></i>
          <span>Facebook</span>
        </div>
      </div>
      <p>o</p>
    </>
  );
};
