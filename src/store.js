import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        name: 'test',
        img: "https://res.cloudinary.com/teepublic/image/private/s--MS7fPL0u--/t_Preview/b_rgb:eae0c7,c_lpad,f_jpg,h_630,q_90,w_1200/v1480374891/production/designs/872050_1.jpg"
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
