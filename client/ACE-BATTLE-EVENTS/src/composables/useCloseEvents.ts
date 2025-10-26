import { ref } from 'vue'
import {API} from "@/constants/api.ts";

export function useCloseEvents() {
  const events = ref([])
  const total = ref(0)
  const currentPage = ref(1)
  const totalPages = ref(1)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const fetchEvents = async (search = '', page = 1, itemsPerPage = 10) => {
    loading.value = true
    error.value = null
    try {
      const params = new URLSearchParams({
        search,
        current_page: String(page),
        items_per_page: String(itemsPerPage),
      })
      const response = await fetch(`${API}/event/get/closen?${params.toString()}`)
      if (!response.ok) throw new Error('Ошибка загрузки событий')
      const data = await response.json()
      events.value = data.events
      total.value = data.total
      currentPage.value = data.current_page
      totalPages.value = data.total_pages
    } catch (e) {
      error.value = e instanceof Error ? e : new Error(String(e))
    } finally {
      loading.value = false
    }
  }

  return {
    events,
    total,
    currentPage,
    totalPages,
    loading,
    error,
    fetchEvents,
  }
} 