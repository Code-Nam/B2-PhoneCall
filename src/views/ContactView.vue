<script>
import contact from "@/components/contact.vue";
import { useNumberStore } from "@/stores/number";

export default {
	name: "ContactView",
	components: { contact },
	setup() {
		const contactStore = useNumberStore();
		return {
			contactStore,
		};
	},
	computed: {
		contacts() {
			return this.contactStore.contacts;
		},
	},
	methods: {
		call(name, number) {
			this.contactStore.call(name, number);
		},
	},
	data() {
		return {
			toggle: false,
		};
	},
};
</script>

<template>
	<div>
		<button @click="toggle = !toggle" id="toggle">
			<font-awesome-icon icon="fa-solid fa-circle-plus" />
		</button>
	</div>
	<contact />
	<ul v-for="contact in contacts" :key="contact.number">
		<li>
			<p>{{ contact.name }}</p>
			<p>{{ contact.number }}</p>
			<button @click="call(contact.name, contact.number)"><font-awesome-icon icon="fa-solid fa-phone" /></button>
		</li>
	</ul>
</template>

<style scoped>
div {
	display: flex;
	flex-direction: column;
	align-items: center;
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

ul {
	list-style: none;
	padding: 0;
	margin: 0;
  display: grid;
  place-items: center;
	li {
		display: flex;
		width: 200px;
		justify-content: space-between;
    align-items: center;
    color: #FBBFCA;
    background-color: #875053;
    margin: 10px;
    padding: 10px;
	}
}
</style>
