<template>
  <div class="category-card" :class="`category-card--${category.color}`">
    <div class="category-card__image">
      <img :src="category.image" :alt="category.name" />
    </div>
    <div class="category-card__content">
      <h3 class="category-card__name">{{ category.name }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Category {
  id: number;
  name: string;
  image: string;
  color: 'pink' | 'yellow' | 'gray' | 'purple';
}

interface Props {
  category: Category;
}

defineProps<Props>();
</script>

<style scoped>
.category-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 200px;
  display: flex;
  flex-direction: column;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.category-card__image {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.category-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.category-card:hover .category-card__image img {
  transform: scale(1.05);
}

.category-card__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
}

.category-card__name {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Color variants */
.category-card--pink .category-card__content {
  background: linear-gradient(transparent, rgba(233, 30, 99, 0.8));
}

.category-card--yellow .category-card__content {
  background: linear-gradient(transparent, rgba(255, 193, 7, 0.8));
}

.category-card--gray .category-card__content {
  background: linear-gradient(transparent, rgba(158, 158, 158, 0.8));
}

.category-card--purple .category-card__content {
  background: linear-gradient(transparent, rgba(156, 39, 176, 0.8));
}

/* Mobile Styles */
@media (max-width: 768px) {
  .category-card {
    height: 150px;
  }

  .category-card__content {
    padding: 15px;
  }

  .category-card__name {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .category-card {
    height: 120px;
  }

  .category-card__content {
    padding: 12px;
  }

  .category-card__name {
    font-size: 14px;
  }
}
</style>
