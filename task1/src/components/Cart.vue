<template>
  <section class="cart-wrap">
    <div class="cart-header">
      <h2>Hatem's Selected Products</h2>
      <p>{{ cart.length }} item(s)</p>
    </div>

    <table class="selected-table" v-if="cart.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.category }}</td>
          <td>${{ item.price.toFixed(2) }}</td>
          <td>
            <button
              @click="$emit('remove-from-cart', item.id)"
              class="remove-btn"
            >
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="empty-state" v-else>
      <p>Your cart is empty. Add products from the catalog page.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "CartView",
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.cart-wrap {
  border: 1px solid #e7e5e4;
  border-radius: 18px;
  padding: 16px;
  background: linear-gradient(180deg, #fffdfa 0%, #ffffff 100%);
  box-shadow: 0 10px 24px rgba(17, 24, 39, 0.08);
  animation: lift-in 500ms ease;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 12px;
}

.cart-header h2 {
  margin: 0;
}

.cart-header p {
  margin: 0;
  color: #6b7280;
  font-weight: 700;
}

.selected-table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 12px;
}

.selected-table th,
.selected-table td {
  border: 1px solid #e5e7eb;
  padding: 10px;
  text-align: left;
}

.selected-table thead th {
  background: #f0fdfa;
}

.remove-btn {
  border: none;
  background: linear-gradient(135deg, #f97316 0%, #fb923c 100%);
  color: #fff;
  font-weight: 700;
  border-radius: 8px;
  padding: 7px 12px;
  cursor: pointer;
}

.empty-state {
  border: 2px dashed #d6d3d1;
  border-radius: 12px;
  padding: 22px;
  text-align: center;
  color: #6b7280;
}

@keyframes lift-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .selected-table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}
</style>
