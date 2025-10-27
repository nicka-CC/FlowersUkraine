<template>
  <div class="catalog-page">
    <div class="container">
      <div class="breadcrumbs">
        <a href="#" class="breadcrumb-link">Главная</a>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-current">Каталог</span>
      </div>

      <div class="catalog-content">
        <aside class="catalog-sidebar">
          <h3 class="sidebar-title">Фильтр товаров</h3>

          <div class="filter-section">
            <label>Поиск по названию</label>
            <input
                v-model="searchName"
                type="text"
                placeholder="Введите название букета..."
                class="filter-input"
            />
          </div>

          <div class="filter-section">
            <label>Категория</label>
            <select v-model="selectedCategory" class="filter-select">
              <option value="">Все категории</option>
              <option value="1">Розы</option>
              <option value="2">Тюльпаны</option>
              <option value="3">Пионы</option>
            </select>
          </div>

          <div class="filter-section">
            <label>Цвет</label>
            <select v-model="selectedColor" class="filter-select">
              <option value="">Все цвета</option>
              <option value="red">Красный</option>
              <option value="white">Белый</option>
              <option value="pink">Розовый</option>
            </select>
          </div>

          <div class="filter-section">
            <label>Цена, грн</label>
            <div class="price-range">
              <input
                  v-model="priceFrom"
                  type="number"
                  placeholder="От"
                  class="price-input"
              />
              <span>—</span>
              <input
                  v-model="priceTo"
                  type="number"
                  placeholder="До"
                  class="price-input"
              />
            </div>
          </div>

          <button class="filter-btn" @click="applyFilters">Применить фильтры</button>
          <button class="filter-reset" @click="resetFilters">Сбросить</button>
        </aside>

        <main class="catalog-main">
          <h1 class="catalog-title">Каталог товаров</h1>

          <div v-if="store.loading" class="loading">Загрузка...</div>

          <div v-else class="products-grid">
            <ProductCard
                v-for="product in store.products"
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useProductsStore } from '../../store/products.ts'
import ProductCard from '@/components/flowers/ProductCard.vue'

const store = useProductsStore()

// Локальные фильтры
const searchName = ref('')
const selectedCategory = ref('')
const selectedColor = ref('')
const priceFrom = ref(null)
const priceTo = ref(null)

onMounted(() => {
  store.fetchProducts()
})

const applyFilters = () => {
  store.fetchProducts({
    name: searchName.value,
    categories: selectedCategory.value ? [selectedCategory.value] : [],
    color: selectedColor.value,
    price_from: priceFrom.value,
    price_to: priceTo.value,
  })
}

const resetFilters = () => {
  searchName.value = ''
  selectedCategory.value = ''
  selectedColor.value = ''
  priceFrom.value = null
  priceTo.value = null
  store.fetchProducts()
}

const handleAddToCart = (product: any) => console.log('Add to cart:', product)
const handleQuickOrder = (product: any) => console.log('Quick order:', product)
const handleToggleWishlist = (product: any) => (product.isWishlisted = !product.isWishlisted)
</script>

<style scoped>
/* --- Sidebar Filters --- */
.catalog-sidebar {
  background: #fff;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

.sidebar-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #e91e63;
}

.filter-section {
  margin-bottom: 20px;
}

.filter-section label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.filter-input,
.filter-select {
  width: 100%;
  padding: 10px 12px;
  border: 1.5px solid #ddd;
  border-radius: 25px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

.filter-input:focus,
.filter-select:focus {
  border-color: #e91e63;
}

.price-range {
  display: flex;
  align-items: center;
  gap: 8px;
}

.price-input {
  width: 100%;
  padding: 8px 10px;
  border: 1.5px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
}

.filter-btn {
  width: 100%;
  background: #e91e63;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.filter-btn:hover {
  background: #c2185b;
}

.filter-reset {
  margin-top: 10px;
  width: 100%;
  background: transparent;
  color: #666;
  border: 1px solid #ddd;
  border-radius: 25px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-reset:hover {
  border-color: #e91e63;
  color: #e91e63;
}

/* --- Grid --- */
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.loading {
  text-align: center;
  font-size: 18px;
  padding: 40px;
  color: #666;
}

/* Mobile */
@media (max-width: 768px) {
  .catalog-content {
    grid-template-columns: 1fr;
  }
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
