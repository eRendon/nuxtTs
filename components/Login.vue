<template>
  <div class="p-5">
    <div v-if="!ctrlViews">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <logo />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Inicio de sesión</div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              v-model="name.firstName"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Password
            </label>
            <input
              v-model="name.password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="pb-5">
          <button
            @click="logIn"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            iniciar sesión
          </button>
        </div>
        <transition name="fade">
          <div class="pt-2 pb-5" v-if="!ctrlError">
            <p class="text-red-500 text-xs italic">Error de inicio de sesión</p>
          </div>
        </transition>
      </div>
    </div>
    <div v-if="ctrlViews">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <logo />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            Ha iniciado sesión, use los componentes
          </div>
        </div>
        <div class="pb-5">
          <button
            @click="logOut"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            cerrar sesión
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { auth, module2, module1 } from '../store'
import Vue from 'vue'
interface User {
  firstName: string
  password: string
}
export default Vue.extend({
  name: 'user',
  data: () => ({
    message: 'algo',
    ctrlError: true as boolean,
    ctrlViews: false as boolean,
    name: {
      firstName: '',
      password: ''
    }
  }),

  methods: {
    logIn(): void {
      this.ctrlError = this.validateLogin(this.name)
      this.ctrlViews = this.ctrlError
      if (this.ctrlViews) {
        auth.actions.setAuth(true)
      }
      setTimeout(() => {
        this.ctrlError = true
      }, 1000)
    },
    validateLogin(user: User): boolean {
      return user.firstName === 'vue' && user.password === '1234'
    },
    logOut(): void {
      auth.actions.setAuth(false)
      module2.actions.setCount(0)
      module1.actions.setCount(0)
      this.ctrlViews = false
    }
  }
})
</script>

<style scoped></style>
