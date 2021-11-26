module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'azul-escuro': '#04458c',
        'azul-medio': '#04668c',
        'brancof2': '#f2f2f2',
        'marrom': '#404040',
        'preto0d': '#0d0d0d'
      },
      fontFamily:{
        'cinzel-decorative': ["Cinzel Decorative"],
        'roboto': ['Roboto'],
        'anton': ['Anton'],
      },
      backgroundImage: {
        'checklist': "url('../img/checklist2.jpg')",
      },
      spacing: {
        '575px': '575px',
        '356px': '356px',
        '153px': '153px',
        '44px': '44px',
        'imagem': '234px',
        '16px': '16px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
