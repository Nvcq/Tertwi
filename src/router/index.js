import Vue from 'vue';
import VueRouter from 'vue-router';
import SignInView from '../views/SignInView.vue';
import SignUpView from '../views/SignUpView.vue';
import Feed from '../views/Feed.vue';
import MyFeed from '../views/MyFeed.vue';
import Post from '../views/Post.vue';
import Test from '../views/Test.vue';

import { supabase } from "./../supabase.js";

// modules
import {user} from "@/store/modules/user.module";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'signIn',
    component: SignInView,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/signup',
    name: 'signUp',
    component: SignUpView,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/feed',
    name: 'feed',
    component: Feed,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/myfeed',
    name: 'myfeed',
    component: MyFeed,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
    meta: {
      requireAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {
  let has_user = supabase.auth.user();

  if(to.matched.some((record) => {return record.meta.requireAuth})){
    if(has_user){
      user.state.user_data = has_user;     // User infos
      next();
    }
    else {
      next({
        name: "signIn",
      })
    }
  }
  else {
    next();
  }
});

export default router;
