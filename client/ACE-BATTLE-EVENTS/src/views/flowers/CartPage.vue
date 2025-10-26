<template>
  <div class="cart-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#" class="breadcrumb-link">Главная</a>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-current">Корзина</span>
      </div>

      <div class="cart-content">
        <!-- Cart Items -->
        <div class="cart-items">
          <div class="cart-header">
            <h1 class="cart-title">Корзина</h1>
            <a href="#" class="continue-shopping">Продолжить покупки</a>
          </div>

          <div class="cart-table">
            <div class="cart-table-header">
              <div class="col-name">Название</div>
              <div class="col-price">Цена за шт.</div>
              <div class="col-quantity">Кол-во</div>
              <div class="col-total">Итог</div>
            </div>

            <div 
              v-for="item in cartItems" 
              :key="item.id"
              class="cart-item"
            >
              <div class="item-image">
                <img :src="item.image" :alt="item.name" />
              </div>
              <div class="item-details">
                <h3 class="item-name">{{ item.name }}</h3>
                <div class="item-price">
                  <span v-if="item.originalPrice" class="original-price">
                    {{ item.originalPrice }} ₴
                  </span>
                  <span class="current-price">{{ item.price }} ₴</span>
                </div>
              </div>
              <div class="item-quantity">
                <div class="quantity-controls">
                  <button 
                    class="quantity-btn"
                    @click="decreaseQuantity(item)"
                    :disabled="item.quantity <= 1"
                  >
                    -
                  </button>
                  <span class="quantity-value">{{ item.quantity }}</span>
                  <button 
                    class="quantity-btn"
                    @click="increaseQuantity(item)"
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="item-total">
                {{ (item.price * item.quantity) }} ₴
              </div>
              <div class="item-actions">
                <button 
                  class="action-btn action-btn--wishlist"
                  @click="moveToWishlist(item)"
                  title="Добавить в избранное"
                >
                  <i class="icon-heart"></i>
                </button>
                <button 
                  class="action-btn action-btn--delete"
                  @click="removeFromCart(item)"
                  title="Удалить"
                >
                  <i class="icon-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="order-summary">
          <h3 class="summary-title">Ваш заказ</h3>
          
          <div class="summary-details">
            <div class="summary-row">
              <span class="summary-label">Товары</span>
              <span class="summary-value">{{ subtotal }} ₴</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">Скидка</span>
              <span class="summary-value summary-value--discount">-{{ discount }} ₴</span>
            </div>
            <div class="summary-row summary-row--total">
              <span class="summary-label">Всего</span>
              <span class="summary-value summary-value--total">{{ total }} ₴</span>
            </div>
          </div>

          <button class="checkout-btn" @click="proceedToCheckout">
            Оформить заказ
          </button>
        </div>
      </div>

      <!-- Recommendations -->
      <div class="recommendations">
        <h2 class="section-title">Рекомендации</h2>
        <div class="products-grid">
          <ProductCard 
            v-for="product in recommendedProducts" 
            :key="product.id"
            :product="product"
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
import { ref, computed } from 'vue';
import ProductCard from '@/components/flowers/ProductCard.vue';

// Mock data
const cartItems = ref([
  {
    id: 1,
    name: '25 желтых тюльпанов',
    image: '/images/yellow-tulips.jpg',
    price: 795,
    originalPrice: 995,
    quantity: 2
  },
  {
    id: 2,
    name: '25 розовых пионовидных роз',
    image: '/images/pink-peony-roses.jpg',
    price: 1680,
    quantity: 1
  },
  {
    id: 3,
    name: 'Мечтательница',
    image: '/images/dreamer-bouquet.jpg',
    price: 2288,
    quantity: 1
  },
  {
    id: 4,
    name: '25 желтых тюльпанов',
    image: '/images/yellow-tulips.jpg',
    price: 795,
    originalPrice: 995,
    quantity: 2
  }
]);

const recommendedProducts = ref([
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    name: 'Корзина все для тебя',
    image: '/images/gift-basket.jpg',
    price: 2280,
    rating: 5,
    isTop: true,
    isWishlisted: false
  }
]);

// Computed properties
const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

const discount = computed(() => {
  return cartItems.value.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + ((item.originalPrice - item.price) * item.quantity);
    }
    return sum;
  }, 0);
});

const total = computed(() => {
  return subtotal.value - discount.value;
});

// Methods
const increaseQuantity = (item: any) => {
  item.quantity++;
};

const decreaseQuantity = (item: any) => {
  if (item.quantity > 1) {
    item.quantity--;
  }
};

const removeFromCart = (item: any) => {
  const index = cartItems.value.findIndex(cartItem => cartItem.id === item.id);
  if (index > -1) {
    cartItems.value.splice(index, 1);
  }
};

const moveToWishlist = (item: any) => {
  console.log('Move to wishlist:', item);
  // TODO: Implement move to wishlist logic
};

const proceedToCheckout = () => {
  console.log('Proceed to checkout');
  // TODO: Navigate to checkout page
};

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
.cart-page {
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

/* Cart Content */
.cart-content {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 40px;
  margin-bottom: 60px;
}

/* Cart Items */
.cart-items {
  flex: 1;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.cart-title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.continue-shopping {
  color: #e91e63;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.continue-shopping:hover {
  color: #c2185b;
}

.cart-table {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.cart-table-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
  gap: 20px;
  padding: 20px;
  background: #f8f9fa;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
}

.cart-item {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  align-items: center;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.4;
}

.item-price {
  display: flex;
  align-items: center;
  gap: 10px;
}

.original-price {
  text-decoration: line-through;
  color: #999;
  font-size: 14px;
}

.current-price {
  font-size: 16px;
  font-weight: 600;
  color: #e91e63;
}

.item-quantity {
  display: flex;
  justify-content: center;
}

.quantity-controls {
  display: flex;
  align-items: center;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  overflow: hidden;
}

.quantity-btn {
  width: 35px;
  height: 35px;
  background: #f5f5f5;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  font-size: 16px;
  font-weight: 600;
}

.quantity-btn:hover:not(:disabled) {
  background: #e0e0e0;
}

.quantity-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity-value {
  width: 50px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #333;
}

.item-total {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
}

.item-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  font-size: 14px;
}

.action-btn--wishlist {
  background: #f5f5f5;
  color: #666;
}

.action-btn--wishlist:hover {
  background: #e91e63;
  color: #fff;
}

.action-btn--delete {
  background: #f5f5f5;
  color: #f44336;
}

.action-btn--delete:hover {
  background: #f44336;
  color: #fff;
}

/* Order Summary */
.order-summary {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  height: fit-content;
  position: sticky;
  top: 20px;
}

.summary-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 0 0 25px 0;
  text-align: center;
}

.summary-details {
  margin-bottom: 30px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-size: 16px;
}

.summary-row--total {
  border-top: 2px solid #e0e0e0;
  padding-top: 15px;
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
}

.summary-label {
  color: #666;
}

.summary-value {
  color: #333;
  font-weight: 600;
}

.summary-value--discount {
  color: #4caf50;
}

.summary-value--total {
  color: #e91e63;
  font-size: 20px;
}

.checkout-btn {
  width: 100%;
  background: linear-gradient(135deg, #e91e63, #9c27b0);
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.checkout-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.checkout-btn:hover::before {
  left: 100%;
}

.checkout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(233, 30, 99, 0.3);
}

/* Recommendations */
.recommendations {
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
  .cart-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .order-summary {
    position: static;
  }

  .cart-table-header {
    display: none;
  }

  .cart-item {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 15px;
  }

  .item-image {
    width: 100%;
    height: 200px;
  }

  .item-details {
    text-align: center;
  }

  .item-quantity {
    justify-content: center;
  }

  .item-total {
    text-align: center;
    font-size: 20px;
  }

  .item-actions {
    justify-content: center;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .cart-title {
    font-size: 24px;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .item-image {
    height: 150px;
  }

  .quantity-controls {
    width: 100%;
    max-width: 200px;
  }

  .quantity-btn {
    width: 40px;
    height: 40px;
  }

  .quantity-value {
    width: 60px;
    height: 40px;
  }
}
</style>
