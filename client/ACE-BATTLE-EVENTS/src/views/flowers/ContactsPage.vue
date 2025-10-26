<template>
  <div class="contacts-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#" class="breadcrumb-link">Главная</a>
        <span class="breadcrumb-separator">></span>
        <a href="#" class="breadcrumb-link">Информация</a>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-current">Контакты</span>
      </div>

      <h1 class="page-title">Контакты</h1>

      <!-- Contact Content -->
      <div class="contact-content">
        <!-- Contact Info -->
        <div class="contact-info">
          <h2>Свяжитесь с нами</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris.
          </p>
          
          <div class="contact-details">
            <div class="contact-item">
              <i class="icon-map"></i>
              <div class="contact-text">
                <strong>Адрес:</strong><br>
                м. Київ, вулиця Оболонська Набережна, 7, корпус 5
              </div>
            </div>
            
            <div class="contact-item">
              <i class="icon-phone"></i>
              <div class="contact-text">
                <strong>Телефон:</strong><br>
                +380 99 937 1556
              </div>
            </div>
            
            <div class="contact-item">
              <i class="icon-clock"></i>
              <div class="contact-text">
                <strong>Время работы:</strong><br>
                Пн - Пт: 09:00 - 20:00<br>
                Сб - Вс: 09:00 - 15:00
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form">
          <h2>Заполните форму для обратной связи</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label class="form-label">Ваше имя</label>
              <input 
                v-model="form.name" 
                type="text" 
                class="form-input"
                placeholder="Иван Иванов"
                required
              >
            </div>
            
            <div class="form-group">
              <label class="form-label">E-Mail адрес</label>
              <input 
                v-model="form.email" 
                type="email" 
                class="form-input"
                placeholder="example@email.com"
                required
              >
            </div>
            
            <div class="form-group">
              <label class="form-label">Ваше сообщение</label>
              <textarea 
                v-model="form.message" 
                class="form-textarea"
                placeholder="Введите ваше сообщение"
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" class="submit-btn">
              Отправить
            </button>
          </form>
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
          <div class="contact-info-card">
            <div class="contact-item-card">
              <i class="icon-phone"></i>
              <span>+38 (063) 829 30 30</span>
            </div>
            <div class="contact-item-card">
              <i class="icon-phone"></i>
              <span>+38 (067) 829 30 30</span>
            </div>
            <div class="contact-item-card">
              <i class="icon-skype"></i>
              <span>Skype: Flowers-Ukraine</span>
            </div>
            <div class="contact-item-card">
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
              <a href="#" class="social-link">
                <i class="icon-pinterest"></i>
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

const form = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  console.log('Submit form:', form.value);
  // TODO: Implement form submission logic
};
</script>

<style scoped>
.contacts-page {
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

/* Contact Content */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}

.contact-info h2,
.contact-form h2 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0 0 25px 0;
}

.contact-info p {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin: 0 0 30px 0;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.contact-item i {
  color: #e91e63;
  font-size: 20px;
  margin-top: 5px;
  flex-shrink: 0;
}

.contact-text {
  color: #666;
  line-height: 1.6;
}

.contact-text strong {
  color: #333;
  font-weight: 600;
}

/* Contact Form */
.contact-form {
  background: #f8f9fa;
  padding: 40px;
  border-radius: 12px;
  border: 2px solid #e91e63;
}

.form-group {
  margin-bottom: 25px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s;
  background: #fff;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #e91e63;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  background: #e91e63;
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover {
  background: #c2185b;
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

.contact-info-card {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item-card {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #666;
  font-size: 14px;
}

.contact-item-card i {
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
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .map-section {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .map-container {
    height: 300px;
  }

  .contact-form {
    padding: 30px;
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

  .decorative-left,
  .decorative-right {
    display: none;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .contact-form {
    padding: 20px;
  }

  .contact-card {
    padding: 15px;
  }

  .page-title {
    font-size: 20px;
  }

  .contact-info h2,
  .contact-form h2 {
    font-size: 20px;
  }
}
</style>
