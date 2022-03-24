<template>

  <div>
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
      </div>
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div class="space-y-6">
            <div>
              <label for="email" class="block text-left text-sm font-medium text-gray-700"> Email address </label>
              <div class="mt-1">
                <input id="email" v-model="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm text-left font-medium text-gray-700"> Password </label>
              <div class="mt-1">
                <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="text-sm">
                <a href="signUp" class="font-medium text-indigo-600 hover:text-indigo-500"> Not a member ? Sign up here </a>
              </div>
            </div>

            <div>
              <button @click="signUser()" type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions } from "vuex";

export default {
  data(){
    return{
      email: "",
      password: "",
    }
  },
  methods: {
    ...mapActions('user', ["setUser"]),
    async signUser() {
      const { error, user } = await this.$supabase.auth.signIn({
        email: this.email,
        password: this.password,
      });
      if (user) {
        this.setUser(user);
      }
      else if (error) {
        console.log(error);
      }
	}
    }
}
</script>
