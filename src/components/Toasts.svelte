<script lang="ts">
	import { dismissToast, toasts } from '../stores/Toast';
	import Toast from './Toast.svelte';
</script>

{#if $toasts}
	<section>
		{#each $toasts as toast (toast.id)}
			<Toast type={toast.type} on:dismiss={() => dismissToast(toast.id)}>{toast.msg}</Toast>
		{/each}
	</section>
{/if}

<style lang="postcss">
	section {
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		max-width: 400px;
		display: flex;
		margin-top: 1rem;
		justify-content: center;
		flex-direction: column;
		z-index: 1000;
	}
</style>
