<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero__content">
          <div class="hero__banner">
            <div class="hero__banner-content">
              <h2 class="hero__title">
                Скидки -6% на все букеты по предзаказу на 8 марта
              </h2>
              <div class="hero__discount">-6%</div>
            </div>
            <div class="hero__banner-image">
<!--              <img src="/images/hero-flowers.jpg" alt="Цветы" />-->
            </div>
          </div>
          
          <div class="hero__categories">
            <CategoryCard 
              v-for="category in categories" 
              :key="category.id"
              :category="category"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Info Blocks Section -->
    <section class="info-section">
      <div class="container">
        <div class="info-blocks">
          <InfoBlock 
            v-for="block in infoBlocks" 
            :key="block.id"
            :block="block"
          />
        </div>
      </div>
    </section>

    <!-- Promotions Section -->
    <section class="promotions">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Акции</h2>
          <div class="section-controls">
            <button class="control-btn control-btn--prev">
              <i class="icon-chevron-left"></i>
            </button>
            <button class="control-btn control-btn--next">
              <i class="icon-chevron-right"></i>
            </button>
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
      </div>
    </section>

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
import CategoryCard from '@/components/flowers/CategoryCard.vue';
import InfoBlock from '@/components/flowers/InfoBlock.vue';
import ProductCard from '@/components/flowers/ProductCard.vue';

// Mock data
const categories = ref([
  {
    id: 1,
    name: 'Розы',
    image: '/images/roses.jpg',
    color: 'pink' as const
  },
  {
    id: 2,
    name: 'Подарки',
    image: '/images/gifts.jpg',
    color: 'purple' as const
  },
  {
    id: 3,
    name: 'Подарочные корзины',
    image: '/images/gift-baskets.jpg',
    color: 'yellow' as const
  },
  {
    id: 4,
    name: 'Цветы в коробке',
    image: '/images/flowers-in-box.jpg',
    color: 'gray' as const
  }
]);

const infoBlocks = ref([
  {
    id: 1,
    title: 'Фото доставок наших букетов',
    description: 'Безупречное качество обслуживания и доставка в любую точку города',
    icon: 'camera'
  },
  {
    id: 2,
    title: 'Видео отчеты клиентов',
    description: 'Наши счастливые клиенты с букетами от Flowers-Ukraine',
    icon: 'video'
  },
  {
    id: 3,
    title: 'Подарок каждому клиенту',
    description: 'К каждому заказу мы прилагаем комплимент от компании в виде маленького презента',
    icon: 'gift'
  }
]);

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
.home-page {
  position: relative;
  min-height: 100vh;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero {
  padding: 40px 0;
}

.hero__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: start;
}

.hero__banner {
  background: linear-gradient(135deg, #fce4ec, #f8bbd9);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  min-height: 300px;
  display: flex;
  align-items: center;
}

.hero__banner-content {
  flex: 1;
  z-index: 2;
  position: relative;
}

.hero__title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin: 0 0 20px 0;
  line-height: 1.3;
}

.hero__discount {
  display: inline-block;
  background: #e91e63;
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: bold;
}

.hero__banner-image {
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 200px;
  opacity: 0.3;
}

.hero__banner-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__categories {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* Info Section */
.info-section {
  padding: 60px 0;
  background: #f8f9fa;
}

.info-blocks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* Promotions Section */
.promotions {
  padding: 60px 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.section-controls {
  display: flex;
  gap: 10px;
}

.control-btn {
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
}

.control-btn:hover {
  background: #e91e63;
  color: #fff;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .hero__content {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .hero__categories {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  .hero__banner {
    padding: 30px;
    min-height: 250px;
  }

  .hero__title {
    font-size: 24px;
  }

  .info-blocks {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .section-title {
    font-size: 28px;
  }

  .decorative-left,
  .decorative-right {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero__categories {
    grid-template-columns: 1fr;
  }

  .hero__banner {
    padding: 20px;
    min-height: 200px;
  }

  .hero__title {
    font-size: 20px;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 24px;
  }

  .section-header {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
}
</style>
