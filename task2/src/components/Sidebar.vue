<template>
  <aside class="sidebar-panel">
    <p class="sidebar-title mb-3">Navigation</p>
    <ul class="nav flex-column gap-2">
      <li class="nav-item">
        <router-link class="nav-link side-link" :to="{ name: 'home' }">
          Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link side-link" :to="{ name: 'students' }">
          Students
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link side-link" :to="{ name: 'add-student' }">
          Add Student
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
</script>

<style scoped>
.sidebar-panel {
  background: linear-gradient(180deg, #f4e8c1, #f7f3e9);
  border-right: 1px solid #dfd2b6;
  padding: 1.25rem;
  height: 100%;
}

.sidebar-title {
  color: #123458;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.78rem;
  font-weight: 700;
}

.side-link {
  border-radius: 0.8rem;
  padding: 0.75rem 0.9rem;
  color: #173b55;
  font-weight: 600;
  border: 1px solid transparent;
}

.side-link:hover {
  background-color: #fffdf8;
  border-color: #e6d3aa;
}

.router-link-exact-active {
  background-color: #123458;
  color: #fffdf8 !important;
}
</style>
