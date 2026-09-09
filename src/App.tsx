import { useEffect, useRef, useState } from "react";
import bgFrame from "@/imports/WhatsApp_Image_2026-08-27_at_6.15.19_PM.jpeg";
import oso2 from "@/imports/oso2.png";
import eco2 from "@/imports/eco2.png";
import ubicacion from "@/imports/ubicacion.png";
import regalo from "@/imports/regalo.png";
import fechas from "@/imports/fechas.png";
import "./App.css";

function App() {
  const [opened, setOpened] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const eventDate = new Date("2026-10-04T16:00:00-05:00");

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
      );

      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    const interval = setInterval(
      updateCountdown,
      1000
    );

    return () => clearInterval(interval);
  }, []);

  const abrirSobre = () => {
    setOpened(true);

    if (!audioRef.current) {
      /* audioRef.current = new Audio(
        "/music/indigo.mp3"
      );

      audioRef.current.loop = true;
      audioRef.current.volume = 0.45; */
    }

    /*  audioRef.current.play().catch(() => {
       // El navegador puede bloquear el audio.
     }); */
  };

  const abrirUbicacion = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Estadio+Manuel+Murillo+Toro+Ibague",
      "_blank"
    );
  };

  const abrirRegalos = () => {
    window.open(
      "https://app.mywishlist.co/lizethlmacias",
      "_blank"
    );
  };

  return (
    <div className="invitation">

      {/* =====================================================
          SOBRE INICIAL
          ===================================================== */}

      {!opened && (
        <div
          className="envelope-screen"
          onClick={abrirSobre}
        >
          <div className="envelope-container">

            <div className="envelope-header">

              <div className="envelope-title">

                <span className="envelope-title-script">
                  Mi baby
                </span>

                <span className="envelope-title-shower">
                  SHOWER
                </span>

              </div>

              <img
                src={oso2}
                alt="Osito"
                className="envelope-bear"
              />

            </div>

            <div className="envelope">

              <div className="envelope-left" />

              <div className="envelope-right" />

              <div className="envelope-bottom" />

              <div className="envelope-flap" />

              <div className="envelope-seal isaac-seal">
                <span>I</span>
              </div>

            </div>

            <div className="envelope-text">

              <h2>
                ¡Estás invitado!
              </h2>

              <p>
                Toca el sobre para abrir
              </p>

            </div>

          </div>
        </div>
      )}

      {/* =====================================================
          INVITACIÓN
          ===================================================== */}

      {opened && (
        <main className="invitation-content">

          {/* =================================================
              PORTADA
              ================================================= */}

          <section
            className="cover-section page-section"
            style={{
              backgroundImage: `url(${bgFrame})`,
            }}
          >

            <div className="cover-overlay" />

            <div className="cover-content">

              <div className="cover-heading">

                <div className="cover-title-row">

                  <div className="cover-title-text">

                    <div className="cover-bebe">
                      Bebé
                    </div>

                    <div className="cover-en-camino">
                      EN CAMINO
                    </div>

                  </div>

                  <img
                    src={oso2}
                    alt="Osito"
                    className="cover-heading-bear"
                  />

                </div>

              </div>

              <p className="cover-message">
                Pronto habrá una nueva sonrisa
                iluminando nuestras vidas y con
                una inmensa alegría esperamos
                su bienvenida.
              </p>

              <p className="cover-message beige">
                Mis papitos:
              </p>

              <div className="cover-parents">
                Lizeth y Cristian
              </div>

              <p className="cover-message">
                Están felices esperando mi llegada
                y quieren compartir contigo esta
                felicidad y desde la pancita de mami
                te invito a celebrar mi Baby Shower
              </p>

              <div className="fixed-scroll-indicator">
                <span>Desliza para continuar</span>
                <span className="scroll-arrow">↓</span>
              </div>

            </div>

          </section>

          <section
            className="cover-section page-section"
            style={{
              backgroundImage: `url(${bgFrame})`,
            }}
          >

            <div className="cover-overlay" />

            <div className="cover-content second-cover-content">

              <div className="cover-heading">

                <div className="cover-title-row">

                  <div className="cover-title-text">

                    <img
                      src={eco2}
                      alt="Ecografía de Isaac."
                      className="second-cover-eco"
                    />
                  </div>



                </div>

              </div>

              <img
                src={fechas}
                alt="Fecha del Baby Shower de Isaac"
                className="fechas-image"
              />



              {/*  <div className="fixed-scroll-indicator">
                <span>Desliza para continuar</span>
                <span className="scroll-arrow">↓</span>
              </div> */}

            </div>

          </section>

          {/* =================================================
    TERCERA PÁGINA - DIRECCIÓN / CONFIRMAR
    ================================================= */}
          <section
            className="cover-section page-section third-page-section"
            style={{
              backgroundImage: `url(${bgFrame})`,
            }}
          >
            <div className="cover-overlay" />

            <div className="third-page-content">
              <p className="countdown-subtitle">
                FALTA MENOS...
              </p>

              <div className="countdown">

                <div className="countdown-item">

                  <span className="countdown-number">
                    {timeLeft.days}
                  </span>

                  <span className="countdown-label">
                    Días
                  </span>

                </div>

                <div className="countdown-separator">
                  :
                </div>

                <div className="countdown-item">

                  <span className="countdown-number">
                    {String(
                      timeLeft.hours
                    ).padStart(2, "0")}
                  </span>

                  <span className="countdown-label">
                    Horas
                  </span>

                </div>

                <div className="countdown-separator">
                  :
                </div>

                <div className="countdown-item">

                  <span className="countdown-number">
                    {String(
                      timeLeft.minutes
                    ).padStart(2, "0")}
                  </span>

                  <span className="countdown-label">
                    Minutos
                  </span>

                </div>

                <div className="countdown-separator">
                  :
                </div>

                <div className="countdown-item">

                  <span className="countdown-number">
                    {String(
                      timeLeft.seconds
                    ).padStart(2, "0")}
                  </span>

                  <span className="countdown-label">
                    Segundos
                  </span>

                </div>

              </div>

              <div className="arch-wrapper">

                <div className="arch-direction">
                  <div className="direction-content">

                    <div className="direction-title">
                      <span className="direction-line"></span>
                      <span className="direction-title-text">DIRECCIÓN</span>
                      <span className="direction-line"></span>
                    </div>

                    <div className="direction-location-row">

                      <img
                        src={ubicacion}
                        alt="Ubicación"
                        className="direction-image"
                      />

                      <p className="direction-place">
                        Salón Comunal
                        <br />
                        Barrio La Libertad
                      </p>

                    </div>

                    <a
                      href="https://www.google.com/maps/place/4%C2%B025'44.5%22N+75%C2%B013'57.1%22W/@4.4290203,-75.2331767,19z/data=!3m1!4b1!4m4!3m3!8m2!3d4.429019!4d-75.232533?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="location-link"
                    >
                      Ver ubicación
                    </a>


                  </div>
                </div>

                <div className="arch-confirm">

                  {/* TÍTULO */}
                  <div className="confirm-title">

                    <span className="confirm-line"></span>

                    <span className="confirm-title-text">
                      CONFIRMAR
                      <br />
                      ASISTENCIA
                    </span>

                    <span className="confirm-line"></span>

                  </div>


                  {/* MENSAJE */}
                  <p className="confirm-message">
                    Nos encantará saber que nos acompañarás.

                  </p>

                  <div className="confirm-buttons">

                    <a
                        href="https://wa.me/3166996063?text=Hola%2C%20quiero%20confirmar%20mi%20asistencia%20al%20Baby%20Shower%20de%20Isaac."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="confirm-button"
                    >
                      CONFIRMAR A MAMÁ
                    </a>

                    <a
                      href="https://wa.me/TUNUMEROPAPA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="confirm-button"
                    >
                      CONFIRMAR A PAPÁ
                    </a>

                  </div>

                </div>

              </div>
            </div>
          </section>

          {/* =================================================
    CUARTA PÁGINA - 
    ================================================= */}
          <section
            className="cover-section page-section third-page-section"
            style={{
              backgroundImage: `url(${bgFrame})`,
            }}
          >
            <div className="cover-overlay" />

            <div className="third-page-content">

              <p className="countdown-subtitle">
                REGALO + UN PAÑAL
              </p>

              <img
                src={regalo}
                alt="Regalo"
                className="regalo-image"
              />
               <div className="gift-info">

                  <h3>
                    Lista de regalos
                  </h3>

                  <p>
                    Si deseas obsequiarnos algo
                    para Isaac, hemos preparado
                    una lista con algunas ideas.
                  </p>

                  <button
                    type="button"
                    className="gift-button"
                    onClick={abrirRegalos}
                  >
                    Ver lista de regalos
                  </button>

                </div>

            </div>
          </section>


        


          {/* =================================================
              REGALOS
              ================================================= */}
{/* 
          <section className="section page-section gifts-section">

            <div className="section-card">

              <h2 className="section-title">
                Un regalito para Isaac
              </h2>

              <p className="section-subtitle">
                Tu presencia es nuestro
                mejor regalo.
              </p>

              <div className="gift-card">

                <img
                  src={regalo}
                  alt="Lista de regalos"
                  className="gift-image"
                />

                <div className="gift-info">

                  <div className="gift-icon">
                    ♡
                  </div>

                  <h3>
                    Lista de regalos
                  </h3>

                  <p>
                    Si deseas obsequiarnos algo
                    para Isaac, hemos preparado
                    una lista con algunas ideas.
                  </p>

                  <button
                    type="button"
                    className="gift-button"
                    onClick={abrirRegalos}
                  >
                    Ver lista de regalos
                  </button>

                </div>

              </div>

            </div>

          </section> */}

          {/* =================================================
              FINAL
              ================================================= */}

          <section className="section page-section final-section">

            <div className="final-card">

              <img
                src={oso2}
                alt="Osito"
                className="final-bear"
              />

              <h2>
                ¡Te esperamos!
              </h2>

              <p>
                Será un día lleno de amor,
                alegría y momentos
                inolvidables.
              </p>

             {/*  <div className="final-hearts">
                ♥ ♥ ♥
              </div> */}

              <strong>
                Lizeth y Cristian
              </strong>

            </div>

          </section>

          {/* =================================================
              FOOTER
              ================================================= */}

          <footer className="footer page-section">

            <span>
              Con mucho amor ♥
            </span>

          </footer>

        </main>
      )}

    </div>
  );
}

export default App;