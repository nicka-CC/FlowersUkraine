<template>
  <div class="close-events-root">
    <div class="close-events-hero">
      <div class="close-events-hero-content">
        <h1>CLOSE<br />EVENTS</h1>
        <p class="close-events-hero-desc">EXPLORE THE CLOSEST EVENTS. READ ABOUT STARTS</p>
      </div>
    </div>
    <div class="close-events-list-wrap">
      <Input v-model="search" placeholder="Search events..." class="close-events-search" @input="onSearch" />
      <div v-if="loading" class="close-events-loading">Загрузка...</div>
      <div v-else>
        <div v-if="events.length === 0" class="close-events-empty">Нет закрытых событий</div>
        <div v-else class="close-events-list">
          <div
            v-for="event in events"
            :key="event.id"
            class="close-event-card"
          >
            <div class="close-event-card-bg" :style="event.picture ? `background-image:url(${event.picture})` : ''"></div>
            <div class="close-event-card-content">
              <div class="close-event-card-title">{{ event.title }}</div>
              <div class="close-event-card-sub">{{ event.subtitle || 'First battle mile competitions' }}</div>
              <div class="close-event-card-info-row">
                <div class="close-event-card-info-block">
                  <span class="close-event-card-info-label">LOCATION:</span>
                  <span class="close-event-card-info-value">{{ event.location }}</span>
                </div>
                <div class="close-event-card-info-block">
                  <span class="close-event-card-info-label">PRIZE FUNDS</span>
                  <span class="close-event-card-prize">{{ event.prize_fund }}$</span>
                </div>
              </div>
              <div class="close-event-card-info-row">
                <div class="close-event-card-info-block">
                  <span class="close-event-card-info-label">Date:</span>
                  <span class="close-event-card-info-value">{{ event.date }}</span>
                </div>
                <div class="close-event-card-info-block">
                  <span class="close-event-card-info-label">Teams:</span>
                  <span class="close-event-card-info-value">{{ event.teams || '—' }}</span>
                </div>
                <div class="close-event-card-info-block">
                  <span class="close-event-card-info-label">Organizators:</span>
                  <span class="close-event-card-info-value">{{ event.organizators || 'Ace battle association' }}</span>
                </div>
              </div>
              <div class="close-event-card-actions">
                <Button class="close-event-card-btn red" @click="registerTeam(event.id)">REGISTER YOUR TEAM</Button>
                <Button class="close-event-card-btn" @click="goToEvent(event.id)">SEE DETAILS</Button>
              </div>
            </div>
          </div>
        </div>
        <div class="close-events-pagination" v-if="totalPages > 1">
          <Button
            :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)"
            class="close-events-pagination-btn"
          >Назад</Button>
          <span class="close-events-pagination-info">Страница {{ currentPage }} из {{ totalPages }}</span>
          <Button
            :disabled="currentPage === totalPages"
            @click="changePage(currentPage + 1)"
            class="close-events-pagination-btn"
          >Вперёд</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCloseEvents } from '@/composables/useCloseEvents'
import Input from '@/components/ui/Input/Input.vue'
import Button from '@/components/ui/Button/Button.vue'

const search = ref('')
const {
  events,
  total,
  currentPage,
  totalPages,
  loading,
  error,
  fetchEvents,
} = useCloseEvents()

const router = useRouter()

const onSearch = () => {
  fetchEvents(search.value, 1)
}

const changePage = (page: number) => {
  fetchEvents(search.value, page)
}

const goToEvent = (id: number) => {
  router.push(`/event/${id}`)
}

const registerTeam = (id: number) => {
  router.push(`/event/${id}/register`)
}

fetchEvents()
</script>

<style scoped>
.close-events-root {
  background: #181818;
  min-height: 100vh;
  color: #fff;
}
.close-events-hero {
  width: 100%;
  min-height: 320px;
  background: url('/src/assets/close-events-hero.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.close-events-hero-content {
  background: rgba(0,0,0,0.7);
  padding: 48px 32px;
  border-radius: 16px;
  text-align: left;
  max-width: 480px;
}
.close-events-hero-content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  line-height: 1.1;
}
.close-events-hero-desc {
  font-size: 1rem;
  color: #ccc;
  margin: 0;
}
.close-events-list-wrap {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 16px;
}
.close-events-search {
  margin-bottom: 32px;
  width: 100%;
  max-width: 400px;
}
.close-events-loading,
.close-events-empty {
  color: #fff;
  text-align: center;
  margin: 48px 0;
  font-size: 1.2rem;
}
.close-events-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.close-event-card {
  background: #222;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.25);
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 320px;
}
.close-event-card-bg {
  width: 100%;
  height: 180px;
  background: #111 center/cover no-repeat;
}
.close-event-card-content {
  padding: 24px 24px 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.close-event-card-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.close-event-card-sub {
  color: #aaa;
  font-size: 1rem;
  margin-bottom: 12px;
}
.close-event-card-info-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 8px;
}
.close-event-card-info-block {
  display: flex;
  flex-direction: column;
  min-width: 120px;
}
.close-event-card-info-label {
  color: #888;
  font-size: 0.85rem;
}
.close-event-card-info-value {
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
}
.close-event-card-prize {
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2px;
}
.close-event-card-actions {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}
.close-event-card-btn {
  min-width: 140px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  padding: 10px 0;
}
.close-event-card-btn.red {
  background: #d32f2f;
  color: #fff;
  border: none;
}
.close-events-pagination {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;
  justify-content: center;
}
.close-events-pagination-btn {
  min-width: 90px;
  font-size: 1rem;
  border-radius: 8px;
}
.close-events-pagination-info {
  color: #fff;
  font-size: 1.1rem;
}
@media (max-width: 700px) {
  .close-events-list-wrap {
    padding: 16px 4px;
  }
  .close-event-card-content {
    padding: 16px 8px 12px 8px;
  }
  .close-event-card-info-row {
    gap: 12px;
  }
  .close-event-card-btn {
    min-width: 100px;
    font-size: 0.95rem;
    padding: 8px 0;
  }
}
</style> 