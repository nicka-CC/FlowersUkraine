<template>
  <div class="header">
    <!-- Top Bar -->
    <div class="header__top">
      <div class="container">
        <div class="header__top-content">
          <div class="header__top-left">
            <span class="header__breadcrumb">Главная</span>
            <div class="header__dropdowns">
              <select class="header__dropdown">
                <option>Валюта Грн</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
              <select class="header__dropdown">
                <option>Язык RU</option>
                <option>EN</option>
                <option>UA</option>
              </select>
              <select class="header__dropdown">
                <option>Город Киев</option>
                <option>Харьков</option>
                <option>Одесса</option>
              </select>
            </div>
          </div>
          <div class="header__top-right">
            <a href="#" class="header__link">
              <i class="icon-heart"></i>
              Закладки
              <span class="header__badge">2</span>
            </a>
            <a href="#" class="header__link">
              <i class="icon-truck"></i>
              Доставка и оплата
            </a>
            <a href="#" class="header__link">
              <i class="icon-phone"></i>
              Контакты
            </a>
            <a href="#" class="header__link">
              <i class="icon-user"></i>
              Вход | Регистрация
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="header__main">
      <div class="container">
        <div class="header__main-content">
          <div class="header__logo">
            <div class="header__logo-icon">
              <i class="icon-flower"></i>
            </div>
            <div class="header__logo-text">
              <h1>FLOWERS-UKRAINE</h1>
              <p>доставка цветов и подарков</p>
            </div>
          </div>

          <div class="header__search">
            <div class="header__search-inputs">
              <input 
                type="text" 
                placeholder="Поиск по категориям" 
                class="header__search-input"
              >
              <input 
                type="text" 
                placeholder="Поиск по товарам" 
                class="header__search-input"
              >
            </div>
            <button class="header__search-btn">
              <i class="icon-search"></i>
            </button>
          </div>

          <div class="header__actions">
            <div class="header__phone">
              <i class="icon-phone"></i>
              +38 (067) 829 30 30
            </div>
            <div class="header__social">
              <a href="#" class="header__social-link">
                <i class="icon-instagram"></i>
              </a>
              <a href="#" class="header__social-link">
                <i class="icon-facebook"></i>
              </a>
              <a href="#" class="header__social-link">
                <i class="icon-telegram"></i>
              </a>
              <a href="#" class="header__social-link">
                <i class="icon-viber"></i>
              </a>
            </div>
            <div class="header__user-actions">
              <a href="#" class="header__action-link">
                <i class="icon-heart"></i>
                <span class="header__badge">2</span>
              </a>
              <a href="#" class="header__action-link">
                <i class="icon-cart"></i>
                <span class="header__cart-total">1520</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="header__nav">
      <div class="container">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">
              Каталог товаров
              <i class="icon-chevron-down"></i>
            </a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Форум</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Отзывы</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Акции</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Новости</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">
              Информация
              <i class="icon-chevron-down"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
// Header component for flowers shop
</script>

<style scoped>
.header {
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
  gap: 20px;
}

.header__breadcrumb {
  font-weight: 500;
}

.header__dropdowns {
  display: flex;
  gap: 15px;
}

.header__dropdown {
  background: transparent;
  color: #fff;
  border: none;
  font-size: 14px;
  cursor: pointer;
}

.header__dropdown option {
  background: #333;
  color: #fff;
}

.header__top-right {
  display: flex;
  gap: 20px;
  align-items: center;
}

.header__link {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  transition: color 0.3s;
}

.header__link:hover {
  color: #e91e63;
}

.header__badge {
  background: #e91e63;
  color: #fff;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  margin-left: 5px;
}

.header__main {
  padding: 20px 0;
}

.header__main-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;
}

.header__logo-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #e91e63, #9c27b0);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
}

.header__logo-text h1 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0;
  line-height: 1.2;
}

.header__logo-text p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.header__search {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  max-width: 500px;
}

.header__search-inputs {
  display: flex;
  gap: 10px;
  flex: 1;
}

.header__search-input {
  flex: 1;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

.header__search-input:focus {
  border-color: #e91e63;
}

.header__search-btn {
  background: #e91e63;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s;
}

.header__search-btn:hover {
  background: #c2185b;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}

.header__phone {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  color: #333;
}

.header__social {
  display: flex;
  gap: 10px;
}

.header__social-link {
  width: 35px;
  height: 35px;
  background: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  text-decoration: none;
  transition: all 0.3s;
}

.header__social-link:hover {
  background: #e91e63;
  color: #fff;
}

.header__user-actions {
  display: flex;
  gap: 15px;
}

.header__action-link {
  position: relative;
  color: #333;
  text-decoration: none;
  font-size: 20px;
  transition: color 0.3s;
}

.header__action-link:hover {
  color: #e91e63;
}

.header__cart-total {
  background: #e91e63;
  color: #fff;
  border-radius: 15px;
  padding: 2px 8px;
  font-size: 12px;
  margin-left: 5px;
}

.header__nav {
  background: #fff;
  border-top: 1px solid #e0e0e0;
}

.header__nav-list {
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 15px 0;
}

.header__nav-item {
  position: relative;
}

.header__nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 0;
  transition: color 0.3s;
}

.header__nav-link:hover {
  color: #e91e63;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .header__top {
    display: none;
  }

  .header__main-content {
    flex-direction: column;
    gap: 20px;
  }

  .header__search {
    order: 3;
    max-width: 100%;
  }

  .header__actions {
    order: 2;
    justify-content: center;
  }

  .header__social {
    display: none;
  }

  .header__nav-list {
    flex-wrap: wrap;
    gap: 15px;
  }

  .header__nav-link {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .header__main-content {
    gap: 15px;
  }

  .header__logo {
    flex-direction: column;
    text-align: center;
  }

  .header__search-inputs {
    flex-direction: column;
  }

  .header__nav-list {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
