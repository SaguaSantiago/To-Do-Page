<script>
	import '../app.css';
	import Header from '../components/header.svelte';
	import Toasts from '../components/Toasts.svelte';
</script>

<div class="app">
	<Toasts />
	<Header></Header>
	<main>
		<slot />
	</main>

	<footer></footer>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&display=swap');
	.app {
		display: flex;
		gap: 20px;
		flex-direction: column;
		font-family:
			'Afacad Flux',
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
		align-items: center;
		min-height: 100dvh;
		padding-top: 20px;
	}

	:global(.app) {
		overflow-x: hidden;
	}
</style>
