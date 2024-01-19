<script>
import { useNumberStore } from "@/stores/number";
import DisplayNumber from "./displayNumber.vue";
export default {
	name: "contact",
	setup() {
		const contactStore = useNumberStore();
		return {
			contactStore,
		};
	},
	data() {
		return {
			name: "",
			number: "",
		};
	},
  computed: {
    contacts(){
      return this.contactStore.contacts;
    }
  },
	methods: {
		addContact() {
			this.contactStore.addContact(this.name, this.number);
			this.name = "";
			this.number = "";
		},
	},
	components: { DisplayNumber },
};
</script>

<template>
	<section>
		<h2 v-if="!name">Ajouter un contact</h2>
		<h2 v-else>{{ name }}</h2>
		<DisplayNumber :displayNumber="number" />
		<form @submit.prevent="addContact()">
			<label for="name">Nom</label>
			<input type="text" name="name" id="name" v-model="name" required />
			<label for="number">Numéro</label>
			<input
				type="number"
				name="number"
				id="number"
				v-model="number"
				required
			/>
			<button type="submit">Ajouter</button>
		</form>
	</section>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
</style>
