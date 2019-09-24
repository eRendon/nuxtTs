import Vue from 'vue'
import { module1, module2, auth } from '../../store'
export default Vue.extend({
  name: 'Module2',
  computed: {
    getCountModule1() {
      return module2.getters.getCount()
    },
    countModule1() {
      return module1.state.count
    }
  },
  data: () => ({
    authenticated: true as boolean
  }),
  methods: {
    setCountModule1(number: number): void {
      this.authenticated = auth.getters.getAuth()
      if (this.authenticated) module1.actions.setCount(number)
      setTimeout(() => {
        this.authenticated = true
      }, 1000)
    }
  }
})
