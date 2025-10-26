import { createRouter, createWebHistory } from 'vue-router'

// Import pages
import HomePage from '@/views/flowers/HomePage.vue'
import CatalogPage from '@/views/flowers/CatalogPage.vue'
import ProductPage from '@/views/flowers/ProductPage.vue'
import CartPage from '@/views/flowers/CartPage.vue'
import CheckoutPage from '@/views/flowers/CheckoutPage.vue'
import ForumPage from '@/views/flowers/ForumPage.vue'
import ReviewsPage from '@/views/flowers/ReviewsPage.vue'
import PromotionsPage from '@/views/flowers/PromotionsPage.vue'
import NewsPage from '@/views/flowers/NewsPage.vue'
import AboutPage from '@/views/flowers/AboutPage.vue'
import DeliveryPage from '@/views/flowers/DeliveryPage.vue'
import ContactsPage from '@/views/flowers/ContactsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'FLOWERS-UKRAINE - Доставка цветов и подарков'
    }
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: CatalogPage,
    meta: {
      title: 'Каталог товаров - FLOWERS-UKRAINE'
    }
  },
  {
    path: '/product/:id?',
    name: 'Product',
    component: ProductPage,
    meta: {
      title: 'Товар - FLOWERS-UKRAINE'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
    meta: {
      title: 'Корзина - FLOWERS-UKRAINE'
    }
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutPage,
    meta: {
      title: 'Оформление заказа - FLOWERS-UKRAINE'
    }
  },
  {
    path: '/forum',
    name: 'Forum',
    component: ForumPage,
    meta: {
      title: 'Форум - FLOWERS-UKRAINE'
    }
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: ReviewsPage,
    meta: {
      title: 'Отзывы - FLOWERS-UKRAINE'
    }
  },
  {
    path: '/promotions',
    name: 'Promotions',
    component: PromotionsPage,
    meta: {
      title: 'Акции - FLOWERS-UKRAINE'
    }
  },
  {
    path: '/news',
    name: 'News',
    component: NewsPage,
    meta: {
      title: 'Новости - FLOWERS-UKRAINE'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: {
      title: 'О нас - FLOWERS-UKRAINE'
    }
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: DeliveryPage,
    meta: {
      title: 'Доставка и оплата - FLOWERS-UKRAINE'
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: ContactsPage,
    meta: {
      title: 'Контакты - FLOWERS-UKRAINE'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundPage.vue'),
    meta: {
      title: 'Страница не найдена - FLOWERS-UKRAINE'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update page title on route change
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router