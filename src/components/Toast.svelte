<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import CloseSvg from './Svg/CloseSvg.svelte';
	import InfoToast from './Svg/InfoToast.svelte';
	import ErrorToast from './Svg/ErrorToast.svelte';
	import SuccessToast from './Svg/SuccessToast.svelte';
	import { type ToastType } from '../utils/interfaces';

	const dispatch = createEventDispatcher();

	const iconList = {
		info: InfoToast,
		error: ErrorToast,
		success: SuccessToast
	};
	export let type: ToastType = 'info';
	let Icon = iconList[type];
</script>

<article class={type} role="alert" transition:fade>
	<Icon></Icon>
	<div class="text">
		<slot />
	</div>

	<button class="close" on:click={() => dispatch('dismiss')}>
		<CloseSvg />
	</button>
</article>

<style lang="postcss">
	article {
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 0.2rem;
		display: flex;
		align-items: center;
		margin: 0 auto 0.5rem auto;
		width: 100%;
		min-width: 320px;
		max-width: 400px;
	}
	.error {
		background: IndianRed;
	}
	.success {
		background: MediumSeaGreen;
	}
	.info {
		background: rgb(38, 176, 231);
	}
	.text {
		margin-left: 1rem;
	}
	button {
		color: white;
		background: transparent;
		border: 0 none;
		padding: 0;
		margin: 0 0 0 auto;
		line-height: 1;
		font-size: 1rem;
	}
</style>
