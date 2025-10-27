// store/products.ts
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
        total: 0,
        loading: false,
        error: null,
        filters: {
            name: '',
            categories: [],
            price_from: null,
            price_to: null,
            color: '',
            flowers: '',
            page: 1,
            limit: 100,
        },
    }),

    actions: {
        async fetchProducts(customFilters = {}) {
            try {
                this.loading = true

                const filters = { ...this.filters, ...customFilters }

                const params = new URLSearchParams()
                for (const [key, value] of Object.entries(filters)) {
                    if (value !== null && value !== '' && value !== undefined) {
                        if (Array.isArray(value)) {
                            value.forEach(v => params.append(key, v))
                        } else {
                            params.append(key, value)
                        }
                    }
                }

                const res = await axios.get(`https://flowers-shop-1.onrender.com/product?${params.toString()}`)
                this.products = res.data.data
                this.total = res.data.total
            } catch (err) {
                this.error = err
                console.error('Ошибка загрузки продуктов:', err)
            } finally {
                this.loading = false
            }
        },

        setFilter(key, value) {
            this.filters[key] = value
        },
    },
})
