const {fontFamily} = require('tailwindcss/defaultTheme');

const config = {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],

    theme: {
        extend: {
            fontFamily: {
                angry: ['angry_birds', 'sans-serif' ]
            },
            keyframes: {
                wiggle: {
                    '0%': { transform: 'rotate(-6deg)' },
                    // '25%': {transform: 'rotate(10deg'},
                    '50%': {transform: 'rotate(6deg)'},
                    // '75%': {transform: 'rotate(-10deg'},
                    '100%': { transform: 'rotate(-6deg)' },
                },
                bounce: {
                    '0%, 100%': {
                      transform: 'translateY(0)'},
                    '50%': {
                      transform: 'translateY(-3px)'},
                  }
            },

        },
    },

    // plugins: [require("daisyui"), require("flowbite/plugin")],
};

module.exports = config;