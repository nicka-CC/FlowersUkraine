<template>
  <div class="about-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#" class="breadcrumb-link">Главная</a>
        <span class="breadcrumb-separator">></span>
        <a href="#" class="breadcrumb-link">Информация</a>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-current">О нас</span>
      </div>

      <h1 class="page-title">Цветочный интернет магазин</h1>

      <!-- Main Content -->
      <div class="about-content">
        <div class="about-text">
          <p>
            Мы - команда профессионалов, которая уже много лет занимается доставкой цветов 
            по Киеву и всей Украине. Наш интернет-магазин предлагает широкий ассортимент 
            свежих цветов, букетов и подарков для любых поводов.
          </p>

          <p>
            Мы работаем с лучшими поставщиками цветов, что гарантирует свежесть и качество 
            наших букетов. Наши флористы создают уникальные композиции, следуя последним 
            трендам в мире флористики.
          </p>

          <p>
            Заказать цветы у нас можно несколькими способами:
          </p>
          <ul>
            <li>Через наш сайт - просто выберите понравившийся букет и оформите заказ</li>
            <li>По телефону - наши менеджеры помогут подобрать идеальный букет</li>
            <li>В нашем офисе - приходите к нам и выбирайте цветы лично</li>
          </ul>

          <p>
            Мы гарантируем честные описания и фотографии наших букетов, а также 
            качественное обслуживание и доставку в любую точку города. К каждому заказу 
            мы прилагаем комплимент от компании в виде маленького презента.
          </p>

          <p>
            Наши флористы работают с душой и создают композиции, которые радуют не только 
            получателя, но и дарящего. Мы тщательно отбираем каждый цветок и создаем 
            букеты, которые соответствуют европейским стандартам качества.
          </p>

          <p>
            Помимо цветов, мы предлагаем:
          </p>
          <ul>
            <li>Плетеные корзинки со сладостями</li>
            <li>Коробки с цветами и сладостями</li>
            <li>Небольшие подарки, которые можно отправить вместе с букетом</li>
            <li>Поздравительные открытки</li>
            <li>Индивидуальные букеты по вашим пожеланиям</li>
          </ul>

          <p>
            Мы работаем как с частными клиентами, так и с корпоративными заказчиками, 
            предоставляя персональный подход к каждому клиенту. Наши менеджеры всегда 
            готовы помочь с выбором и ответить на все ваши вопросы.
          </p>

          <p>
            Доставка по Киеву осуществляется круглосуточно, включая выходные дни. 
            Мы ценим каждого клиента и стремимся к тому, чтобы вы становились нашими 
            постоянными покупателями благодаря качественному сервису и профессиональному подходу.
          </p>
        </div>

        <div class="about-images">
          <div class="image-grid">
            <div class="image-item">
<!--              <img src="/images/about-1.jpg" alt="Наши цветы" />-->
            </div>
            <div class="image-item">
<!--              <img src="/images/about-2.jpg" alt="Букеты" />-->
            </div>
            <div class="image-item">
<!--              <img src="/images/about-3.jpg" alt="Цветы в коробке" />-->
            </div>
            <div class="image-item">
<!--              <img src="/images/about-4.jpg" alt="Подарки" />-->
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
// About page component
</script>

<style scoped>
.about-page {
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

.page-title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0 0 40px 0;
  text-align: center;
}

/* About Content */
.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}

.about-text {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
}

.about-text p {
  margin: 0 0 25px 0;
}

.about-text ul {
  margin: 0 0 25px 0;
  padding-left: 20px;
}

.about-text li {
  margin-bottom: 8px;
}

.about-text strong {
  color: #333;
  font-weight: 600;
}

.about-images {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.image-item {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.image-item:hover {
  transform: translateY(-5px);
}

.image-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
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
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .image-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .about-text {
    font-size: 15px;
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

  .about-text {
    font-size: 14px;
  }

  .page-title {
    font-size: 20px;
  }

  .image-grid {
    grid-template-columns: 1fr;
  }

  .image-item img {
    height: 150px;
  }
}
</style>
