import Image from "next/image";
import about from "../../public/Img/about1.jpg";
import css from "../../styles/Nosotross.module.scss";

export const Nosotros = () => {
  return (
    <section className={css.about_us} id="nosotros">
      <h2>Acerca de nosotros</h2>
      <div className="container-lg">
        <div className="row g-3">
          <div className="col-12 col-sm-6 d-sm-flex align-items-center">
            <div className={css.image_aboutUs}>
              <Image src={about} alt="" objectFit="cover" ></Image>
            </div>
          </div>
          <div className="col-12 col-sm-6 d-flex align-items-center">
            <p className={css.paragraph}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              aut soluta rem vitae dolorum commodi accusantium. Odit provident
              nobis sunt corrupti. Accusamus aspernatur pariatur repudiandae.
              Accusantium fugiat blanditiis asperiores nesciunt perspiciatis
              natus necessitatibus porro enim. Eveniet ab consequuntur aperiam,
              ipsum dolorem harum odit deleniti eaque recusandae, tempora magnam
              sit eius. Tempore ut temporibus iste, obcaecati quasi fuga aperiam
              quas iure ea impedit minima eos numquam ullam non veritatis quidem
              magni voluptas deserunt. Ad cupiditate natus culpa nisi doloremque
              odit, veniam omnis officiis fuga adipisci quos distinctio nobis,
              possimus quae aut hic consequuntur earum nemo harum quidem quia
              iusto illo voluptatum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
