<script>
import { useNumberStore } from '@/stores/number';
import displayNumber from '@/components/displayNumber.vue';
export default{
  name: 'Keypad',
  setup(){
    const keypadNumberStore = useNumberStore();
    return {
      keypadNumberStore,
    }
  },
  computed: {
    numberInput(){
      return this.keypadNumberStore.strNumber.number;
    },
    callLog(){
      return this.keypadNumberStore.callLog;
    }
  },
  data(){
    return {
      keypad: [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['0']
      ],
    }
  },
  methods: {
    addDigit(key){
      this.keypadNumberStore.addDigit(key);
    },
    call(caller){
      this.keypadNumberStore.call(caller);
      this.number = "";
    }
  },
  components: {
    displayNumber
  }
}
</script>

<template>
  <section>
    <displayNumber :displayNumber="numberInput" />
    <div class="keypad">
      <div v-for="row in keypad" :key="row">
        <div v-for="key in row" :key="key">
          <button @click="addDigit(key)">{{ key }}</button>
        </div>
      </div>
    </div>
    <button @click="call(numberInput)"><font-awesome-icon icon="fa-solid fa-phone" /></button>
  </section>
</template>

<style scoped>
section{
  text-align: center;
}

.keypad {
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	:nth-child(4) {
		grid-column: 2;
	}
}
</style>
