import { useCallback} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import PropTypes from 'prop-types'
import classNames from "classnames";


const Section3 = ({ scroll }) => {

  const Show = classNames(
    scroll > 700
      ? 'h-screen w-screen'
      : ''
  )
  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // await console.log(container);
  }, []);

  return (
    <div id="section3" className="h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 border border-lime-500">
      <h1 className="text-5xl text-red-500 dark:text-slate-50 z-10 absolute">
        SECTION 3
      </h1>
      <div className="h-screen w-screen">

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
            fullScreen: { enable: false },
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
                  default: "destroy",
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
                    "src": "/craneo.png",
                    "height": 20,
                    "width": 23
                  },
                  {
                    "src": "/agarre.png",
                    "height": 20,
                    "width": 20
                  },
                  {
                    "src": "/swallow.png",
                    "height": 20,
                    "width": 20
                  },
                  {
                    "src": "/plantilla.png",
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

      </div>
    </div>
  )
}

Section3.propTypes = {
  scroll: PropTypes.number
}

export default Section3