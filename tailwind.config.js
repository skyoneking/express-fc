/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
    darkMode: false,
    theme: {
        fontSize: {
            sm: ['14px', '20px'],
            base: ['16px', '24px'],
            lg: ['20px', '28px'],
            xl: ['24px', '32px'],
            '2xl': ['28px', '36px'],
        },
        extend: {
            spacing: {
                1: '1px',
                2: '2px',
                3: '3px',
                4: '4px',
                5: '5px',
                6: '6px',
                7: '7px',
                8: '8px',
                9: '9px',
                10: '10px',
                20: '20px',
                30: '30px',
                40: '40px',
                50: '50px',
                60: '60px',
                70: '70px',
                80: '80px',
                90: '90px',
                100: '100px',
                200: '200px',
                300: '300px',
                400: '400px',
                500: '500px',
                600: '600px',
                700: '700px',
                800: '800px',
                900: '900px',
                1000: '1000px',
            }
        },
        minWidth: {
            100: '100px'
        }
    },
    plugins: [],
}
