<template>
  <div class="info-block">
    <div class="info-block__icon">
      <i :class="`icon-${block.icon}`"></i>
    </div>
    <div class="info-block__content">
      <h3 class="info-block__title">{{ block.title }}</h3>
      <p class="info-block__description">{{ block.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface InfoBlock {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface Props {
  block: InfoBlock;
}

defineProps<Props>();
</script>

<style scoped>
.info-block {
  background: #f8f9fa;
  border: 2px solid #e91e63;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-block:hover {
  background: #fff;
  box-shadow: 0 8px 25px rgba(233, 30, 99, 0.15);
  transform: translateY(-5px);
}

.info-block__icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #e91e63, #9c27b0);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
}

.info-block__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-block__title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0 0 15px 0;
  line-height: 1.3;
}

.info-block__description {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .info-block {
    padding: 20px;
  }

  .info-block__icon {
    width: 50px;
    height: 50px;
    font-size: 20px;
    margin-bottom: 15px;
  }

  .info-block__title {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .info-block__description {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .info-block {
    padding: 15px;
  }

  .info-block__icon {
    width: 45px;
    height: 45px;
    font-size: 18px;
    margin-bottom: 12px;
  }

  .info-block__title {
    font-size: 15px;
  }

  .info-block__description {
    font-size: 12px;
  }
}
</style>
