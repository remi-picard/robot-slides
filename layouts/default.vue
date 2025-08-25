<template>
  <div class="slidev-layout default">
    <slot />
    <footer>
      <div id="title" class="ml-1"><img src="/images/Robot-framework-logo.png" class="logo" /><span>Développer avec Robot Framework</span></div>
      <div id="page" class="mr-1">{{ $page }}</div>
    </footer>
  </div>
</template>
<script setup lang="ts">
</script>