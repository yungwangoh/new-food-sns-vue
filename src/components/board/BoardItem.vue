<template>
	<AppCard>
		<h5 class="card-title text-truncate">{{ title }}</h5>
		<p class="card-text text-truncate">{{ content }}</p>
		<p class="text-muted">{{ createdDate }}</p>
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
import { computed, inject } from 'vue';
import AppCard from '../itemList/AppCard.vue';

const props = defineProps({
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

const dayjs = inject('dayjs');
const createdDate = computed(() =>
	dayjs(props.createdAt).format('YYYY. MM. DD HH:mm'),
);
</script>

<style lang="scss" scoped></style>
