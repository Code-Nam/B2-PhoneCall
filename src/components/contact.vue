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
    <form @submit.prevent="addContact()">
      <h2 v-if="!name">Add a contact</h2>
      <h2 v-else>{{ name }}</h2>
      <DisplayNumber :displayNumber="number" />
			<label for="name">Contact Name</label>
			<input type="text" name="name" id="name" v-model="name" required />
			<label for="number">Contact Number</label>
			<input
				type="number"
				name="number"
				id="number"
				v-model="number"
				required
			/>
			<button id="submit" type="submit">Ajouter</button>
		</form>
	</section>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

section{
  display: flex;
  justify-content: center;
}

form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2B061E;
  padding: 20px;
  color: #FBBFCA;
  
  h2{
    font-weight:700;
  }

  button{
    color: #FBBFCA;
    background-color: #875053;
    margin-top: 1rem;
    border: none;
    padding: 0.5rem;

    &:hover{
      background-color: #FBBFCA;
      color: #875053;
      cursor: pointer;
    }
  }

  #submit{
    border-radius: 0;
  }
}
</style>
