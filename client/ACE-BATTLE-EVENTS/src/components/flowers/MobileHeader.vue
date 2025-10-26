<template>
  <div class="mobile-header">
    <!-- Top Bar -->
    <div class="header__top">
      <div class="container">
        <div class="header__top-content">
          <div class="header__top-left">
            <span class="header__breadcrumb">{{ breadcrumb }}</span>
            <div class="header__dropdowns">
              <select class="header__dropdown">
                <option>Грн</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
              <a href="#" class="header__link">
                <i class="icon-truck"></i>
                Доставка и оплата
              </a>
              <select class="header__dropdown">
                <option>RU</option>
                <option>EN</option>
                <option>UA</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="header__main">
      <div class="container">
        <div class="header__main-content">
          <button class="hamburger-btn" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div class="header__logo">
            <div class="header__logo-icon">
              <i class="icon-flower"></i>
            </div>
            <div class="header__logo-text">
              <h1>FLOWERS-UKRAINE</h1>
            </div>
          </div>

          <div class="header__actions">
            <button class="header__action-btn" @click="toggleSearch">
              <i class="icon-search"></i>
            </button>
            <a href="#" class="header__action-btn">
              <i class="icon-cart"></i>
              <span v-if="cartCount" class="header__badge">{{ cartCount }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="mobile-menu">
      <div class="mobile-menu__overlay" @click="closeMenu"></div>
      <div class="mobile-menu__content">
        <div class="mobile-menu__header">
          <h3>Меню</h3>
          <button class="mobile-menu__close" @click="closeMenu">
            <i class="icon-close"></i>
          </button>
        </div>
        
        <nav class="mobile-menu__nav">
          <ul class="mobile-menu__list">
            <li class="mobile-menu__item">
              <a href="#" class="mobile-menu__link">
                <i class="icon-grid"></i>
                Каталог товаров
              </a>
            </li>
            <li class="mobile-menu__item">
              <a href="#" class="mobile-menu__link">
                <i class="icon-message-circle"></i>
                Форум
              </a>
            </li>
            <li class="mobile-menu__item">
              <a href="#" class="mobile-menu__link">
                <i class="icon-star"></i>
                Отзывы
              </a>
            </li>
            <li class="mobile-menu__item">
              <a href="#" class="mobile-menu__link">
                <i class="icon-percent"></i>
                Акции
              </a>
            </li>
            <li class="mobile-menu__item">
              <a href="#" class="mobile-menu__link">
                <i class="icon-newspaper"></i>
                Новости
              </a>
            </li>
            <li class="mobile-menu__item">
              <a href="#" class="mobile-menu__link">
                <i class="icon-info"></i>
                Информация
              </a>
            </li>
          </ul>
        </nav>

        <div class="mobile-menu__contact">
          <div class="mobile-menu__phone">
            <i class="icon-phone"></i>
            +38 (067) 829 30 30
          </div>
          <div class="mobile-menu__social">
            <a href="#" class="mobile-menu__social-link">
              <i class="icon-instagram"></i>
            </a>
            <a href="#" class="mobile-menu__social-link">
              <i class="icon-facebook"></i>
            </a>
            <a href="#" class="mobile-menu__social-link">
              <i class="icon-telegram"></i>
            </a>
            <a href="#" class="mobile-menu__social-link">
              <i class="icon-viber"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Overlay -->
    <div v-if="isSearchOpen" class="search-overlay">
      <div class="search-overlay__content">
        <div class="search-overlay__header">
          <h3>Поиск</h3>
          <button class="search-overlay__close" @click="closeSearch">
            <i class="icon-close"></i>
          </button>
        </div>
        <div class="search-overlay__form">
          <input 
            type="text" 
            placeholder="Поиск по категориям" 
            class="search-overlay__input"
          >
          <input 
            type="text" 
            placeholder="Поиск по товарам" 
            class="search-overlay__input"
          >
          <button class="search-overlay__btn">
            <i class="icon-search"></i>
            Найти
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  breadcrumb?: string;
  cartCount?: number;
}

const props = withDefaults(defineProps<Props>(), {
  breadcrumb: 'Главная',
  cartCount: 0
});

const isMenuOpen = ref(false);
const isSearchOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    isSearchOpen.value = false;
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  if (isSearchOpen.value) {
    isMenuOpen.value = false;
  }
};

const closeSearch = () => {
  isSearchOpen.value = false;
};
</script>

<style scoped>
.mobile-header {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header__top {
  background: #333;
  color: #fff;
  padding: 8px 0;
}

.header__top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__top-left {
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
}

.header__breadcrumb {
  font-weight: 500;
  font-size: 12px;
}

.header__dropdowns {
  display: flex;
  gap: 10px;
  align-items: center;
}

.header__dropdown {
  background: transparent;
  color: #fff;
  border: none;
  font-size: 12px;
  cursor: pointer;
}

.header__dropdown option {
  background: #333;
  color: #fff;
}

.header__link {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  transition: color 0.3s;
}

.header__link:hover {
  color: #e91e63;
}

.header__main {
  padding: 15px 0;
}

.header__main-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.hamburger-btn {
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0;
}

.hamburger-btn span {
  width: 100%;
  height: 3px;
  background: #333;
  border-radius: 2px;
  transition: all 0.3s;
}

.hamburger-btn:hover span {
  background: #e91e63;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  justify-content: center;
}

.header__logo-icon {
  width: 35px;
  height: 35px;
  background: linear-gradient(135deg, #e91e63, #9c27b0);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
}

.header__logo-text h1 {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0;
  line-height: 1.2;
}

.header__actions {
  display: flex;
  gap: 10px;
}

.header__action-btn {
  position: relative;
  width: 35px;
  height: 35px;
  background: #f5f5f5;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  color: #333;
  text-decoration: none;
}

.header__action-btn:hover {
  background: #e91e63;
  color: #fff;
}

.header__badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #e91e63;
  color: #fff;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 10px;
  font-weight: bold;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
}

.mobile-menu__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.mobile-menu__content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  background: #fff;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.mobile-menu__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.mobile-menu__header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.mobile-menu__close {
  width: 30px;
  height: 30px;
  background: #f5f5f5;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666;
}

.mobile-menu__nav {
  flex: 1;
  padding: 20px 0;
}

.mobile-menu__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-menu__item {
  border-bottom: 1px solid #f0f0f0;
}

.mobile-menu__link {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  color: #333;
  text-decoration: none;
  transition: background 0.3s;
}

.mobile-menu__link:hover {
  background: #f8f9fa;
  color: #e91e63;
}

.mobile-menu__link i {
  width: 20px;
  text-align: center;
}

.mobile-menu__contact {
  padding: 20px;
  border-top: 1px solid #e0e0e0;
  background: #f8f9fa;
}

.mobile-menu__phone {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  font-weight: 500;
  color: #333;
}

.mobile-menu__phone i {
  color: #e91e63;
}

.mobile-menu__social {
  display: flex;
  gap: 10px;
}

.mobile-menu__social-link {
  width: 35px;
  height: 35px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  text-decoration: none;
  transition: all 0.3s;
}

.mobile-menu__social-link:hover {
  background: #e91e63;
  color: #fff;
}

/* Search Overlay */
.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
}

.search-overlay__content {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.search-overlay__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.search-overlay__header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.search-overlay__close {
  width: 30px;
  height: 30px;
  background: #f5f5f5;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666;
}

.search-overlay__form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.search-overlay__input {
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

.search-overlay__input:focus {
  border-color: #e91e63;
}

.search-overlay__btn {
  background: #e91e63;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.search-overlay__btn:hover {
  background: #c2185b;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Animations */
.mobile-menu__content {
  animation: slideInLeft 0.3s ease-out;
}

.search-overlay__content {
  animation: slideInDown 0.3s ease-out;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideInDown {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Desktop - Hide mobile header */
@media (min-width: 769px) {
  .mobile-header {
    display: none;
  }
}
</style>
