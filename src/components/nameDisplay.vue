<script>
export default{
  name: 'nameDisplay',
  props: [
    "contactList",
    "numberInput"
]
}
</script>

<template>
  <div v-for="contact in contactList" :key="contact.name">
    <p v-if="contact.number === numberInput">{{ contact.name }}</p>
  </div>

</template>