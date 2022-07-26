import Vue from 'vue';
import VueRouter from 'vue-router';

import {
  extendRoutes,
} from '~/.nuxt/routerHelper.modules';

Vue.use(VueRouter);

// eslint-disable-next-line import/prefer-default-export
export function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/',
    routes: extendRoutes(),
  });
}
