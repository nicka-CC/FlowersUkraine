<template>
  <div class="forum-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#" class="breadcrumb-link">Главная</a>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-current">Форум</span>
      </div>

      <h1 class="page-title">Форум</h1>

      <!-- Returns Policy -->
      <div class="returns-policy">
        <p>
          Мы ценим каждого клиента и стремимся предоставить только качественные товары. 
          В соответствии с Законом о защите прав потребителей, вы можете вернуть или обменять 
          товар в течение 14 дней с момента покупки, если он не подошел по размеру, цвету, 
          фасону или другим характеристикам, либо имеет дефекты.
        </p>
      </div>

      <!-- FAQ Sections -->
      <div class="faq-sections">
        <div class="faq-item" :class="{ 'faq-item--open': openSection === 'buy' }">
          <button class="faq-header" @click="toggleSection('buy')">
            <h3>Как купить?</h3>
            <i class="icon-chevron-down" :class="{ 'icon-chevron-up': openSection === 'buy' }"></i>
          </button>
          <div v-if="openSection === 'buy'" class="faq-content">
            <p>
              Заказать товар можно несколькими способами:
            </p>
            <ul>
              <li>Через наш сайт, выбрав нужный товар и оформив заказ</li>
              <li>По телефону: +38 (067) 829 30 30</li>
              <li>В офисе по адресу: г. Киев, ул. Оболонская Набережная, 7, корпус 5</li>
            </ul>
            <p>
              <strong>Время работы:</strong><br>
              Пн-Пт: 9:00-18:00<br>
              Сб: 10:00-16:00<br>
              Вс: выходной
            </p>
          </div>
        </div>

        <div class="faq-item" :class="{ 'faq-item--open': openSection === 'delivery' }">
          <button class="faq-header" @click="toggleSection('delivery')">
            <h3>Доставка и оплата</h3>
            <i class="icon-chevron-down" :class="{ 'icon-chevron-up': openSection === 'delivery' }"></i>
          </button>
          <div v-if="openSection === 'delivery'" class="faq-content">
            <p>Информация о доставке и способах оплаты...</p>
          </div>
        </div>

        <div class="faq-item" :class="{ 'faq-item--open': openSection === 'about' }">
          <button class="faq-header" @click="toggleSection('about')">
            <h3>О нашем магазине</h3>
            <i class="icon-chevron-down" :class="{ 'icon-chevron-up': openSection === 'about' }"></i>
          </button>
          <div v-if="openSection === 'about'" class="faq-content">
            <p>
              Наш магазин работает уже много лет и зарекомендовал себя как надежный поставщик 
              качественных цветов и подарков. Мы работаем как с частными клиентами, так и с 
              корпоративными заказчиками.
            </p>
            <p>
              <strong>Контакты менеджера:</strong><br>
              Телефон: +38 (067) 829 30 30<br>
              Email: manager@flowers-ukraine.com
            </p>
          </div>
        </div>
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
                <i class="icon-instagram"></i>
              </a>
              <a href="#" class="social-link">
                <i class="icon-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="page-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>ИНФОРМАЦИЯ</h4>
            <ul>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Доставка и оплата</a></li>
              <li><a href="#">Политика конфиденциальности</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>СЛУЖБА ПОДДЕРЖКИ</h4>
            <ul>
              <li><a href="#">Карта сайта</a></li>
              <li><a href="#">Возврат товара</a></li>
              <li><a href="#">Связаться с нами</a></li>
              <li><a href="#">Для сотрудничества</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>ЛИЧНЫЙ КАБИНЕТ</h4>
            <ul>
              <li><a href="#">Личный кабинет</a></li>
              <li><a href="#">История заказа</a></li>
              <li><a href="#">Закладки</a></li>
              <li><a href="#">Список новостей</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>ДОПОЛНИТЕЛЬНО</h4>
            <ul>
              <li><a href="#">Подарочные сертификаты</a></li>
              <li><a href="#">Акции</a></li>
              <li><a href="#">Цветы в офис</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const openSection = ref('buy');

const toggleSection = (section: string) => {
  openSection.value = openSection.value === section ? '' : section;
};
</script>

<style scoped>
.forum-page {
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
  margin: 0 0 30px 0;
  text-align: center;
}

/* Returns Policy */
.returns-policy {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 40px;
  border-left: 4px solid #e91e63;
}

.returns-policy p {
  color: #666;
  line-height: 1.6;
  margin: 0;
  font-size: 16px;
}

/* FAQ Sections */
.faq-sections {
  margin-bottom: 60px;
}

.faq-item {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
}

.faq-header {
  width: 100%;
  background: #e91e63;
  color: #fff;
  border: none;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s;
}

.faq-header:hover {
  background: #c2185b;
}

.faq-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.faq-content {
  padding: 30px;
  background: #fff;
}

.faq-content p {
  color: #666;
  line-height: 1.6;
  margin: 0 0 15px 0;
}

.faq-content ul {
  color: #666;
  line-height: 1.6;
  margin: 0 0 15px 0;
  padding-left: 20px;
}

.faq-content li {
  margin-bottom: 8px;
}

.faq-content strong {
  color: #333;
  font-weight: 600;
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

/* Footer */
.page-footer {
  background: #333;
  color: #fff;
  padding: 40px 0;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.footer-section h4 {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 20px 0;
  color: #fff;
}

.footer-section ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #ccc;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #e91e63;
}

/* Mobile Styles */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .map-section {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .map-container {
    height: 300px;
  }

  .faq-header {
    padding: 15px 20px;
  }

  .faq-content {
    padding: 20px;
  }

  .contact-card {
    padding: 20px;
  }

  .page-title {
    font-size: 24px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .returns-policy {
    padding: 20px;
  }

  .faq-header h3 {
    font-size: 16px;
  }

  .faq-content {
    padding: 15px;
  }

  .contact-card {
    padding: 15px;
  }

  .page-title {
    font-size: 20px;
  }
}
</style>
