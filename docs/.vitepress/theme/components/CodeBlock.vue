<template>
  <div class="custom-code-group">
    <slot></slot>
    <div v-if="description" class="code-description" v-html="description"></div>
  </div>
</template>

<script setup>
defineProps(['description'])
</script>

<style scoped>
.custom-code-group {
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-code-block-bg);
}

/* Reordering logic to put description under tabs */
:deep(.vp-code-group) {
  display: flex !important;
  flex-direction: column !important;
  margin: 0 !important;
}

:deep(.tabs) { 
  order: 1 !important; 
  border-bottom: 1px solid var(--vp-c-divider) !important;
}

.code-description { 
  order: 2 !important; 
  padding: 12px 16px;
  font-size: 0.9em;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

:deep(div[class*='language-']) { 
  order: 3 !important; 
  border-radius: 0 !important;
  margin: 0 !important;
}
</style>
