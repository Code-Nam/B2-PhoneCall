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
	data() {
    return{
      toggle: false,
    }
	},
};
</script>

<template>
	<contact v-if="toggle" />
  <button @click="toggle = !toggle" id="toggle">Ajouter un contact</button>
	<ul v-for="contact in contacts" :key="contact.number">
		<li>
			<p>{{ contact.name }}</p>
			<p>{{ contact.date }}</p>
		</li>
	</ul>
</template>
