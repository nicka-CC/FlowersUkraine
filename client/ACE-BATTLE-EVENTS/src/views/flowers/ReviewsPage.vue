<template>
  <div class="reviews-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#" class="breadcrumb-link">Главная</a>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-current">Отзывы</span>
      </div>

      <h1 class="page-title">Отзывы</h1>

      <!-- Reviews Grid -->
      <div class="reviews-grid">
        <div 
          v-for="review in reviews" 
          :key="review.id"
          class="review-card"
        >
          <div class="review-header">
            <div class="review-avatar">
              <img :src="review.avatar" :alt="review.author" />
            </div>
            <div class="review-info">
              <h3 class="review-author">{{ review.author }}</h3>
              <div class="review-rating">
                <div class="stars">
                  <i 
                    v-for="star in 5" 
                    :key="star"
                    class="star"
                    :class="{ 'star--filled': star <= review.rating }"
                  ></i>
                </div>
              </div>
              <span class="review-date">{{ review.date }}</span>
            </div>
          </div>
          <div class="review-content">
            <p class="review-text">{{ review.text }}</p>
            <a href="#" class="read-more">Весь отзыв ></a>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination">
        <button class="pagination-btn pagination-btn--prev">
          <i class="icon-chevron-left"></i>
        </button>
        <div class="pagination-numbers">
          <button 
            v-for="page in totalPages" 
            :key="page"
            class="pagination-number"
            :class="{ 'pagination-number--active': currentPage === page }"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
        </div>
        <button class="pagination-btn pagination-btn--next">
          <i class="icon-chevron-right"></i>
        </button>
      </div>

      <!-- Map Section -->
      <div class="map-section">
        <div class="map-container">
          <div class="map-placeholder">
            <i class="icon-map"></i>
            <p>Карта с нашими офисами</p>
          </div>
        </div>
        <div class="contact-card">
          <div class="contact-logo">
            <i class="icon-flower"></i>
            <span>FLOWERS-UKRAINE</span>
          </div>
          <div class="contact-info">
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
            <div class="social-links">
              <a href="#" class="social-link">
                <i class="icon-facebook"></i>
              </a>
              <a href="#" class="social-link">
                <i class="icon-instagram"></i>
              </a>
              <a href="#" class="social-link">
                <i class="icon-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
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

// Mock data
const reviews = ref([
  {
    id: 1,
    author: 'Ирина Артипенко',
    avatar: '/images/avatar-1.jpg',
    rating: 5,
    date: '22.02.2021',
    text: 'Тюльпан - символ любви, весеннего обновления, счастья, теплой и солнечной погоды и хорошего приподнятого настроения! Тюльпан отличается элегантностью форм и...'
  },
  {
    id: 2,
    author: 'Мария Петрова',
    avatar: '/images/avatar-2.jpg',
    rating: 5,
    date: '20.02.2021',
    text: 'Очень красивые цветы, доставили вовремя. Качество отличное, букет был свежий и ароматный. Рекомендую этот магазин!'
  },
  {
    id: 3,
    author: 'Анна Сидорова',
    avatar: '/images/avatar-3.jpg',
    rating: 4,
    date: '18.02.2021',
    text: 'Заказывала букет роз для мамы на день рождения. Цветы были свежие, красиво упакованы. Доставка быстрая, курьер вежливый.'
  },
  {
    id: 4,
    author: 'Елена Козлова',
    avatar: '/images/avatar-4.jpg',
    rating: 5,
    date: '15.02.2021',
    text: 'Отличный сервис! Заказывала цветы в коробке, получилось очень красиво. Дополнительно заказала открытку, все было оформлено аккуратно.'
  },
  {
    id: 5,
    author: 'Ольга Морозова',
    avatar: '/images/avatar-5.jpg',
    rating: 5,
    date: '12.02.2021',
    text: 'Первый раз заказывала в этом магазине, осталась очень довольна. Букет был точно как на фото, доставили в указанное время.'
  },
  {
    id: 6,
    author: 'Наталья Волкова',
    avatar: '/images/avatar-6.jpg',
    rating: 4,
    date: '10.02.2021',
    text: 'Хороший магазин, качественные цветы. Единственное - немного дороговато, но качество того стоит.'
  },
  {
    id: 7,
    author: 'Татьяна Новикова',
    avatar: '/images/avatar-7.jpg',
    rating: 5,
    date: '08.02.2021',
    text: 'Заказывала букет невесты, получился просто потрясающий! Флорист очень талантливый, все было сделано с душой.'
  },
  {
    id: 8,
    author: 'Светлана Федорова',
    avatar: '/images/avatar-8.jpg',
    rating: 5,
    date: '05.02.2021',
    text: 'Отличные цветы, быстрая доставка. Заказывала несколько раз, всегда все на высоте. Рекомендую!'
  },
  {
    id: 9,
    author: 'Юлия Соколова',
    avatar: '/images/avatar-9.jpg',
    rating: 4,
    date: '03.02.2021',
    text: 'Хороший сервис, цветы свежие. Единственное пожелание - больше вариантов упаковки для букетов.'
  }
]);

const currentPage = ref(1);
const totalPages = ref(7);

const goToPage = (page: number) => {
  currentPage.value = page;
  // TODO: Implement pagination logic
};
</script>

<style scoped>
.reviews-page {
  position: relative;
  min-height: 100vh;
  background: #f8f9fa;
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

.page-title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0 0 40px 0;
  text-align: center;
}

/* Reviews Grid */
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.review-card {
  background: #fff;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.review-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.review-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.review-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background: #f5f5f5;
}

.review-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.review-info {
  flex: 1;
}

.review-author {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
}

.review-rating {
  margin-bottom: 5px;
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

.review-date {
  font-size: 12px;
  color: #999;
}

.review-content {
  color: #666;
  line-height: 1.6;
}

.review-text {
  margin: 0 0 15px 0;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more {
  color: #e91e63;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s;
}

.read-more:hover {
  color: #c2185b;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 60px;
}

.pagination-btn {
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
  color: #666;
}

.pagination-btn:hover {
  background: #e91e63;
  color: #fff;
}

.pagination-numbers {
  display: flex;
  gap: 5px;
}

.pagination-number {
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
  color: #666;
  font-weight: 500;
}

.pagination-number:hover {
  background: #e91e63;
  color: #fff;
}

.pagination-number--active {
  background: #e91e63;
  color: #fff;
}

/* Map Section */
.map-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  margin-bottom: 60px;
}

.map-container {
  background: #f5f5f5;
  border-radius: 12px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-placeholder {
  text-align: center;
  color: #999;
}

.map-placeholder i {
  font-size: 48px;
  margin-bottom: 15px;
  display: block;
}

.contact-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  height: fit-content;
}

.contact-logo {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.contact-logo i {
  color: #e91e63;
  font-size: 24px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #666;
  font-size: 14px;
}

.contact-item i {
  color: #e91e63;
  width: 16px;
}

.social-links {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.social-link {
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

.social-link:hover {
  background: #e91e63;
  color: #fff;
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
  .reviews-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .reviews-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .map-section {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .map-container {
    height: 300px;
  }

  .contact-card {
    padding: 20px;
  }

  .page-title {
    font-size: 24px;
  }

  .decorative-left,
  .decorative-right {
    display: none;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .review-card {
    padding: 20px;
  }

  .review-header {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .review-avatar {
    width: 60px;
    height: 60px;
  }

  .page-title {
    font-size: 20px;
  }

  .pagination {
    flex-wrap: wrap;
    gap: 5px;
  }

  .pagination-btn,
  .pagination-number {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
}
</style>
