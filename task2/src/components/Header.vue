<template>
  <header class="app-header">
    <div class="header-inner container-fluid">
      <div>
        <p class="header-kicker mb-1">Student Administration Portal</p>
        <h1 class="header-title mb-0">Hatem Student Hub</h1>
      </div>
      <p class="header-badge mb-0">Lab 3 Task 2</p>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.app-header {
  background: linear-gradient(120deg, #123458, #1f6f8b);
  color: #f7f3e9;
  padding: 1rem 1.25rem;
  border-bottom: 3px solid #f9bc60;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.header-kicker {
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.9;
}

.header-title {
  font-size: 1.4rem;
  font-weight: 700;
}

.header-badge {
  background: rgba(249, 188, 96, 0.2);
  border: 1px solid rgba(249, 188, 96, 0.7);
  border-radius: 999px;
  padding: 0.35rem 0.8rem;
  font-size: 0.85rem;
}

@media (max-width: 575px) {
  .header-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
