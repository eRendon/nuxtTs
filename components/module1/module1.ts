import Vue from 'vue'
import { module2, module1, auth } from '../../store'
export default Vue.extend({
  name: 'Module1',
  computed: {
    getCountModule2() {
      return module1.getters.getCount()
    },
    countModule2() {
      return module2.state.count
    }
  },
  data: () => ({
    authenticated: true as boolean
  }),
  methods: {
    setCountModule2(number: number): void {
      this.authenticated = auth.getters.getAuth()
      if (this.authenticated) module2.actions.setCount(number)
      setTimeout(() => {
        this.authenticated = true
      }, 1000)
    }
  }
})
