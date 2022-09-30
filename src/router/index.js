import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../components/ValidateForm.vue')
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewView.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../components/ComponentA.vue')
      },
      {
        path: 'b',
        component: () => import('../components/ComponentB.vue')
      },
      {
        path: 'namedpage',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'a2b',
            components: {
              left: () => import('../components/ComponentA.vue'),
              right: () => import('../components/ComponentB.vue')
            }
          },
          {
            path: 'b2c',
            components: {
              left: () => import('../components/ComponentB.vue'),
              right: () => import('../components/ComponentC.vue')
            }
          }
        ]
      },
      {
        path: 'dynamicrouter/:id',
        component: () => import('../views/DynamicRouter.vue')
      },
      {
        path: 'dynamicrouterbyprops/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          return {
            id: route.params.id
          }
        }
      },
      {
        path: 'routernavigation',
        component: () => import('../views/RouterNavigation.vue')
      }
    ]
  },
  {
    // 404頁面
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
  // {
  //   // 重新導向
  //   path: '/:pathMatch(.*)*',
  //   redirect: {
  //     name: 'home'
  //   }
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  scrollBehavior () {
    return {
      top: 0 // 切換頁面時自動滾動到最上方
    }
  },
  routes
})

export default router
