import Vue from 'vue';
import VueRouter from 'vue-router';
import SignInView from '../views/SignInView.vue';
import SignUpView from '../views/SignUpView.vue';

// modules
import {user} from "@/store/modules/user.module";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'signIn',
    component: SignInView,
  },
  {
    path: '/signup',
    name: 'signUp',
    component: SignUpView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
