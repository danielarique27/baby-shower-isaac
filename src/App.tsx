
import { useEffect, useRef, useState } from "react";
import bgFrame from "@/imports/WhatsApp_Image_2026-08-27_at_6.15.19_PM.jpeg";
import oso2 from "@/imports/oso2.png";
import eco from "@/imports/eco.png";
import ubicacion from "@/imports/ubicacion.png";
import regalo from "@/imports/regalo.png";
import "./App.css";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function App() {
  const [opened, setOpened] = useState(false);

  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const audioRef = useRef<HTMLAudioElement>(null);

  /* ==========================================
     CUENTA REGRESIVA
  ========================================== */

  useEffect(() => {
    const eventDate = new Date("2026-10-04T16:00:00-05:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference <= 0) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const totalSeconds = Math.floor(difference / 1000);

      const days = Math.floor(totalSeconds / 86400);

      const hours = Math.floor(
        (totalSeconds % 86400) / 3600
      );

      const minutes = Math.floor(
        (totalSeconds % 3600) / 60
      );

      const seconds = totalSeconds % 60;

      setCountdown({
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

  /* ==========================================
     ABRIR SOBRE
  ========================================== */

  const abrirSobre = () => {
    setOpened(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.7;
      audioRef.current.loop = true;

      audioRef.current.play().catch((error) => {
        console.log(
          "No se pudo reproducir el audio:",
          error
        );
      });
    }
  };

  return (
    <div className="invitation">

      {/* ========================================
          MÚSICA
      ======================================== */}

      <audio
        ref={audioRef}
        src="/music/indigo.mp3"
        preload="auto"
      />

      {/* ========================================
          SOBRE INICIAL
      ======================================== */}

      {!opened && (
        <div
          className="envelope-screen"
          onClick={abrirSobre}
        >
          <div className="envelope-container">

            <div className="envelope">

              <div className="envelope-left" />

              <div className="envelope-right" />

              <div className="envelope-bottom" />

              <div className="envelope-flap" />

              <div className="envelope-seal">
                ♥
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

      {/* ========================================
          INVITACIÓN
      ======================================== */}

      {opened && (
        <div className="page">

          {/* Fondo decorativo */}

          <div
            className="decorative-background"
            style={{
              backgroundImage: `url(${bgFrame})`,
            }}
          />

          <div className="content">

            {/* ==================================
                SECCIÓN 1
            ================================== */}

            <section className="section section-cover">

              <div className="cover-content">

                <img
                  src={oso2}
                  alt="Osito"
                  className="cover-bear"
                />

                <div className="stars">
                  ✦ ✦ ✦
                </div>

                <h1>
                  Baby Shower
                </h1>

                <div className="divider">

                  <span />

                  <span className="heart">
                    ♥
                  </span>

                  <span />

                </div>

                <p className="message">

                  Una vida empieza y otras
                  se iluminan.

                  <br />

                  Estamos felices y orgullosos
                  de decir

                  <br />

                  que nuestro príncipe llegará
                  muy pronto.

                </p>

                <div className="parents">

                  <span>
                    Con mucho amor
                  </span>

                  <h2>
                    Lizeth & Cristian
                  </h2>

                </div>

              </div>

              <div className="scroll-indicator">
                ↓
              </div>

            </section>


            {/* ==================================
                SECCIÓN 2
            ================================== */}

            <section className="section section-second">

              <div className="second-content">

                <div className="stars">
                  ✦ ✦ ✦
                </div>

                <p className="invitation-message">

                  Te invitamos a celebrar
                  <br />
                  la llegada de nuestro hijo

                </p>

                <h2 className="baby-name">
                  ISAAC
                </h2>

                {/* Ecografía */}

                <div className="eco-container">

                  <img
                    src={eco}
                    alt="Ecografía de Isaac"
                    className="eco-image"
                  />

                </div>

                {/* Fecha */}

                <div className="event-date">

                  <div className="date-line">

                    <span />

                    <span className="date-heart">
                      ♥
                    </span>

                    <span />

                  </div>

                  <div className="date-main">
                    04 · OCTUBRE · 2026
                  </div>

                  <div className="event-time">
                    4:00 PM
                  </div>

                </div>

                <div className="second-decoration">
                  ✦ ♥ ✦
                </div>

              </div>

            </section>


            {/* ==================================
                SECCIÓN 3
            ================================== */}

            <section className="section section-third">

              <div className="third-content">

                <div className="stars">
                  ✦ ✦ ✦
                </div>

                {/* Cuenta regresiva */}

                <h2 className="countdown-title">
                  ¿Cuánto falta?
                </h2>

                <p className="countdown-subtitle">
                  Para celebrar la llegada de Isaac
                </p>

                <div className="countdown">

                  <CountdownItem
                    value={countdown.days}
                    label="Días"
                  />

                  <CountdownItem
                    value={countdown.hours}
                    label="Horas"
                  />

                  <CountdownItem
                    value={countdown.minutes}
                    label="Minutos"
                  />

                  <CountdownItem
                    value={countdown.seconds}
                    label="Segundos"
                  />

                </div>

                <div className="third-divider">

                  <span />

                  <span>
                    ♥
                  </span>

                  <span />

                </div>


                {/* ==================================
                    UBICACIÓN + REGALOS
                ================================== */}

                <div className="bottom-options">

                  {/* UBICACIÓN */}

                  <div className="option-card">

                    <h3 className="option-title">
                      ¿Dónde nos encontraremos?
                    </h3>

                    <p className="location-address">

                      Estadio Manuel Murillo Toro
                      <br />
                      Ibagué, Tolima

                    </p>

                    <a
                      href="https://www.google.com/maps/place/Estadio+Manuel+Murillo+Toro/@4.42368,-75.235328,14z/data=!4m6!3m5!1s0x8e38c4c22db2ef17:0x19c4591e9c21d19a!8m2!3d4.4299645!4d-75.2181728!16zL20vMGRnN3Jj?entry=tts&g_ep=EgoyMDI2MDgyNS4wIPu8ASoASAFQAw%3D%3D&skid=491a71a8-18fa-4c4d-9ff4-c2ccfbafcc82"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="location-link"
                    >

                      <img
                        src={ubicacion}
                        alt="Ver ubicación"
                        className="location-image"
                      />

                      <span>
                        Ver ubicación
                      </span>

                    </a>

                  </div>


                  {/* LISTA DE REGALOS */}

                  <div className="option-card">

                    <h3 className="option-title">
                      Lista de regalos
                    </h3>

                    <p className="gift-subtitle">

                      Tu presencia es
                      <br />
                      nuestro mejor regalo

                    </p>

                    <a
                      href="https://app.mywishlist.co/lizethlmaciasp/baby-shower"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gift-link"
                    >

                      <img
                        src={regalo}
                        alt="Lista de regalos"
                        className="gift-image"
                      />

                      <span>
                        Ver lista de regalos
                      </span>

                    </a>

                  </div>

                </div>


                <div className="third-decoration">
                  ✦ ♥ ✦
                </div>

              </div>

            </section>

          </div>
        </div>
      )}

    </div>
  );
}


/* ==========================================
   CUENTA REGRESIVA
========================================== */

function CountdownItem({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="countdown-item">

      <div className="countdown-number">
        {String(value).padStart(2, "0")}
      </div>

      <div className="countdown-label">
        {label}
      </div>

    </div>
  );
}
