<template>
  <div class="news-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#" class="breadcrumb-link">Главная</a>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-current">Новости</span>
      </div>

      <h1 class="page-title">Новости</h1>

      <!-- News Grid -->
      <div class="news-grid">
        <article 
          v-for="article in newsArticles" 
          :key="article.id"
          class="news-card"
        >
          <div class="news-image">
            <img :src="article.image" :alt="article.title" />
          </div>
          <div class="news-content">
            <h2 class="news-title">{{ article.title }}</h2>
            <p class="news-excerpt">{{ article.excerpt }}</p>
            <a href="#" class="read-more">Читать далее...</a>
          </div>
        </article>
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
const newsArticles = ref([
  {
    id: 1,
    title: 'Какие цветы под запретом: что нельзя дарить',
    image: '/images/news-1.jpg',
    excerpt: 'Существуют определенные правила этикета при выборе цветов для подарка. Некоторые цветы могут быть неуместными в определенных ситуациях...',
    date: '15.02.2021',
    category: 'Советы'
  },
  {
    id: 2,
    title: 'Как сохранить букет свежим: советы и рекомендации',
    image: '/images/news-2.jpg',
    excerpt: 'Чтобы букет радовал вас как можно дольше, необходимо соблюдать несколько простых правил ухода за срезанными цветами...',
    date: '12.02.2021',
    category: 'Уход'
  },
  {
    id: 3,
    title: 'Цветочный этикет - как правильно дарить цветы',
    image: '/images/news-3.jpg',
    excerpt: 'Дарение цветов - это целое искусство. Существуют определенные традиции и правила, которые помогут вам сделать правильный выбор...',
    date: '10.02.2021',
    category: 'Этикет'
  },
  {
    id: 4,
    title: 'Сезонные цветы: что выбрать весной',
    image: '/images/news-4.jpg',
    excerpt: 'Весна - время пробуждения природы и самых красивых сезонных цветов. Узнайте, какие цветы лучше всего дарить весной...',
    date: '08.02.2021',
    category: 'Сезонные'
  },
  {
    id: 5,
    title: 'Тренды в цветочной флористике 2021',
    image: '/images/news-5.jpg',
    excerpt: 'Каждый год в мире флористики появляются новые тренды. Узнайте, какие цветочные композиции будут популярны в этом году...',
    date: '05.02.2021',
    category: 'Тренды'
  },
  {
    id: 6,
    title: 'Романтические букеты для влюбленных',
    image: '/images/news-6.jpg',
    excerpt: 'День Святого Валентина - особенный день для влюбленных. Выберите идеальный букет, который выразит ваши чувства...',
    date: '03.02.2021',
    category: 'Романтика'
  }
]);

const currentPage = ref(1);
const totalPages = ref(5);

const goToPage = (page: number) => {
  currentPage.value = page;
  // TODO: Implement pagination logic
};
</script>

<style scoped>
.news-page {
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

/* News Grid */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.news-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.news-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f5f5f5;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.news-card:hover .news-image img {
  transform: scale(1.05);
}

.news-content {
  padding: 25px;
}

.news-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0 0 15px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-excerpt {
  color: #666;
  line-height: 1.6;
  margin: 0 0 20px 0;
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
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .news-image {
    height: 180px;
  }

  .news-content {
    padding: 20px;
  }

  .news-title {
    font-size: 16px;
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

  .news-image {
    height: 150px;
  }

  .news-content {
    padding: 15px;
  }

  .news-title {
    font-size: 15px;
  }

  .news-excerpt {
    font-size: 13px;
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
