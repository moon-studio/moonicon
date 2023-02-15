import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized
} from 'vue-router'
import routes from './routes'

// NProgress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.MODE === 'production' ? '/' : '/'),
  routes
})

/**
 * Routing to intercept
 */
router.beforeEach(
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    NProgress.start()
    next()
    NProgress.done()
  }
)

router.afterEach(() => {
  NProgress.done()
})

export default router
