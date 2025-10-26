<template>
  <div class="product-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#" class="breadcrumb-link">Главная</a>
        <span class="breadcrumb-separator">></span>
        <a href="#" class="breadcrumb-link">Каталог</a>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-current">{{ product.name }}</span>
      </div>

      <div class="product-content">
        <!-- Product Images -->
        <div class="product-images">
          <div class="main-image">
            <img :src="product.image" :alt="product.name" />
            <div v-if="product.discount" class="discount-badge">
              -{{ product.discount }}%
            </div>
            <button 
              class="wishlist-btn"
              :class="{ 'wishlist-btn--active': product.isWishlisted }"
              @click="toggleWishlist"
            >
              <i class="icon-heart"></i>
            </button>
          </div>
          <div class="thumbnail-images">
            <div 
              v-for="(image, index) in product.images" 
              :key="index"
              class="thumbnail"
              :class="{ 'thumbnail--active': selectedImage === index }"
              @click="selectedImage = index"
            >
              <img :src="image" :alt="`${product.name} ${index + 1}`" />
            </div>
          </div>
        </div>

        <!-- Product Details -->
        <div class="product-details">
          <div class="product-breadcrumb">
            <a href="#" class="product-category">Букеты из тюльпанов</a>
            <i class="icon-chevron-right"></i>
          </div>

          <h1 class="product-title">{{ product.name }}</h1>

          <div class="product-status">
            <span class="status-badge">В наличии</span>
            <div class="rating">
              <div class="stars">
                <i 
                  v-for="star in 5" 
                  :key="star"
                  class="star"
                  :class="{ 'star--filled': star <= product.rating }"
                ></i>
              </div>
            </div>
          </div>

          <div class="product-price">
            <span v-if="product.originalPrice" class="original-price">
              {{ product.originalPrice }}грн.
            </span>
            <span class="current-price">{{ product.price }}грн.</span>
          </div>

          <div class="product-specs">
            <div class="spec-item">
              <span class="spec-label">Цветы:</span>
              <span class="spec-value">{{ product.flowers }}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Размер:</span>
              <span class="spec-value">{{ product.size }}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Материалы:</span>
              <span class="spec-value">{{ product.materials }}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Дополнительно:</span>
              <span class="spec-value">{{ product.additional }}</span>
            </div>
          </div>

          <div class="product-actions">
            <div class="quantity-selector">
              <button class="quantity-btn" @click="decreaseQuantity">-</button>
              <input 
                v-model="quantity" 
                type="number" 
                min="1" 
                class="quantity-input"
              >
              <button class="quantity-btn" @click="increaseQuantity">+</button>
            </div>
            <button class="add-to-cart-btn" @click="addToCart">
              В корзину
            </button>
          </div>

          <div class="quick-order">
            <h3 class="quick-order-title">Быстрый заказ</h3>
            <div class="quick-order-form">
              <input 
                v-model="phoneNumber" 
                type="tel" 
                placeholder="+380" 
                class="phone-input"
              >
              <button class="quick-order-btn" @click="quickOrder">
                Быстрый заказ
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Tabs -->
      <div class="product-tabs">
        <div class="tab-navigation">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            class="tab-btn"
            :class="{ 'tab-btn--active': activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>

        <div class="tab-content">
          <div v-if="activeTab === 'delivery'" class="tab-panel">
            <h3>Доставка</h3>
            <p>Информация о доставке...</p>
          </div>
          
          <div v-if="activeTab === 'description'" class="tab-panel">
            <h3>Описание</h3>
            <p>{{ product.description }}</p>
          </div>
          
          <div v-if="activeTab === 'reviews'" class="tab-panel">
            <h3>Отзывы ({{ product.reviewsCount }})</h3>
            <div class="reviews-list">
              <div v-for="review in product.reviews" :key="review.id" class="review-item">
                <div class="review-header">
                  <span class="review-author">{{ review.author }}</span>
                  <div class="review-rating">
                    <i 
                      v-for="star in 5" 
                      :key="star"
                      class="star"
                      :class="{ 'star--filled': star <= review.rating }"
                    ></i>
                  </div>
                  <span class="review-date">{{ review.date }}</span>
                </div>
                <p class="review-text">{{ review.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="related-products">
        <h2 class="section-title">Сопутствующие товары</h2>
        <div class="products-grid">
          <ProductCard 
            v-for="relatedProduct in relatedProducts" 
            :key="relatedProduct.id"
            :product="relatedProduct"
            @add-to-cart="handleAddToCart"
            @quick-order="handleQuickOrder"
            @toggle-wishlist="handleToggleWishlist"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProductCard from '@/components/flowers/ProductCard.vue';

// Mock data
const product = ref({
  id: 1,
  name: '25 желтых тюльпанов',
  image: '/images/yellow-tulips.jpg',
  images: [
    '/images/yellow-tulips-1.jpg',
    '/images/yellow-tulips-2.jpg',
    '/images/yellow-tulips-3.jpg'
  ],
  price: 795,
  originalPrice: 995,
  discount: 10,
  rating: 5,
  isWishlisted: false,
  flowers: '25 желтых тюльпанов',
  size: '50-60 см',
  materials: 'Декоративный флористический материал',
  additional: 'Оформление',
  description: 'Тюльпан - символ любви, весеннего обновления, счастья, теплой и солнечной погоды и хорошего приподнятого настроения! Тюльпан отличается элегантностью форм и...',
  reviewsCount: 12,
  reviews: [
    {
      id: 1,
      author: 'Анна Петрова',
      rating: 5,
      date: '15.02.2021',
      text: 'Очень красивые тюльпаны, доставили вовремя. Рекомендую!'
    },
    {
      id: 2,
      author: 'Мария Иванова',
      rating: 4,
      date: '10.02.2021',
      text: 'Качественные цветы, свежие и красивые.'
    }
  ]
});

const relatedProducts = ref([
  {
    id: 2,
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
    id: 3,
    name: '25 розовых пионовидных роз',
    image: '/images/pink-peony-roses.jpg',
    price: 1680,
    originalPrice: 2800,
    discount: 10,
    rating: 5,
    isTop: true,
    isWishlisted: false
  }
]);

const selectedImage = ref(0);
const quantity = ref(1);
const phoneNumber = ref('+380');
const activeTab = ref('description');

const tabs = [
  { id: 'delivery', label: 'Доставка' },
  { id: 'description', label: 'Описание' },
  { id: 'reviews', label: 'Отзывы (12)' }
];

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const addToCart = () => {
  console.log('Add to cart:', product.value, 'Quantity:', quantity.value);
  // TODO: Implement add to cart logic
};

const quickOrder = () => {
  console.log('Quick order:', product.value, 'Phone:', phoneNumber.value);
  // TODO: Implement quick order logic
};

const toggleWishlist = () => {
  product.value.isWishlisted = !product.value.isWishlisted;
  console.log('Toggle wishlist:', product.value);
  // TODO: Implement wishlist logic
};

const handleAddToCart = (relatedProduct: any) => {
  console.log('Add to cart:', relatedProduct);
  // TODO: Implement add to cart logic
};

const handleQuickOrder = (relatedProduct: any) => {
  console.log('Quick order:', relatedProduct);
  // TODO: Implement quick order logic
};

const handleToggleWishlist = (relatedProduct: any) => {
  relatedProduct.isWishlisted = !relatedProduct.isWishlisted;
  console.log('Toggle wishlist:', relatedProduct);
  // TODO: Implement wishlist logic
};
</script>

<style scoped>
.product-page {
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

/* Product Content */
.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}

/* Product Images */
.product-images {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.main-image {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  background: #f5f5f5;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.discount-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: #e91e63;
  color: #fff;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  z-index: 2;
}

.wishlist-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 2;
}

.wishlist-btn:hover {
  background: #e91e63;
  color: #fff;
}

.wishlist-btn--active {
  background: #e91e63;
  color: #fff;
}

.thumbnail-images {
  display: flex;
  gap: 10px;
}

.thumbnail {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;
}

.thumbnail:hover,
.thumbnail--active {
  border-color: #e91e63;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Product Details */
.product-details {
  padding: 20px 0;
}

.product-breadcrumb {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
  font-size: 14px;
}

.product-category {
  color: #e91e63;
  text-decoration: none;
  transition: color 0.3s;
}

.product-category:hover {
  color: #c2185b;
}

.product-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin: 0 0 20px 0;
  line-height: 1.3;
}

.product-status {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
}

.status-badge {
  background: #4caf50;
  color: #fff;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 500;
}

.rating {
  display: flex;
  align-items: center;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #ddd;
  font-size: 16px;
}

.star--filled {
  color: #ffc107;
}

.product-price {
  margin-bottom: 30px;
}

.original-price {
  text-decoration: line-through;
  color: #999;
  font-size: 18px;
  margin-right: 15px;
}

.current-price {
  font-size: 24px;
  font-weight: bold;
  color: #e91e63;
}

.product-specs {
  margin-bottom: 30px;
}

.spec-item {
  display: flex;
  margin-bottom: 10px;
  font-size: 14px;
}

.spec-label {
  font-weight: 500;
  color: #666;
  min-width: 120px;
}

.spec-value {
  color: #333;
}

.product-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.quantity-selector {
  display: flex;
  align-items: center;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  overflow: hidden;
}

.quantity-btn {
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.quantity-btn:hover {
  background: #e0e0e0;
}

.quantity-input {
  width: 60px;
  height: 40px;
  border: none;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
}

.add-to-cart-btn {
  background: #e91e63;
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.add-to-cart-btn:hover {
  background: #c2185b;
}

.quick-order {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  border: 2px solid #e91e63;
}

.quick-order-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0 0 15px 0;
}

.quick-order-form {
  display: flex;
  gap: 10px;
}

.phone-input {
  flex: 1;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

.phone-input:focus {
  border-color: #e91e63;
}

.quick-order-btn {
  background: #e91e63;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.quick-order-btn:hover {
  background: #c2185b;
}

/* Product Tabs */
.product-tabs {
  margin-bottom: 60px;
}

.tab-navigation {
  display: flex;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 30px;
}

.tab-btn {
  background: none;
  border: none;
  padding: 15px 25px;
  font-size: 16px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
}

.tab-btn:hover {
  color: #e91e63;
}

.tab-btn--active {
  color: #e91e63;
  border-bottom-color: #e91e63;
}

.tab-content {
  min-height: 200px;
}

.tab-panel h3 {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 0 0 20px 0;
}

.tab-panel p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.reviews-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.review-item {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
}

.review-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
}

.review-author {
  font-weight: 600;
  color: #333;
}

.review-rating {
  display: flex;
  gap: 2px;
}

.review-date {
  color: #999;
  font-size: 14px;
}

.review-text {
  color: #666;
  line-height: 1.5;
  margin: 0;
}

/* Related Products */
.related-products {
  margin-bottom: 60px;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0 0 30px 0;
  text-align: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

/* Mobile Styles */
@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .product-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .main-image {
    height: 300px;
  }

  .product-title {
    font-size: 24px;
  }

  .product-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .quantity-selector {
    justify-content: center;
  }

  .quick-order-form {
    flex-direction: column;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .tab-navigation {
    flex-wrap: wrap;
  }

  .tab-btn {
    padding: 12px 20px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .main-image {
    height: 250px;
  }

  .product-title {
    font-size: 20px;
  }

  .current-price {
    font-size: 20px;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .thumbnail {
    width: 60px;
    height: 60px;
  }

  .tab-btn {
    padding: 10px 15px;
    font-size: 13px;
  }
}
</style>
