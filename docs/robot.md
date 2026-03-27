<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  if (!document.querySelector('#mv-script')) {
    const s = document.createElement('script')
    s.id = 'mv-script'
    s.type = 'module'
    s.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js'
    document.head.appendChild(s)
  }
})
</script>

<ClientOnly>
  <model-viewer 
    src="/test.glb" 
    ar camera-controls auto-rotate
    style="width: 100%; height: 600px; background-color: #1a1a1b;">
  </model-viewer>
</ClientOnly>
