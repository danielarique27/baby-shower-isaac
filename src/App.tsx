import { useEffect, useRef, useState } from "react";
import bgFrame from "@/imports/WhatsApp_Image_2026-08-27_at_6.15.19_PM.jpeg";
import oso2 from "@/imports/oso2.png";
import eco from "@/imports/eco.png";
import ubicacion from "@/imports/ubicacion.png";
import regalo from "@/imports/regalo.png";
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

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
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

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const abrirSobre = () => {
    setOpened(true);

    if (!audioRef.current) {
      audioRef.current = new Audio("/music/indigo.mp3");
      audioRef.current.loop = true;
    }

    audioRef.current.play().catch(() => {
      // El navegador puede bloquear el audio hasta que exista
      // una interacción del usuario.
    });
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
      ====================================================== */}
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
              <h2>¡Estás invitado!</h2>

              <p>
                Toca el sobre para abrir
              </p>
            </div>

          </div>
        </div>
      )}

      {/* =====================================================
          INVITACIÓN
      ====================================================== */}
      {opened && (
        <main className="invitation-content">

          {/* =================================================
              PORTADA
          ================================================== */}
          <section
            className="cover-section"
            style={{
              backgroundImage: `url(${bgFrame})`,
            }}
          >

            <div className="cover-overlay" />

            <div className="cover-content">

              <div className="cover-small-text">
                ¡Estás invitado a mi!
              </div>

              <h1>
                Baby Shower
              </h1>

              <div className="cover-divider">
                <span>♥</span>
              </div>

              <div className="cover-name">
                ISAAC
              </div>

              <p className="cover-message">
                Un pequeño milagro está en camino
              </p>

              <div className="cover-parents">
                Lizeth y Cristian
              </div>

              <img
                src={oso2}
                alt="Osito"
                className="cover-bear"
              />

              <div className="scroll-indicator">
                <span>Desliza para continuar</span>
                <span className="scroll-arrow">
                  ↓
                </span>
              </div>

            </div>

          </section>

          {/* =================================================
              MENSAJE
          ================================================== */}
          <section className="section invitation-message">

            <div className="section-card">

              <div className="decorative-heart">
                ♥
              </div>

              <p className="message-script">
                Hay momentos que hacen que
                el corazón se llene de amor...
              </p>

              <p>
                Y uno de ellos está por llegar.
                Queremos compartir contigo la
                alegría de celebrar la llegada de
                nuestro pequeño
              </p>

              <h2 className="baby-name">
                Isaac
              </h2>

              <div className="small-divider">
                ♥
              </div>

              <p>
                Acompáñanos a celebrar este
                momento tan especial junto a
                nosotros.
              </p>

            </div>

          </section>

          {/* =================================================
              INFORMACIÓN DEL EVENTO
          ================================================== */}
          <section className="section event-section">

            <div className="section-card">

              <div className="section-title-decoration">
                <span>✦</span>
              </div>

              <h2 className="section-title">
                Un día muy especial
              </h2>

              <p className="section-subtitle">
                Para celebrar la llegada de
                nuestro pequeño
              </p>

              <div className="event-details">

                <div className="event-detail">

                  <div className="detail-icon">
                    ♡
                  </div>

                  <div>
                    <span className="detail-label">
                      Fecha
                    </span>

                    <strong>
                      04 de octubre de 2026
                    </strong>
                  </div>

                </div>

                <div className="event-detail">

                  <div className="detail-icon">
                    ◷
                  </div>

                  <div>
                    <span className="detail-label">
                      Hora
                    </span>

                    <strong>
                      4:00 PM
                    </strong>
                  </div>

                </div>

                <div className="event-detail">

                  <div className="detail-icon">
                    ♧
                  </div>

                  <div>
                    <span className="detail-label">
                      Papás
                    </span>

                    <strong>
                      Lizeth &amp; Cristian
                    </strong>
                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              ECOGRAFÍA
          ================================================== */}
          <section className="section ultrasound-section">

            <div className="section-card">

              <h2 className="section-title">
                Ya casi nos conocemos
              </h2>

              <p className="section-subtitle">
                Con mucho amor esperamos
                la llegada de
              </p>

              <h3 className="ultrasound-name">
                Isaac
              </h3>

              <div className="ultrasound-frame">

                <img
                  src={eco}
                  alt="Ecografía de Isaac"
                  className="ultrasound-image"
                />

              </div>

              <p className="ultrasound-message">
                Te esperamos con todo
                nuestro amor.
              </p>

              <div className="small-divider">
                ♥
              </div>

            </div>

          </section>

          {/* =================================================
              CUENTA REGRESIVA
          ================================================== */}
          <section className="section countdown-section">

            <div className="section-card">

              <div className="section-title-decoration">
                <span>✦</span>
              </div>

              <h2 className="countdown-title">
                Cuenta regresiva
              </h2>

              <p className="countdown-subtitle">
                Cada vez falta menos para
                celebrar juntos
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
                    {String(timeLeft.hours).padStart(2, "0")}
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
                    {String(timeLeft.minutes).padStart(2, "0")}
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
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>

                  <span className="countdown-label">
                    Segundos
                  </span>

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              UBICACIÓN
          ================================================== */}
          <section className="section location-section">

            <div className="section-card">

              <h2 className="section-title">
                ¿Dónde nos encontramos?
              </h2>

              <p className="section-subtitle">
                Te esperamos para compartir
                este momento tan especial
              </p>

              <div className="location-card">

                <img
                  src={ubicacion}
                  alt="Ubicación del evento"
                  className="location-image"
                />

                <div className="location-info">

                  <div className="location-icon">
                    ♥
                  </div>

                  <h3>
                    Estadio Manuel
                    Murillo Toro
                  </h3>

                  <p>
                    Ibagué, Tolima
                  </p>

                  <button
                    type="button"
                    className="location-button"
                    onClick={abrirUbicacion}
                  >
                    Ver ubicación
                  </button>

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              LISTA DE REGALOS
          ================================================== */}
          <section className="section gifts-section">

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

          </section>

          {/* =================================================
              DESPEDIDA
          ================================================== */}
          <section className="section final-section">

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

              <div className="final-hearts">
                ♥ ♥ ♥
              </div>

              <strong>
                Lizeth &amp; Cristian
              </strong>

            </div>

          </section>

          <footer className="footer">
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