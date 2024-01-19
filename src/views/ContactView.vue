<script>
import contact from '@/components/contact.vue';
import { useNumberStore } from '@/stores/number';

export default{
    name: 'ContactView',
    components: { contact },
    setup(){
        const contactStore = useNumberStore();
        return {
            contactStore,
        }
    },
    computed: {
        contacts(){
            return this.contactStore.contacts;
        }
    },
}
</script>

<template>
  <contact />
  <ul v-for="contact in contacts" :key="contact.number">
    <li>
      <p>{{ contact.name }}</p>
      <p>{{ contact.number }}</p>
    </li>
  </ul>
</template>
