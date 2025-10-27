<template>
  <div class="product-card">
    <div class="product-card__image">
      <img :src="cleanImageUrl" :alt="product.name" />
      
      <!-- Discount Badge -->
      <div v-if="product.discount" class="product-card__discount">
        -{{ product.discount }}%
      </div>
      
      <!-- Wishlist Button -->
      <button 
        class="product-card__wishlist"
        :class="{ 'product-card__wishlist--active': product.isWishlisted }"
        @click="toggleWishlist"
      >
        <i class="icon-heart"></i>
      </button>
      
      <!-- TOP Badge -->
      <div v-if="product.isTop" class="product-card__top-badge">
        TOP
      </div>
    </div>

    <div class="product-card__content">
      <!-- Rating -->
      <div class="product-card__rating">
        <div class="stars">
          <i 
            v-for="star in 5" 
            :key="star"
            class="star"
            :class="{ 'star--filled': star <= product.rating }"
          ></i>
        </div>
      </div>

      <!-- Product Name -->
      <h3 class="product-card__name">{{ product.name }}</h3>

      <!-- Price -->
      <div class="product-card__price">
        <span v-if="product.originalPrice" class="product-card__original-price">
          {{ product.originalPrice }} грн
        </span>
        <span class="product-card__current-price">
          {{ Number(product.volume) /2.5 }} грн
        </span>
      </div>

      <!-- Actions -->
      <div class="product-card__actions">
        <button class="product-card__order-btn" @click="addToCart">
          Заказать
        </button>
        <button class="product-card__quick-btn" @click="quickOrder">
          Быстрый заказ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  isTop?: boolean;
  isWishlisted?: boolean;
}

interface Props {
  product: Product;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  addToCart: [product: Product];
  quickOrder: [product: Product];
  toggleWishlist: [product: Product];
}>();

const addToCart = () => {
  emit('addToCart', props.product);
};

const quickOrder = () => {
  emit('quickOrder', props.product);
};

const toggleWishlist = () => {
  emit('toggleWishlist', props.product);
};
const cleanImageUrl = props.product.image.replace('http://localhost:7000', '');
console.log(cleanImageUrl);
</script>

<style scoped>
.product-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.product-card__image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.product-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.product-card:hover .product-card__image img {
  transform: scale(1.05);
}

.product-card__discount {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #e91e63;
  color: #fff;
  padding: 4px 8px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  z-index: 2;
}

.product-card__wishlist {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 35px;
  height: 35px;
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

.product-card__wishlist:hover {
  background: #e91e63;
  color: #fff;
}

.product-card__wishlist--active {
  background: #e91e63;
  color: #fff;
}

.product-card__top-badge {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #9c27b0;
  color: #fff;
  padding: 4px 8px;
  border-radius: 15px;
  font-size: 10px;
  font-weight: bold;
  z-index: 2;
}

.product-card__content {
  padding: 20px;
}

.product-card__rating {
  margin-bottom: 10px;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #ddd;
  font-size: 14px;
}

.star--filled {
  color: #ffc107;
}

.product-card__name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 15px 0;
  line-height: 1.4;
  min-height: 44px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-card__price {
  margin-bottom: 20px;
}

.product-card__original-price {
  text-decoration: line-through;
  color: #999;
  font-size: 14px;
  margin-right: 10px;
}

.product-card__current-price {
  font-size: 18px;
  font-weight: bold;
  color: #e91e63;
}

.product-card__actions {
  display: flex;
  gap: 10px;
}

.product-card__order-btn {
  flex: 1;
  background: #e91e63;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.product-card__order-btn:hover {
  background: #c2185b;
}

.product-card__quick-btn {
  background: transparent;
  color: #666;
  border: 1px solid #ddd;
  padding: 12px 15px;
  border-radius: 25px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.product-card__quick-btn:hover {
  background: #f5f5f5;
  border-color: #e91e63;
  color: #e91e63;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .product-card__image {
    height: 200px;
  }

  .product-card__content {
    padding: 15px;
  }

  .product-card__name {
    font-size: 14px;
    min-height: 40px;
  }

  .product-card__current-price {
    font-size: 16px;
  }

  .product-card__actions {
    flex-direction: column;
  }

  .product-card__quick-btn {
    padding: 10px;
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .product-card__image {
    height: 180px;
  }

  .product-card__content {
    padding: 12px;
  }

  .product-card__name {
    font-size: 13px;
    min-height: 36px;
  }

  .product-card__current-price {
    font-size: 15px;
  }

  .product-card__order-btn {
    padding: 10px 15px;
    font-size: 14px;
  }
}
</style>
