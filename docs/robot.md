---
outline: deep
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (!document.querySelector('#model-viewer-script')) {
    const script = document.createElement('script')
    script.id = 'model-viewer-script'
    script.type = 'module'
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js'
    document.head.appendChild(script)
  }
})
</script>

# Our Robot: OmicronX

<ClientOnly>
  <div class="model-container">
    <model-viewer 
      src="/Team-Website/test.glb" 
      alt="3D model of our FTC Robot"
      auto-rotate 
      camera-controls 
      shadow-intensity="1"
      touch-action="pan-y"
      style="width: 100%; height: 600px;">
    </model-viewer>
  </div>
</ClientOnly>

<style>
  model-viewer {
    width: 100%;
    height: 100%;
    background-color: color-mix(in srgb, var(--vp-c-bg-soft), transparent 50%);
    --poster-color: transparent;
  }

  .model-container {
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid color-mix(in srgb, var(--vp-c-divider), transparent);
    margin-top: 20px;
    height: 600px;
  }
</style>
