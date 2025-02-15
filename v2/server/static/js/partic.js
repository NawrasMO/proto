particlesJS('particles-js', {
    particles: {
        number: {
            value: 60, // Number of particles
            density: {
                enable: true,
                value_area: 800 // Denseness of particles
            }
        },
        color: {
            value: '#ffffff' // Particle color
        },
        shape: {
            type: 'circle', // Particle shape ('circle', 'edge', 'triangle', 'polygon', 'star', 'image')
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none', // Move direction ('none', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left')
            random: false,
            straight: false,
            out_mode: 'out', // Move out mode ('out' or 'bounce')
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse' // Mouse hover mode ('grab', 'bubble', 'repulse')
            },
            onclick: {
                enable: true,
                mode: 'push' // Click mode ('push', 'remove', 'bubble', 'repulse')
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true // Enables retina display detection
});