<script>

export default{
  name: 'callLog',
  props: ["callLog"]
}
</script>

<template>
  <li v-if="!callLog.name && !callLog.number">
    <p>{{ callLog }}</p>
  </li>
  <li v-else>
    <p>{{ callLog.name }}</p>
    <p>{{ callLog.number }}</p>
  </li>
</template>