<template>
	<AppCard>
		<h5 class="card-title text-truncate">{{ title }}</h5>
		<p class="card-text text-truncate">{{ content }}</p>
		<p class="text-muted">{{ createdAt }}</p>
		<template #footer>
			<div class="d-flex flex-row-reverse">
				<button class="btn p-1" @click.stop="$emit('modal')">
					<i class="bi bi-chevron-bar-left p-1"></i>
					미리 보기
				</button>
			</div>
		</template>
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

defineEmits(['modal']);
</script>

<style lang="scss" scoped></style>
