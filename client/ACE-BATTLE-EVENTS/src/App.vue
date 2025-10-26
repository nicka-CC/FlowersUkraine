<template>
  <div id="app">
    <!-- Desktop Header -->
    <Header v-if="!isMobile" />
    
    <!-- Mobile Header -->
    <MobileHeader 
      v-if="isMobile" 
      :breadcrumb="currentBreadcrumb"
      :cart-count="cartCount"
    />

    <!-- Main Content -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>ИНФОРМАЦИЯ</h4>
            <ul>
              <li><router-link to="/about">О нас</router-link></li>
              <li><router-link to="/delivery">Доставка и оплата</router-link></li>
              <li><a href="#">Политика конфиденциальности</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>СЛУЖБА ПОДДЕРЖКИ</h4>
            <ul>
              <li><a href="#">Карта сайта</a></li>
              <li><a href="#">Возврат товара</a></li>
              <li><router-link to="/contacts">Связаться с нами</router-link></li>
              <li><a href="#">Для сотрудничества</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>ЛИЧНЫЙ КАБИНЕТ</h4>
            <ul>
              <li><a href="#">Личный кабинет</a></li>
              <li><a href="#">История заказа</a></li>
              <li><a href="#">Закладки</a></li>
              <li><a href="#">Список новостей</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>ДОПОЛНИТЕЛЬНО</h4>
            <ul>
              <li><a href="#">Подарочные сертификаты</a></li>
              <li><router-link to="/promotions">Акции</router-link></li>
              <li><a href="#">Цветы в офис</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-logo">
            <i class="icon-flower"></i>
            <span>FLOWERS-UKRAINE</span>
          </div>
          <div class="footer-contact">
            <div class="contact-item">
              <i class="icon-phone"></i>
              <span>+38 (063) 829 30 30</span>
            </div>
            <div class="contact-item">
              <i class="icon-phone"></i>
              <span>+38 (067) 829 30 30</span>
            </div>
            <div class="contact-item">
              <i class="icon-skype"></i>
              <span>Skype: Flowers-Ukraine</span>
            </div>
            <div class="contact-item">
              <i class="icon-email"></i>
              <span>flowers.ukraine2014@gmail.com</span>
            </div>
          </div>
          <div class="footer-social">
            <a href="#" class="social-link">
              <i class="icon-instagram"></i>
            </a>
            <a href="#" class="social-link">
              <i class="icon-facebook"></i>
            </a>
            <a href="#" class="social-link">
              <i class="icon-telegram"></i>
            </a>
            <a href="#" class="social-link">
              <i class="icon-viber"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/flowers/Header.vue';
import MobileHeader from '@/components/flowers/MobileHeader.vue';

const route = useRoute();
const isMobile = ref(false);
const cartCount = ref(1520);

// Breadcrumb mapping
const breadcrumbMap: Record<string, string> = {
  '/': 'Главная',
  '/catalog': 'Каталог',
  '/product': 'Товар',
  '/cart': 'Корзина',
  '/checkout': 'Оформление заказа',
  '/forum': 'Форум',
  '/reviews': 'Отзывы',
  '/promotions': 'Акции',
  '/news': 'Новости',
  '/about': 'О нас',
  '/delivery': 'Доставка и оплата',
  '/contacts': 'Контакты'
};

const currentBreadcrumb = computed(() => {
  return breadcrumbMap[route.path] || 'Главная';
});

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
  color: #333;
  line-height: 1.6;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Icons */
[class^="icon-"]:before,
[class*=" icon-"]:before {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}

.icon-flower:before { content: "\f1bb"; }
.icon-heart:before { content: "\f004"; }
.icon-cart:before { content: "\f07a"; }
.icon-search:before { content: "\f002"; }
.icon-phone:before { content: "\f095"; }
.icon-truck:before { content: "\f0d1"; }
.icon-user:before { content: "\f007"; }
.icon-chevron-down:before { content: "\f078"; }
.icon-chevron-up:before { content: "\f077"; }
.icon-chevron-left:before { content: "\f053"; }
.icon-chevron-right:before { content: "\f054"; }
.icon-close:before { content: "\f00d"; }
.icon-map:before { content: "\f278"; }
.icon-clock:before { content: "\f017"; }
.icon-skype:before { content: "\f17e"; }
.icon-email:before { content: "\f0e0"; }
.icon-instagram:before { content: "\f16d"; }
.icon-facebook:before { content: "\f09a"; }
.icon-telegram:before { content: "\f2c6"; }
.icon-viber:before { content: "\f409"; }
.icon-pinterest:before { content: "\f0d2"; }
.icon-grid:before { content: "\f00a"; }
.icon-message-circle:before { content: "\f075"; }
.icon-star:before { content: "\f005"; }
.icon-percent:before { content: "\f295"; }
.icon-newspaper:before { content: "\f1ea"; }
.icon-info:before { content: "\f129"; }
.icon-trash:before { content: "\f1f8"; }
.icon-camera:before { content: "\f030"; }
.icon-video:before { content: "\f03d"; }
.icon-gift:before { content: "\f06b"; }

/* App Footer */
.app-footer {
  background: #333;
  color: #fff;
  padding: 40px 0 20px;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 30px;
}

.footer-section h4 {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 20px 0;
  color: #fff;
}

.footer-section ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #ccc;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #e91e63;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #555;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}

.footer-logo i {
  color: #e91e63;
  font-size: 20px;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ccc;
  font-size: 14px;
}

.contact-item i {
  color: #e91e63;
  width: 16px;
}

.footer-social {
  display: flex;
  gap: 10px;
}

.social-link {
  width: 35px;
  height: 35px;
  background: #555;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  text-decoration: none;
  transition: all 0.3s;
}

.social-link:hover {
  background: #e91e63;
  color: #fff;
}

/* Mobile Styles */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .footer-contact {
    align-items: center;
  }

  .footer-social {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-section h4 {
    font-size: 14px;
  }

  .footer-section a {
    font-size: 13px;
  }

  .footer-logo {
    font-size: 16px;
  }

  .contact-item {
    font-size: 13px;
  }
}

/* Utility Classes */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: 0.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 1rem; }
.mb-4 { margin-bottom: 1.5rem; }
.mb-5 { margin-bottom: 3rem; }

.mt-0 { margin-top: 0; }
.mt-1 { margin-top: 0.25rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-3 { margin-top: 1rem; }
.mt-4 { margin-top: 1.5rem; }
.mt-5 { margin-top: 3rem; }

.p-0 { padding: 0; }
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 1rem; }
.p-4 { padding: 1.5rem; }
.p-5 { padding: 3rem; }

.d-none { display: none; }
.d-block { display: block; }
.d-flex { display: flex; }
.d-grid { display: grid; }

.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }

.align-center { align-items: center; }
.align-start { align-items: flex-start; }
.align-end { align-items: flex-end; }

.w-100 { width: 100%; }
.h-100 { height: 100%; }

/* Animation Classes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>