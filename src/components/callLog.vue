<script>

export default{
  name: 'callLog',
  props: ["callLog"]
}
</script>

<template>
  <li>
    <p>{{ callLog.name }}</p>
    <p v-if="!callLog.name">{{ callLog.number }}</p>
    <p>{{ callLog.date }}</p>
  </li>
</template>