const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/logosSection/*.{tsx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
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
                    },
                    stars1:{
                      '0%': {
                        opacity:0.3,
                        transform:'scale(0.5)'
                      },
                      '50%': {
                        opacity:0.3,
                        transform:'scale(0.5)',                        
                      },
                      '75%': {
                        opacity:0.7,
                        transform:'scale(1.3)'
                      },
                      '100%': {
                        opacity:0.3,
                        transform:'scale(0.5)'
                      },
                    },
                    stars2:{
                      '0%': {
                        opacity:0.3,
                        transform:'scale(0.5)'
                      },
                      '40%': {
                        opacity:0.7,
                        transform:'scale(1.3)',                        
                      },
                      '80%': {
                        opacity:0.3,
                        transform:'scale(0.5)'
                      },
                      '100%': {
                        opacity:0.3,
                        transform:'scale(0.5)'
                      },
                    },
                    stars3:{
                      '10%': {
                        opacity:0.3,
                        transform:'scale(0.5)'
                      },
                      '30%': {
                        opacity:0.7,
                        transform:'scale(1.3)',                        
                      },
                      '60%': {
                        opacity:0.3,
                        transform:'scale(0.5)'
                      },
                      '100%': {
                        opacity:0.3,
                        transform:'scale(0.5)'
                      },
                    },
                    logo:{
                      '0%':{
                        opacity:0,
                        transform:'translateY(150%)'
                      },
                      '100%':{
                        opacity:1,
                        transform:'translateY(0%)'
                      }
                    },
                    logoWiggle:{
                    '0%':{
                        transform:'translateY(0)'
                    },
                    '25%':{
                        transform:'translateY(-30px)'
                    },  
                    '50%':{
                        transform:'translateY(0)'
                    },  
                    '75%':{
                        transform:'translateY(30px)'
                    },
                    '100%':{
                        transform:'translateY(0px)'
                      },
                    },
                    eduNote:{
                      '0%': {
                        transform: 'translateX(800%)'          
                      },
                      '100%':{
                        transform: 'translateX(0)'     
                      }
                    },

                    btnDownloadCollapse:{
                      '0%':{
                        width:'50%'
                      },
                      '100%':{
                        // flex:0,
                        width:'0%',
                        display:'none'
                        
                      }      
                      },
                    btnReveal:{
                        // '0%':{
                        //   width:'0%'
                        // },
                        '100%':{
                          // flex:0,
                          width:'50%',
                          
                        },
                    }
              
              }
                  
    },

    animation:{
      greetingLeft:'greetingLeft 1s linear',
      greetingRight:"greetingRight 1s linear",
      greetingArticle:'greetingArticle 1s linear',
      headerAppear:'headerAppear 0.2s linear',
      rotorSpin: 'rotorSpin 1s linear infinite',
      cloudsToRight : 'cloudsToRight 20s linear',
      stars1: 'stars1 3s ease-in-out infinite 2s',
      stars2: 'stars2 3s ease-in-out infinite 3s',
      stars3: 'stars3 3s ease-in-out infinite 4s',
      eduNote: 'eduNote 3s ease-in-out',
      btnCollapse: 'btnDownloadCollapse 0.3s linear',
      btnReveal: 'btnReveal 0.3s linear'

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

  plugins: [ 
  ],
  }
