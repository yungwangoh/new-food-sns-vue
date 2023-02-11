<template>
	<AppCard>
		<h5 class="card-title text-truncate">{{ title }}</h5>
		<p class="card-text text-truncate">{{ content }}</p>
		<p class="text-muted">{{ createdAt }}</p>
	</AppCard>
</template>

<script setup>
import AppCard from '../itemList/AppCard.vue';
defineProps({
	title: {
		type: String,
		requred: true,
	},
	content: {
		type: String,
		requred: true,
	},
	createdAt: {
		type: [String, Number, Date],
	},
});
</script>

<style lang="scss" scoped></style>
