<script>
export default {
	name: "DisplayNumber",
	props: ["displayNumber"]
};
</script>

<template>
    <h2 v-if="!displayNumber">Please enter a number</h2>
    <h2 v-else>{{ displayNumber }}</h2>
</template>