import { state } from './state'
export default {
  setAuth(auth: boolean) {
    state.auth = auth
  }
}
