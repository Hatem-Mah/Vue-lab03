<template>
  <div id="app" class="app-shell">
    <div class="glow glow-left"></div>
    <div class="glow glow-right"></div>

    <header class="topbar">
      <div class="brand">
        <p class="brand-tag">Hatem's Product Lab</p>
        <h1>NOVACART</h1>
      </div>
      <nav class="nav-links">
        <router-link to="/" class="nav-button">Catalog</router-link>
        <router-link to="/cart" class="nav-button">
          Cart ({{ selectedProducts.length }})
        </router-link>
      </nav>
    </header>

    <main class="page-content">
      <router-view
        :products="products"
        :cart="selectedProducts"
        @add-to-cart="addToCart"
        @delete-product="deleteProduct"
        @remove-from-cart="removeFromCart"
      />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      products: [],
      selectedProducts: [],
    };
  },
  mounted() {
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((data) => {
        this.products = data.products;
      });
  },
  methods: {
    deleteProduct(id) {
      this.products = this.products.filter((product) => product.id !== id);
    },
    addToCart(product) {
      if (!this.selectedProducts.find((p) => p.id === product.id)) {
        this.selectedProducts.push(product);
      }
    },
    removeFromCart(id) {
      this.selectedProducts = this.selectedProducts.filter(
        (product) => product.id !== id
      );
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Archivo+Black&display=swap");

:root {
  --bg-main: #f7f3ea;
  --bg-card: #fffdfa;
  --ink: #1f2937;
  --muted: #596275;
  --accent: #0f766e;
  --accent-deep: #115e59;
  --accent-soft: #99f6e4;
  --warm: #f97316;
  --warm-soft: #fed7aa;
  --line: #d6d3d1;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: radial-gradient(circle at top left, #fff6d8 0, #f7f3ea 38%),
    linear-gradient(125deg, #f7f3ea 0%, #f9fafb 55%, #eefdf8 100%);
  color: var(--ink);
  min-height: 100vh;
}

#app {
  font-family: "Space Grotesk", "Trebuchet MS", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--ink);
}

.app-shell {
  width: min(1200px, 94vw);
  margin: 24px auto;
  position: relative;
  isolation: isolate;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: rgba(255, 253, 250, 0.9);
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.08);
  backdrop-filter: blur(6px);
  animation: drop-in 700ms ease;
}

.brand h1 {
  margin: 2px 0 0;
  letter-spacing: 0.08em;
  line-height: 1;
  font-family: "Archivo Black", Impact, sans-serif;
  color: var(--accent-deep);
}

.brand-tag {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 11px;
  color: var(--muted);
}

.nav-links {
  display: flex;
  gap: 10px;
}

.nav-button {
  padding: 10px 18px;
  cursor: pointer;
  border: 1px solid var(--line);
  border-radius: 999px;
  text-decoration: none;
  color: var(--ink);
  display: inline-block;
  font-weight: 600;
  background: var(--bg-card);
  transition: transform 180ms ease, background-color 180ms ease,
    box-shadow 180ms ease;
}

.nav-button:hover {
  transform: translateY(-2px);
  background: #ffffff;
  box-shadow: 0 8px 18px rgba(17, 24, 39, 0.1);
}

.router-link-exact-active {
  background: linear-gradient(135deg, var(--accent) 0%, #14b8a6 100%);
  color: #fff;
  border-color: transparent;
}

.page-content {
  margin-top: 18px;
}

.glow {
  position: absolute;
  z-index: -1;
  border-radius: 999px;
  filter: blur(30px);
  opacity: 0.6;
}

.glow-left {
  width: 220px;
  height: 220px;
  background: var(--warm-soft);
  top: -40px;
  left: -60px;
}

.glow-right {
  width: 240px;
  height: 240px;
  background: var(--accent-soft);
  right: -70px;
  bottom: 30%;
}

@keyframes drop-in {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .app-shell {
    margin: 14px auto;
  }

  .topbar {
    padding: 16px;
    border-radius: 16px;
  }

  .brand h1 {
    font-size: 30px;
  }
}
</style>
