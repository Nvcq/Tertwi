<template>

  <div class="md:flex md:items-center md:justify-between p-5 bg-black">
    <div class="flex-1 min-w-0">
      <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate text-left">
        Le Blog des foufous
      </h2>
    </div>
    <div v-if="user_data.role" class="mt-4 flex md:mt-0 md:ml-4">
      <button
        @click="goTo('catalogue')"
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
      >
        Catalogue
      </button>
      <button
        @click="signOut"
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
      >
        Sign out
      </button>
    </div>
    <div v-else class="mt-4 flex md:mt-0 md:ml-4">
      <button
        @click="goTo('signUp')"
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
      >
        Sign up
      </button>
      <button
        @click="goTo('signIn')"
        type="button"
        class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
      >
        Sign In
      </button>
    </div>

  </div>

</template>

<script>

import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("user", ["user_data"]),
  },
  methods: {
    ...mapActions("user", ["setUser"]),
    goTo(name){
      this.$router.push({name: name})
    },
    async signOut() {
      const { error } = await this.$supabase.auth.signOut();
      if(error) {
        console.log(error);
      } else {
        this.setUser({});
        this.goTo("home");
      }
    },
  },
};

</script>
