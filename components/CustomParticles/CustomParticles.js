import React, { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// STYLES
import styles from "./CustomParticles.module.scss";

export default function CustomParticles(props) {
  const particlesInit = async main => {
    await loadFull(main);
  };
  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      particles: {
        number: {
          value: 10,
          density: {
            enable: false,
            value_area: 700,
          },
        },
        color: {
          value: props.color,
        },
        shape: {
          type: "square",
          options: {
            sides: 5,
          },
        },
        opacity: {
          value: 0.8,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: false,
          anim: {
            enable: false,
            speed: 1000,
            size_min: 0.1,
            sync: false,
          },
        },
        rotate: {
          value: 0,
          random: true,
          direction: "clockwise",
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 600,
          color: props.color,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: ["grab"],
          },
          onclick: {
            enable: false,
            mode: "bubble",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 0.5,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 0.8,
            speed: 3,
          },
          repulse: {
            distance: 200,
          },
          push: {
            particles_nb: 5,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
      background: {
        color: "",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
      },
    }),
    [props.color]
  );
  return (
    <>
      <Particles
        id="tsparticles"
        className={styles.particles}
        init={particlesInit}
        options={options}
      />
    </>
  );
}
