import Vue from 'vue';

const state = Vue.observable(
  {
    technologyFilter: [],
    contactLinks: {
      Github: 'https://github.com/Glabdugrib',
      Linkedin: 'https://www.linkedin.com/in/simone-sada/',
      Instagram: 'https://www.instagram.com/glabdugrib/'
    },
    email: 'simone.sada93@gmail.com'
  }
);

export default state;