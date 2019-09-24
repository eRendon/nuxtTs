import Vue from 'vue'
import Login from '~/components/Login.vue'
import Module1 from '~/components/module1/Module1.vue'
import Module2 from '~/components/module2/Module2.vue'

export default Vue.extend({
  components: {
    Login,
    Module1,
    Module2
  },

  data: () => ({
    message: 'algo',
    name: 'algo'
  })
})
