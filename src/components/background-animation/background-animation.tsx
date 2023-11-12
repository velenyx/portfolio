'use client';

import { useTheme } from 'next-themes';
import React, { useCallback } from 'react';
import { Particles } from 'react-particles';
import { loadFull } from 'tsparticles';
import { Container, Engine } from 'tsparticles-engine';

export const BackgroundAnimation = () => {
  const { theme } = useTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
      container?.loadTheme(theme);
    },
    [theme]
  );

  const options = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      groups: {
        z5000: {
          number: {
            value: 70,
          },
          zIndex: {
            value: 50,
          },
        },
        z7500: {
          number: {
            value: 30,
          },
          zIndex: {
            value: 75,
          },
        },
        z2500: {
          number: {
            value: 50,
          },
          zIndex: {
            value: 25,
          },
        },
        z1000: {
          number: {
            value: 40,
          },
          zIndex: {
            value: 10,
          },
        },
      },
      number: {
        value: 150,
      },
      color: {
        value: '#fff',
        animation: {
          enable: false,
          speed: 2,
          sync: true,
        },
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 1,
      },
      size: {
        value: 3,
      },
      move: {
        angle: {
          value: 10,
          offset: 0,
        },
        enable: true,
        speed: 5,
        direction: 'right',
      },
      zIndex: {
        value: 5,
        opacityRate: 0.5,
      },
    },
    background: {
      color: 'transparent',
    },
    emitters: {
      position: {
        y: 55,
        x: -5,
      },
      rate: {
        delay: 7,
        quantity: 1,
      },
      size: {
        width: 0,
        height: 0,
      },
      particles: {
        shape: {
          type: 'images',
          options: {
            images: {
              src: 'https://particles.js.org/images/cyan_amongus.png',
              width: 500,
              height: 634,
            },
          },
        },
        size: {
          value: 70,
        },
        move: {
          speed: 10,
          outModes: {
            default: 'none',
            right: 'destroy',
          },
          straight: true,
        },
        zIndex: {
          value: 0,
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 10,
            sync: true,
          },
        },
      },
    },
    themes: [
      {
        name: 'dark',
        options: {
          particles: {
            color: {
              value: '#ffffff',
            },
          },
        },
      },
      {
        name: 'light',
        options: {
          particles: {
            color: {
              value: '#000',
            },
          },
        },
      },
    ],
  };

  return (
    <>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        // @ts-ignore
        options={options}
      />
    </>
  );
};
