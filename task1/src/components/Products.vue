<template>
  <section class="catalog-grid">
    <article class="card" v-for="product in products" :key="product.id">
      <div class="card-images">
        <div
          class="thumb"
          v-for="(image, index) in product.images"
          :key="index"
        >
          <img :src="image" class="card-image" :alt="product.title" />
        </div>
      </div>

      <h2 class="card-title">{{ product.title }}</h2>
      <p class="card-description">{{ product.description }}</p>

      <div class="meta-grid">
        <div>
          <span>Category</span>
          <strong>{{ product.category }}</strong>
        </div>
        <div>
          <span>Discount</span>
          <strong :class="getDiscountClass(product.discountPercentage)">
            {{ product.discountPercentage }}%
          </strong>
        </div>
        <div>
          <span>Price</span>
          <strong>${{ product.price.toFixed(2) }}</strong>
        </div>
        <div>
          <span>Stock</span>
          <strong>{{ product.stock }}</strong>
        </div>
      </div>

      <div class="actions">
        <button @click.once="$emit('add-to-cart', product)" class="add-button">
          {{ isInCart(product.id) ? "Added" : "Add" }}
        </button>
        <button
          @click="$emit('delete-product', product.id)"
          class="delete-button"
        >
          Delete
        </button>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "ProductsView",
  props: {
    products: {
      type: Array,
      required: true,
    },
    cart: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getDiscountClass(discount) {
      if (discount > 10) {
        return "high-discount";
      } else if (discount > 5) {
        return "medium-discount";
      } else {
        return "low-discount";
      }
    },
    isInCart(id) {
      return this.cart.some((p) => p.id === id);
    },
  },
};
</script>

<style scoped>
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 18px;
}

.card {
  background: linear-gradient(160deg, #ffffff 0%, #fff9f0 100%);
  border: 1px solid #e7e5e4;
  border-radius: 18px;
  padding: 14px;
  text-align: left;
  box-shadow: 0 8px 20px rgba(17, 24, 39, 0.08);
  transform-origin: center;
  animation: float-in 500ms ease both;
}

.card:nth-child(2n) {
  animation-delay: 80ms;
}

.card:nth-child(3n) {
  animation-delay: 140ms;
}

.card-images {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 6px;
  margin-bottom: 10px;
}

.thumb {
  min-width: 84px;
  height: 84px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  background: #fff;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  margin: 4px 0;
  font-size: 1.2rem;
}

.card-description {
  margin: 0 0 12px;
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.35;
}

.meta-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin-bottom: 12px;
}

.meta-grid div {
  border: 1px solid #e5e7eb;
  background: #ffffff;
  border-radius: 10px;
  padding: 8px;
}

.meta-grid span {
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 10px;
  color: #6b7280;
  margin-bottom: 2px;
}

.actions {
  display: flex;
  gap: 8px;
}

.actions button {
  flex: 1;
  border: none;
  border-radius: 10px;
  padding: 9px 8px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 140ms ease, box-shadow 180ms ease;
}

.actions button:hover {
  transform: translateY(-1px);
}

.add-button {
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: #fff;
  box-shadow: 0 6px 14px rgba(20, 184, 166, 0.35);
}

.delete-button {
  background: linear-gradient(135deg, #f97316 0%, #fb923c 100%);
  color: #fff;
  box-shadow: 0 6px 14px rgba(249, 115, 22, 0.35);
}

.high-discount {
  color: #dc2626;
  font-weight: bold;
}

.medium-discount {
  color: #ea580c;
  font-weight: bold;
}

.low-discount {
  color: #15803d;
  font-weight: bold;
}

@keyframes float-in {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 640px) {
  .meta-grid {
    grid-template-columns: 1fr;
  }
}
</style>
