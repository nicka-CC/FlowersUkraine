<template>
  <div class="delivery-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#" class="breadcrumb-link">Главная</a>
        <span class="breadcrumb-separator">></span>
        <a href="#" class="breadcrumb-link">Информация</a>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-current">Оплата и доставка</span>
      </div>

      <h1 class="page-title">Оплата и доставка</h1>

      <!-- Main Content -->
      <div class="delivery-content">
        <div class="delivery-info">
          <p>
            Flowers-Ukraine.com - это сеть партнеров, которая гарантирует своевременную 
            и правильную доставку цветов и подарков по всей Украине. Мы понимаем, что 
            цветы и фруктовые корзины - это скоропортящиеся товары, поэтому допускаем 
            изменение состава или внешнего вида на 20-25% при сохранении общего вида 
            и стоимости букета.
          </p>

          <h2>Доставка</h2>
          <ul>
            <li><strong>Доставка цветов в областные центры Украины</strong> - от 100 грн</li>
            <li><strong>Дополнительная плата</strong> за доставку в ранние (7:00-9:00) и вечерние (21:00-23:00) часы - 50 грн</li>
            <li><strong>Для крупных городов</strong> (Киев, Днепр, Одесса, Донецк, Харьков):
              <ul>
                <li>Бесплатная доставка при заказе от 800 грн</li>
                <li>100 грн при заказе до 800 грн</li>
              </ul>
            </li>
            <li><strong>Доставка в районные центры и села</strong> - от 160 грн (уточняйте у менеджера)</li>
          </ul>

          <p>
            <strong>Важно:</strong> Время доставки не может быть гарантировано при высокой 
            загруженности дорог. Заказы, оплаченные после 18:00 по киевскому времени 
            для доставки на следующий день в ранние часы, могут быть перенесены.
          </p>

          <h2>Вы можете оплатить товар:</h2>
          <div class="payment-methods">
            <div class="payment-logo">
<!--              <img src="/images/privatbank-logo.png" alt="ПриватБанк" />-->
              <span>Приват24</span>
            </div>
            <div class="payment-logo">
<!--              <img src="/images/visa-logo.png" alt="VISA" />-->
              <span>VISA</span>
            </div>
            <div class="payment-logo">
<!--              <img src="/images/mastercard-logo.png" alt="MasterCard" />-->
              <span>MasterCard</span>
            </div>
            <div class="payment-logo">
<!--              <img src="/images/portmone-logo.png" alt="Portmone" />-->
              <span>Portmone.com</span>
            </div>
            <div class="payment-logo">
<!--              <img src="/images/yandex-logo.png" alt="Яндекс" />-->
              <span>Яндекс</span>
            </div>
          </div>

          <div class="payment-details">
            <p>
              <strong>Приват24</strong> - самый популярный интернет-банк в Украине. 
              Оплата наличными курьеру производится заранее, с доплатой 20 грн за визит курьера.
            </p>
            <p>
              <strong>Visa/MasterCard</strong> - оплата через Portmone.com с безопасной 
              авторизацией. Данные карты вводятся на Portmone.com в защищенном режиме 
              и недоступны нашим сотрудникам.
            </p>
            <p>
              <strong>Яндекс.Деньги</strong> - после оплаты просим отправить письмо 
              с указанием суммы платежа и номера заказа.
            </p>
          </div>

          <p class="highlight">
            <strong>Мы работаем по всей Украине!</strong>
          </p>
        </div>

        <!-- Public Offer Agreement -->
        <div class="agreement-section">
          <h2>Договор-оферта интернет-магазина</h2>
          <p>
            Интернет-магазин flowers-ukraine.com (ПРОДАВЕЦ) публикует настоящий договор-оферту 
            на оказание информационных услуг физическим и юридическим лицам (ПОКУПАТЕЛЬ).
          </p>
          
          <h3>Статья 1. Предмет договора-оферты</h3>
          <p>
            1.1. ПРОДАВЕЦ обязуется произвести пополнение виртуального счета на сайте 
            flowers-ukraine.com ПОКУПАТЕЛЮ, А ПОКУПАТЕЛЬ обязуется оплатить услугу 
            любым удобным способом на условиях, указанных в настоящем договоре.
          </p>
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
// Delivery page component
</script>

<style scoped>
.delivery-page {
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

/* Delivery Content */
.delivery-content {
  max-width: 800px;
  margin: 0 auto;
}

.delivery-info {
  margin-bottom: 60px;
}

.delivery-info h2 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 30px 0 20px 0;
}

.delivery-info h3 {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 25px 0 15px 0;
}

.delivery-info p {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin: 0 0 20px 0;
}

.delivery-info ul {
  margin: 0 0 20px 0;
  padding-left: 20px;
}

.delivery-info li {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 8px;
}

.delivery-info ul ul {
  margin: 8px 0;
}

.delivery-info strong {
  color: #333;
  font-weight: 600;
}

.highlight {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #e91e63;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
}

/* Payment Methods */
.payment-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.payment-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  transition: all 0.3s;
}

.payment-logo:hover {
  border-color: #e91e63;
  transform: translateY(-2px);
}

.payment-logo img {
  width: 60px;
  height: 40px;
  object-fit: contain;
}

.payment-logo span {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.payment-details {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  margin: 30px 0;
}

.payment-details p {
  margin: 0 0 15px 0;
}

.payment-details p:last-child {
  margin: 0;
}

/* Agreement Section */
.agreement-section {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 12px;
  border: 2px solid #e91e63;
}

.agreement-section h2 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0 0 20px 0;
  text-align: center;
}

.agreement-section h3 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 20px 0 15px 0;
}

.agreement-section p {
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin: 0 0 15px 0;
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
@media (max-width: 768px) {
  .delivery-content {
    max-width: 100%;
  }

  .page-title {
    font-size: 24px;
  }

  .delivery-info h2 {
    font-size: 20px;
  }

  .delivery-info h3 {
    font-size: 18px;
  }

  .delivery-info p,
  .delivery-info li {
    font-size: 15px;
  }

  .payment-methods {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .payment-logo {
    padding: 15px;
  }

  .payment-logo img {
    width: 50px;
    height: 35px;
  }

  .agreement-section {
    padding: 20px;
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

  .page-title {
    font-size: 20px;
  }

  .delivery-info h2 {
    font-size: 18px;
  }

  .delivery-info h3 {
    font-size: 16px;
  }

  .delivery-info p,
  .delivery-info li {
    font-size: 14px;
  }

  .payment-methods {
    grid-template-columns: 1fr;
  }

  .payment-logo {
    padding: 12px;
  }

  .agreement-section {
    padding: 15px;
  }

  .highlight {
    font-size: 16px;
    padding: 15px;
  }
}
</style>
