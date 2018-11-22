<template>
  <div>
    <div class="title">Information</div>
    <div class="items">
      <div class="item">
        <div class="name">Vue.js:</div>
        <div class="value">{{ vue }}</div>
      </div>
      <div class="item">
        <div class="name">Electron:</div>
        <div class="value">{{ electron }}</div>
      </div>
      <div class="item">
        <div class="name">Node:</div>
        <div class="value">{{ node }}</div>
      </div>
      <div class="item">
        <div class="name">Platform:</div>
        <div class="value">{{ platform }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        electron: process.versions.electron,
        node: process.versions.node,
        platform: require('os').platform(),
        vue: require('vue/package.json').version
      }
    }
  }
</script>

