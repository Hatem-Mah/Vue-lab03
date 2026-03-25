<template>
  <div class="app-shell">
    <Header />
    <div class="container-fluid shell-body px-0">
      <div class="row g-0 h-100">
        <Sidebar class="col-12 col-lg-3 col-xl-2 app-sidebar" />
        <main class="col-12 col-lg-9 col-xl-10 app-main">
          <slot></slot>
        </main>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
import Footer from "./Footer.vue";
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.shell-body {
  flex: 1;
}

.app-main {
  padding: 2rem 1.25rem;
}

@media (min-width: 992px) {
  .app-main {
    padding: 2.5rem;
  }
}
</style>
