<template>
  <div class="custom-code-block-wrapper">
    <div v-if="description" class="insertion-point">
      <div class="code-description" v-html="description"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps(['description'])
</script>

<style scoped>
.custom-code-block-wrapper {
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-code-block-bg);
}

/* 1. Force the internal VitePress group to be a flex container */
:deep(.vp-code-group) {
  display: flex !important;
  flex-direction: column !important;
}

/* 2. TAB BAR: Set to first position */
:deep(.vp-code-group .tabs) {
  order: 1 !important;
  margin-bottom: 0 !important;
  border-bottom: 1px solid var(--vp-c-divider) !important;
}

/* 3. DESCRIPTION: We "teleport" it visually using order 2 */
/* We move the whole insertion-point into the flex flow of the group */
.insertion-point {
  display: contents; /* Makes this div "invisible" so child can use parent flex */
}

.code-description {
  order: 2 !important;
  padding: 12px 16px;
  font-size: 0.9em;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  line-height: 1.5;
}

/* 4. CODE CONTENT: Set to third position */
:deep(.vp-code-group div[class*='language-']) {
  order: 3 !important;
  border-radius: 0 !important;
  margin: 0 !important;
}
</style>
