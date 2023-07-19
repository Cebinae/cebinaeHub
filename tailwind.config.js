/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode:"jit",
  theme: {
    extend: {
              backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
              },
              keyframes:{
                    greetingLeft:{
                      '0%': {transform: 'translateX(-100%)',
                                    
                    },
                      '100%':{transform: 'translateX(0%)'}
                    },
                    
                    greetingRight:{
                      '0%': {
                        transform: 'translateX(100%)',
                        opacity:0 
                    },
                      '100%':{
                        transform: 'translateX(0%)',
                        opacity:1
                    }},

                    greetingArticle:{
                      '0%':{
                        transform:'translateY(100%)',
                        opacity:0
                    },
                      '100%':{
                        transform:'translateY(0%)',
                        opacity:1}
                    },
                    headerAppear:{
                      '0%':{
                        transform:'translateY(-100%)',
                        opacity:0
                      },
                      '100%':{
                        transform:'translateY(0)',
                        opacity:1
                      }
                    },
                    rotorSpin:{
                      '0%':{transform:'rotate(0deg)'},
                      '100%':{transform:'rotate(360deg)'}

                    },
                    cloudsToRight:{
                      '0%':{
                          transform:'translateX(px)'
                          },
                      '100%':{ 
                        transform:'translateX(2000px)' 
                      }
              
              }
                  
    },

    animation:{
      greetingLeft:'greetingLeft 1s linear',
      greetingRight:"greetingRight 1s linear",
      greetingArticle:'greetingArticle 1s linear',
      headerAppear:'headerAppear 1s linear',
      rotorSpin: 'rotorSpin 1s linear infinite',
      cloudsToRight : 'cloudsToRight 20s linear'
    },
    colors:{
      'green': '#8dd294',
      'darkGreen':'#44a569',
      'blue':'#4daef8',
      'bodyBg':'#1d1f20',
      'bg100':'#3e4044',
      'bg200':'#35373a',
      'bg400':'#2a2c2e',
      'bg700':'#1d1f20',
      'bg1000':'#17191a',
      'bgBlue':'#4daef8',
      'bgGray':'#3e4044',
      'badgeBg':'#2a2c2e',
      'borderColor':'#2a2c2e',
      'lightPrimary':'#fff',
      'lightSecondary':'#848484',
      'darkOrange':'#f08441',
      'lightOrange':'#ffb661',
      'red':'#ff6464'
  
  
    },
  },

  plugins: [],
  }}
