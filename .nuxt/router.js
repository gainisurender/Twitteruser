import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5264d646 = () => interopDefault(import('..\\pages\\CreatePost.vue' /* webpackChunkName: "pages/CreatePost" */))
const _0a9f2aac = () => interopDefault(import('..\\pages\\Post.vue' /* webpackChunkName: "pages/Post" */))
const _176579e2 = () => interopDefault(import('..\\pages\\Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _785b177a = () => interopDefault(import('..\\pages\\Registration.vue' /* webpackChunkName: "pages/Registration" */))
const _0447db54 = () => interopDefault(import('..\\pages\\UserHome.vue' /* webpackChunkName: "pages/UserHome" */))
const _3f068158 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CreatePost",
    component: _5264d646,
    name: "CreatePost"
  }, {
    path: "/Post",
    component: _0a9f2aac,
    name: "Post"
  }, {
    path: "/Profile",
    component: _176579e2,
    name: "Profile"
  }, {
    path: "/Registration",
    component: _785b177a,
    name: "Registration"
  }, {
    path: "/UserHome",
    component: _0447db54,
    name: "UserHome"
  }, {
    path: "/",
    component: _3f068158,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
