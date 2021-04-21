import React from "react";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBIcon,
} from "mdbreact";

import Circle from "../../assets/images/circle.png";
import "./styles.scss";

const Presentacion = () => {
  return (
    <MDBContainer>
      <section className="text-center my-5">
        <MDBCarousel
          activeItem={1}
          length={3}
          testimonial
          interval={false}
          showIndicators={false}
          className="no-flex"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <div>
                <div className="mx-auto mb-4">
                  <img
                    src={Circle}
                    className="rounded-circle img-fluid"
                    alt=""
                    id="perfil-user"
                  />
                </div>
                <h4 className="font-weight-bold">
                  Alejandro Guespud - Frontend Developer
                </h4>
                <br></br>
                <p>
                  <MDBIcon icon="quote-left" /> Mi nombre es Alejandro Guespud
                  tecnólogo SENA en Análisis Y desarrollo de Software. día.{" "}
                  <br></br>
                  <br></br>Mis habilidades de frontend son:<br></br>
                  <ul>
                    <li>✓ Reactjs, Hooks</li>
                  </ul>
                  <br></br>
                  Mis habilidades de backend son:
                  <ul>
                    <li>✓ SpringBoot</li>
                  </ul>
                  <br></br>
                  Mis habilidades de base de datos son:
                  <ul>
                    <li>✓ MySQL, PostgreSQL,✓ Firebase</li>
                  </ul>
                  <br></br>
                  Mis habilidades de CMS son:
                  <ul>
                    <li>✓ Desarrollo de Wordpress con Elementor</li>
                  </ul>
                  <br></br>
                  Otras habilidades:
                  <ul>
                    <li>
                      ✓ Git, Github ✓ SCRUM ✓Stylus ✓Sass ✓ Firebase, Netlify. ✓
                      HTML, CSS, JavaScript
                    </li>
                  </ul>
                  <br></br>
                </p>

                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon icon="star" className="blue-text" />
                <MDBIcon far icon="star-half" className="blue-text" />
              </div>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </MDBContainer>
  );
};

export default Presentacion;
