<script>
import { useNumberStore } from '@/stores/number';
import displayNumber from '@/components/displayNumber.vue';
import nameDisplay from '@/components/nameDisplay.vue';
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
      return this.keypadNumberStore.callNumber.number;
    },
    contacts(){
      return this.keypadNumberStore.contacts;
    }
  },
  data(){
    return {
      keypad: [
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['3', '6', '9'],
        ['0']
      ],
      caller: null,
    }
  },
  methods: {
    addDigit(key){
      this.keypadNumberStore.addDigit(key);
    },
    call(number){
      if (number.length === 0) return;
      for (let i=0; i<this.contacts.length; i++){
        const contact = this.contacts[i];
        if (contact.number === number){
          this.caller = contact.name;
        }
      }
      this.keypadNumberStore.call(this.caller, number);
    }
  },
  components: {
    displayNumber,
    nameDisplay
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
    <button id="call" @click="call(numberInput)"><font-awesome-icon icon="fa-solid fa-phone" /></button>
  <nameDisplay :contactList="contacts" :numberInput="numberInput"/>
  </section>
</template>

<style scoped>
section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #FBBFCA;
}

.keypad {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
  width: 300px;
  
	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	:nth-child(4) {
		grid-column: 2;
	}
}

button{
  width: 50px;
  height: 50px;
  background-color: #875053;
  color: #FBBFCA;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  border-radius: 50%;
  margin: 10px;
  padding: 10px;
  border: none;

  &:hover{
    background-color: #ad7275;
  }
}
</style>
