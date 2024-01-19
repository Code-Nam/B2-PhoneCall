<script>
import { useNumberStore } from "@/stores/number";
export default {
	name: "callLog",
	props: ["callLog"],
  setup() {
    const keypadNumberStore = useNumberStore();
    return {
      keypadNumberStore,
    };
  },
  methods: {
    call(name, number){
      this.keypadNumberStore.call(name, number);
    }
  }
};
</script>

<template>
	<li>
		<p>{{ callLog.name }}</p>
		<p v-if="!callLog.name">{{ callLog.number }}</p>
		<p class="date">{{ callLog.date }}</p>
    <button @click="call(callLog.name, callLog.number)"><font-awesome-icon icon="fa-solid fa-phone" /></button>
	</li>
</template>

<style>
li {
	display: flex;
	width: 300px;
	justify-content: space-between;
	align-items: center;
  gap: 10px;
	color: #fbbfca;
	background-color: #875053;
	margin: 10px;
	padding: 10px;

  .date{
    font-size: 0.8rem;
    font-style: italic;
  }
}

button {
	border: none;
	background-color: transparent;
	color: #fbbfca;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
	border-radius: 50%;
	margin: 10px;

	&:hover {
		color: #ad7275;
	}
}
</style>
