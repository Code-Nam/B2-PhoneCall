<script>
import callLog from "../components/callLog.vue";
import { useNumberStore } from '@/stores/number';
export default{
  name: 'CallLogView',
  setup(){
    const keypadNumberStore = useNumberStore();
    return {
      keypadNumberStore,
    }
  },
  computed: {
    callLog(){
      return this.keypadNumberStore.callLog;
    }
  },
  components: {
    callLog
  }
}
</script>

<template>
  <ul v-for="call in callLog" :key="call.number">
    <p>{{ callLog.number }}</p>
    <callLog :callLog="call"/>
  </ul>
</template>

<style>

</style>
