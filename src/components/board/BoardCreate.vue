<template>
	<AppCard @click="goPage">
		<h3 class="card-title text-center">오늘의 레시피는 뭔가요?</h3>
	</AppCard>
</template>

<script setup>
import AppCard from '../itemList/AppCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goPage = () => {
	router.push('/board-create');
};
</script>

<style lang="scss" scoped></style>
