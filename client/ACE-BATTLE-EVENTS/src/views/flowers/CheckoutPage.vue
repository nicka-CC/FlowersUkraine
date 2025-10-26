<template>
  <div class="checkout-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#" class="breadcrumb-link">Главная</a>
        <span class="breadcrumb-separator">></span>
        <a href="#" class="breadcrumb-link">Корзина</a>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-current">Оформление заказа</span>
      </div>

      <h1 class="page-title">Оформление заказа</h1>

      <div class="checkout-content">
        <!-- Order Form -->
        <div class="order-form">
          <!-- Recipient Contacts -->
          <div class="form-section">
            <h2 class="section-title">1. Контакты получателя</h2>
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">Имя получателя *</label>
                <input 
                  v-model="form.recipient.name" 
                  type="text" 
                  class="form-input"
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label">Регион *</label>
                <select v-model="form.recipient.region" class="form-select" required>
                  <option value="">Выберите регион</option>
                  <option value="kyiv">Киев</option>
                  <option value="kharkiv">Харьков</option>
                  <option value="odessa">Одесса</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Телефон получателя *</label>
                <input 
                  v-model="form.recipient.phone" 
                  type="tel" 
                  class="form-input"
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label">Адрес *</label>
                <input 
                  v-model="form.recipient.address" 
                  type="text" 
                  class="form-input"
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label">Дата доставки</label>
                <input 
                  v-model="form.recipient.deliveryDate" 
                  type="date" 
                  class="form-input"
                >
              </div>
              <div class="form-group">
                <label class="form-label">Время доставки</label>
                <select v-model="form.recipient.deliveryTime" class="form-select">
                  <option value="">Выберите время</option>
                  <option value="6:00-9:00">6:00 - 9:00</option>
                  <option value="9:00-12:00">9:00 - 12:00</option>
                  <option value="12:00-15:00">12:00 - 15:00</option>
                  <option value="15:00-18:00">15:00 - 18:00</option>
                  <option value="18:00-21:00">18:00 - 21:00</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Sender Contacts -->
          <div class="form-section">
            <h2 class="section-title">2. Контакты отправителя</h2>
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">Имя *</label>
                <input 
                  v-model="form.sender.name" 
                  type="text" 
                  class="form-input"
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label">Телефон *</label>
                <input 
                  v-model="form.sender.phone" 
                  type="tel" 
                  class="form-input"
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label">Email *</label>
                <input 
                  v-model="form.sender.email" 
                  type="email" 
                  class="form-input"
                  required
                >
              </div>
            </div>
          </div>

          <!-- Delivery Details -->
          <div class="form-section">
            <h2 class="section-title">3. Детали доставки</h2>
            <div class="checkbox-group">
              <label class="checkbox-item">
                <input 
                  v-model="form.delivery.surprise" 
                  type="checkbox"
                >
                <span class="checkmark"></span>
                Доставка сюрпризом
              </label>
              <label class="checkbox-item">
                <input 
                  v-model="form.delivery.photoReport" 
                  type="checkbox"
                >
                <span class="checkmark"></span>
                Фотоотчет (+15 грн)
              </label>
              <label class="checkbox-item">
                <input 
                  v-model="form.delivery.addVase" 
                  type="checkbox"
                >
                <span class="checkmark"></span>
                Добавить вазу (+249 грн)
              </label>
              <label class="checkbox-item">
                <input 
                  v-model="form.delivery.remindEvent" 
                  type="checkbox"
                >
                <span class="checkmark"></span>
                Напомнить о событии
              </label>
              <label class="checkbox-item">
                <input 
                  v-model="form.delivery.addCard" 
                  type="checkbox"
                >
                <span class="checkmark"></span>
                Открытка
              </label>
            </div>

            <div v-if="form.delivery.addCard" class="card-options">
              <div class="checkbox-group">
                <label class="checkbox-item">
                  <input 
                    v-model="form.delivery.businessCard" 
                    type="checkbox"
                  >
                  <span class="checkmark"></span>
                  Визитка
                </label>
                <label class="checkbox-item">
                  <input 
                    v-model="form.delivery.fullSizeCard" 
                    type="checkbox"
                  >
                  <span class="checkmark"></span>
                  Полномасштабная открытка (+79грн)
                </label>
              </div>
              <div class="form-group">
                <label class="form-label">Повод для открытки</label>
                <input 
                  v-model="form.delivery.cardOccasion" 
                  type="text" 
                  class="form-input"
                >
              </div>
              <div class="form-group">
                <label class="form-label">Текст открытки</label>
                <textarea 
                  v-model="form.delivery.cardText" 
                  class="form-textarea"
                  placeholder="До 70 символов"
                  maxlength="70"
                ></textarea>
                <div class="char-count">{{ form.delivery.cardText.length }}/70</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="order-summary">
          <h3 class="summary-title">Ваш заказ</h3>
          
          <div class="order-items">
            <div 
              v-for="item in orderItems" 
              :key="item.id"
              class="order-item"
            >
              <div class="item-info">
                <span class="item-name">{{ item.name }}</span>
                <span class="item-quantity">x{{ item.quantity }}</span>
              </div>
              <span class="item-price">{{ item.price * item.quantity }} ₴</span>
            </div>
          </div>

          <div class="summary-details">
            <div class="summary-row">
              <span class="summary-label">Сумма заказа</span>
              <span class="summary-value">{{ orderTotal }} ₴</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">Доставка</span>
              <span class="summary-value">{{ deliveryCost }} ₴</span>
            </div>
            <div v-if="form.delivery.photoReport" class="summary-row">
              <span class="summary-label">Фотоотчет</span>
              <span class="summary-value">15 ₴</span>
            </div>
            <div v-if="form.delivery.addVase" class="summary-row">
              <span class="summary-label">Ваза</span>
              <span class="summary-value">249 ₴</span>
            </div>
            <div v-if="form.delivery.fullSizeCard" class="summary-row">
              <span class="summary-label">Открытка</span>
              <span class="summary-value">79 ₴</span>
            </div>
            <div class="summary-row summary-row--total">
              <span class="summary-label">Всего</span>
              <span class="summary-value summary-value--total">{{ total }} ₴</span>
            </div>
          </div>

          <button class="place-order-btn" @click="placeOrder">
            Оформить заказ
          </button>

          <div class="coupon-section">
            <div class="form-group">
              <label class="form-label">Купон</label>
              <input 
                v-model="form.coupon" 
                type="text" 
                class="form-input"
                placeholder="Введите код купона"
              >
            </div>
            <div class="form-group">
              <label class="form-label">Подарочный сертификат</label>
              <input 
                v-model="form.giftCertificate" 
                type="text" 
                class="form-input"
                placeholder="Введите номер подарочного сертификата"
              >
            </div>
            <button class="apply-btn">Применить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Form data
const form = ref({
  recipient: {
    name: 'Иван Иванов',
    region: 'kyiv',
    phone: '+380 (98) 00 00 000',
    address: 'ул. Улица, 12',
    deliveryDate: '2021-02-22',
    deliveryTime: '6:00-9:00'
  },
  sender: {
    name: '',
    phone: '',
    email: ''
  },
  delivery: {
    surprise: true,
    photoReport: true,
    addVase: false,
    remindEvent: false,
    addCard: true,
    businessCard: true,
    fullSizeCard: true,
    cardOccasion: '',
    cardText: ''
  },
  coupon: '',
  giftCertificate: ''
});

// Mock order items
const orderItems = ref([
  {
    id: 1,
    name: '25 желтых тюльпанов',
    price: 5558,
    quantity: 2
  },
  {
    id: 2,
    name: '25 розовых пионовидных роз',
    price: 254,
    quantity: 1
  },
  {
    id: 3,
    name: 'Мечтательница',
    price: 254,
    quantity: 1
  }
]);

// Computed properties
const orderTotal = computed(() => {
  return orderItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

const deliveryCost = computed(() => {
  return orderTotal.value >= 800 ? 0 : 100;
});

const total = computed(() => {
  let total = orderTotal.value + deliveryCost.value;
  
  if (form.value.delivery.photoReport) total += 15;
  if (form.value.delivery.addVase) total += 249;
  if (form.value.delivery.fullSizeCard) total += 79;
  
  return total;
});

// Methods
const placeOrder = () => {
  console.log('Place order:', form.value, orderItems.value);
  // TODO: Implement place order logic
};
</script>

<style scoped>
.checkout-page {
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

/* Checkout Content */
.checkout-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;
  margin-bottom: 60px;
}

/* Order Form */
.order-form {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;
}

.form-section {
  margin-bottom: 40px;
}

.form-section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 0 0 25px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #e91e63;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.form-input,
.form-select,
.form-textarea {
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s;
  background: #fff;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #e91e63;
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
}

.char-count {
  font-size: 12px;
  color: #999;
  text-align: right;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

.checkbox-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: #333;
}

.checkbox-item input[type="checkbox"] {
  display: none;
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  position: relative;
  transition: all 0.3s;
}

.checkbox-item input[type="checkbox"]:checked + .checkmark {
  background: #e91e63;
  border-color: #e91e63;
}

.checkbox-item input[type="checkbox"]:checked + .checkmark::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.card-options {
  margin-top: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px solid #e91e63;
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

.order-items {
  margin-bottom: 25px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
}

.order-item:last-child {
  border-bottom: none;
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-name {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.item-quantity {
  font-size: 12px;
  color: #666;
}

.item-price {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.summary-details {
  margin-bottom: 30px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
}

.summary-row--total {
  border-top: 2px solid #e0e0e0;
  padding-top: 15px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
}

.summary-label {
  color: #666;
}

.summary-value {
  color: #333;
  font-weight: 600;
}

.summary-value--total {
  color: #e91e63;
  font-size: 18px;
}

.place-order-btn {
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
  margin-bottom: 30px;
}

.place-order-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(233, 30, 99, 0.3);
}

.coupon-section {
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
}

.coupon-section .form-group {
  margin-bottom: 15px;
}

.apply-btn {
  width: 100%;
  background: #f5f5f5;
  color: #333;
  border: 2px solid #e0e0e0;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.apply-btn:hover {
  background: #e91e63;
  color: #fff;
  border-color: #e91e63;
}

/* Mobile Styles */
@media (max-width: 1024px) {
  .checkout-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .order-summary {
    position: static;
  }
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .order-form {
    padding: 20px;
  }

  .order-summary {
    padding: 20px;
  }

  .page-title {
    font-size: 24px;
  }

  .section-title {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .order-form {
    padding: 15px;
  }

  .order-summary {
    padding: 15px;
  }

  .page-title {
    font-size: 20px;
  }

  .form-input,
  .form-select,
  .form-textarea {
    padding: 10px 12px;
  }
}
</style>
