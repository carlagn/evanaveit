import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _267014d9 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _4d3b16ec = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _5fe44041 = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _887e87c2 = () => interopDefault(import('../pages/projects/0.vue' /* webpackChunkName: "pages/projects/0" */))
const _5496f005 = () => interopDefault(import('../pages/projects/adorus.vue' /* webpackChunkName: "pages/projects/adorus" */))
const _3c84eaee = () => interopDefault(import('../pages/projects/cave.vue' /* webpackChunkName: "pages/projects/cave" */))
const _4b3c9075 = () => interopDefault(import('../pages/projects/posters.vue' /* webpackChunkName: "pages/projects/posters" */))
const _354d2bf2 = () => interopDefault(import('../pages/projects/waiting-for-your-text.vue' /* webpackChunkName: "pages/projects/waiting-for-your-text" */))
const _62946084 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/evanaveit/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/About",
      component: _267014d9,
      name: "About"
    }, {
      path: "/Contact",
      component: _4d3b16ec,
      name: "Contact"
    }, {
      path: "/projects",
      component: _5fe44041,
      name: "projects"
    }, {
      path: "/projects/0",
      component: _887e87c2,
      name: "projects-0"
    }, {
      path: "/projects/adorus",
      component: _5496f005,
      name: "projects-adorus"
    }, {
      path: "/projects/cave",
      component: _3c84eaee,
      name: "projects-cave"
    }, {
      path: "/projects/posters",
      component: _4b3c9075,
      name: "projects-posters"
    }, {
      path: "/projects/waiting-for-your-text",
      component: _354d2bf2,
      name: "projects-waiting-for-your-text"
    }, {
      path: "/",
      component: _62946084,
      name: "index"
    }],

    fallback: false
  })
}
