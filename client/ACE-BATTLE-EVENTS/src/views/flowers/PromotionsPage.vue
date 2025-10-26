<template>
  <div class="promotions-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#" class="breadcrumb-link">Главная</a>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-current">Акции</span>
      </div>

      <div class="promotions-content">
        <!-- Sidebar -->
        <aside class="promotions-sidebar">
          <div class="sidebar-section">
            <h3 class="sidebar-title">Букеты</h3>
            <ul class="category-list">
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                  Букеты из роз
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  Букеты из хризантем
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                  Букеты из альстромерии
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  Букеты из гербер
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  Букеты из ирисов
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  Букеты из пионов
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                  Букеты из эустомы
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  Букеты из тюльпанов
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  Букеты из фрезий
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                  Букеты из орхидей
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  Букеты из гортензии
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  Букеты из лилий
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  Букеты из гвоздик
                </label>
              </li>
            </ul>
          </div>

          <div class="sidebar-section">
            <h3 class="sidebar-title">Дизайнерские букеты</h3>
            <ul class="category-list">
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                  Бизнес букеты
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  Букеты любимой
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  Букеты для мужчины
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  Весенние букеты
                </label>
              </li>
              <li class="category-item">
                <label class="category-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  Летние букеты
                </label>
              </li>
            </ul>
          </div>

          <div class="sidebar-section">
            <h3 class="sidebar-title">Другие категории</h3>
            <ul class="category-list">
              <li class="category-item">
                <a href="#" class="category-link">Розы</a>
              </li>
              <li class="category-item">
                <a href="#" class="category-link">Цветы в коробке</a>
              </li>
              <li class="category-item">
                <a href="#" class="category-link">Композиции</a>
              </li>
              <li class="category-item">
                <a href="#" class="category-link">Подарки</a>
              </li>
              <li class="category-item">
                <a href="#" class="category-link">Подарочные корзины</a>
              </li>
              <li class="category-item">
                <a href="#" class="category-link">Букеты невесты</a>
              </li>
              <li class="category-item">
                <a href="#" class="category-link">Вкусные букеты</a>
              </li>
            </ul>
          </div>
        </aside>

        <!-- Main Content -->
        <main class="promotions-main">
          <div class="promotions-header">
            <h1 class="promotions-title">Акции</h1>
            
            <div class="promotions-filters">
              <select class="filter-select">
                <option>Кому Маме</option>
                <option>Любимой</option>
                <option>Коллеге</option>
              </select>
              <select class="filter-select">
                <option>По цвету Розовые букеты</option>
                <option>Красные букеты</option>
                <option>Белые букеты</option>
              </select>
              <select class="filter-select">
                <option>Повод 8 марта</option>
                <option>День рождения</option>
                <option>Свадьба</option>
              </select>
              <select class="filter-select">
                <option>Сортировка Популярность</option>
                <option>Цена по возрастанию</option>
                <option>Цена по убыванию</option>
              </select>
            </div>
          </div>

          <div class="products-grid">
            <ProductCard 
              v-for="product in promotionProducts" 
              :key="product.id"
              :product="product"
              @add-to-cart="handleAddToCart"
              @quick-order="handleQuickOrder"
              @toggle-wishlist="handleToggleWishlist"
            />
          </div>
        </main>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="decorative-left">
<!--      <img src="/images/floral-decoration-left.png" alt="Декорация" />-->
    </div>
    <div class="decorative-right">
<!--      <img src="/images/floral-decoration-right.png" alt="Декорация" />-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProductCard from '@/components/flowers/ProductCard.vue';

// Mock data
const promotionProducts = ref([
  {
    id: 1,
    name: '101 красная роза',
    image: '/images/101-red-roses.jpg',
    price: 2280,
    originalPrice: 2800,
    discount: 19,
    rating: 5,
    isTop: true,
    isWishlisted: false
  },
  {
    id: 2,
    name: '25 розовых пионовидных роз',
    image: '/images/pink-peony-roses.jpg',
    price: 1680,
    originalPrice: 2800,
    discount: 10,
    rating: 5,
    isTop: true,
    isWishlisted: false
  },
  {
    id: 3,
    name: 'Влюбленность',
    image: '/images/love-bouquet.jpg',
    price: 1270,
    originalPrice: 2800,
    discount: 19,
    rating: 5,
    isTop: true,
    isWishlisted: false
  },
  {
    id: 4,
    name: 'Мечтательница',
    image: '/images/dreamer-bouquet.jpg',
    price: 2280,
    rating: 5,
    isTop: true,
    isWishlisted: false
  },
  {
    id: 5,
    name: 'Корзина солнечного настроения',
    image: '/images/sunny-basket.jpg',
    price: 1680,
    rating: 5,
    isTop: true,
    isWishlisted: false
  },
  {
    id: 6,
    name: 'Цветочная клумба',
    image: '/images/flower-bed.jpg',
    price: 1270,
    rating: 5,
    isTop: true,
    isWishlisted: false
  }
]);

const handleAddToCart = (product: any) => {
  console.log('Add to cart:', product);
  // TODO: Implement add to cart logic
};

const handleQuickOrder = (product: any) => {
  console.log('Quick order:', product);
  // TODO: Implement quick order logic
};

const handleToggleWishlist = (product: any) => {
  product.isWishlisted = !product.isWishlisted;
  console.log('Toggle wishlist:', product);
  // TODO: Implement wishlist logic
};
</script>

<style scoped>
.promotions-page {
  position: relative;
  min-height: 100vh;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Breadcrumbs */
.breadcrumbs {
  padding: 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}

.breadcrumb-link {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-link:hover {
  color: #e91e63;
}

.breadcrumb-separator {
  color: #ccc;
}

.breadcrumb-current {
  color: #333;
  font-weight: 500;
}

/* Promotions Content */
.promotions-content {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 40px;
  padding-bottom: 60px;
}

/* Sidebar */
.promotions-sidebar {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: fit-content;
  position: sticky;
  top: 20px;
}

.sidebar-section {
  margin-bottom: 30px;
}

.sidebar-section:last-child {
  margin-bottom: 0;
}

.sidebar-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #e91e63;
}

.category-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.category-item {
  margin-bottom: 12px;
}

.category-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  transition: color 0.3s;
}

.category-checkbox:hover {
  color: #e91e63;
}

.category-checkbox input[type="checkbox"] {
  display: none;
}

.checkmark {
  width: 18px;
  height: 18px;
  border: 2px solid #ddd;
  border-radius: 3px;
  margin-right: 10px;
  position: relative;
  transition: all 0.3s;
}

.category-checkbox input[type="checkbox"]:checked + .checkmark {
  background: #e91e63;
  border-color: #e91e63;
}

.category-checkbox input[type="checkbox"]:checked + .checkmark::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.category-link {
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.category-link:hover {
  color: #e91e63;
}

/* Main Content */
.promotions-main {
  flex: 1;
}

.promotions-header {
  margin-bottom: 40px;
}

.promotions-title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0 0 30px 0;
}

.promotions-filters {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.filter-select {
  padding: 10px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  background: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: border-color 0.3s;
  min-width: 150px;
}

.filter-select:focus {
  outline: none;
  border-color: #e91e63;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* Decorative Elements */
.decorative-left,
.decorative-right {
  position: fixed;
  top: 0;
  width: 100px;
  height: 100vh;
  z-index: -1;
  opacity: 0.1;
}

.decorative-left {
  left: 0;
}

.decorative-right {
  right: 0;
}

.decorative-left img,
.decorative-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Mobile Styles */
@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .promotions-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .promotions-sidebar {
    position: static;
    padding: 20px;
  }

  .promotions-filters {
    flex-direction: column;
  }

  .filter-select {
    min-width: 100%;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .decorative-left,
  .decorative-right {
    display: none;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  .promotions-title {
    font-size: 24px;
  }

  .sidebar-title {
    font-size: 16px;
  }

  .category-checkbox {
    font-size: 13px;
  }
}
</style>
