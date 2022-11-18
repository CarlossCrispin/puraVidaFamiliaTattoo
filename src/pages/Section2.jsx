import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import PropTypes from 'prop-types'
import classNames from "classnames";

const Section2 =({scroll}) => {

  const Show = classNames(
    scroll > 700
      ? ''
      : 'hidden'
  )
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div id="section2" className="h-screen flex items-center justify-center">
      <h1 className="text-5xl text-red-500 dark-text-50">
        SECTION 2
      </h1>

      <Particles
        className={Show}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          /* background: {
            color: {
              value: "#0d47a1",
            },
          }, */
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            /* links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            }, */
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.8,
            },
            "shape": {
              "type": [
                "image",
                // "circle"
              ],
              "image": [
                {
                  "src": "/public/craneo.png",
                  "height": 20,
                  "width": 23
                },
                {
                  "src": "/public/agarre.png",
                  "height": 20,
                  "width": 20
                },
                {
                  "src": "/public/swallow.png",
                  "height": 20,
                  "width": 20
                },
                {
                  "src": "/public/plantilla.png",
                  "height": 20,
                  "width": 20
                }
              ]
            },
            size: {
              value: { min: 15, max: 20 },
            },
          },
          detectRetina: true,
        }}
      />
      {/* <Particles
        id="tsparticles"
        init={particlesInit}

        options={{
          "particles": {
            "number": {
              "value": 8,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "line_linked": {
              "enable": false
            },
            "move": {
              "speed": 1,
              "out_mode": "out"
            },
            "shape": {
              "type": [
                "image",
                "circle"
              ],
              "image": [
                {
                  "src": "/public/craneo.png",
                  "height": 20,
                  "width": 23
                },
                {
                  "src": "/public/agarre.png",
                  "height": 20,
                  "width": 20
                },
                {
                  "src": "/public/swallow.png",
                  "height": 20,
                  "width": 20
                },
                {
                  "src": "/public/plantilla.png",
                  "height": 20,
                  "width": 20
                }
              ]
            },
            "color": {
              "value": "#CCC"
            },
            "size": {
              "value": 30,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 10,
                "sync": false
              }
            }
          },
          "retina_detect": false
        }}
      /> */}
    </div>
  )
}

Section2.propTypes = {
  scroll: PropTypes.number
}

export default Section2