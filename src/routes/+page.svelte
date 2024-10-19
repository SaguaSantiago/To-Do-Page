<script>
	import ToDo from '../components/ToDo.svelte';
	import { ToDos } from '../stores/ToDos';
	let filter = 'process';
</script>

<svelte:head>
	<title>TO-DO Page</title>
	<meta name="description" content="Svelte To Do App" />
</svelte:head>

<section class="w-screen flex items-center flex-col gap-2">
	<div class="flex gap-2">
		<button
			class={filter === 'process' ? 'after:w-full' : 'after:w-[0px]'}
			on:click={() => (filter = 'process')}>Process</button
		>
		<button
			class={filter === 'done' ? 'after:w-full' : 'after:w-[0px]'}
			on:click={() => (filter = 'done')}>Done</button
		>
		<button
			class={filter === 'removed' ? 'after:w-full' : 'after:w-[0px]'}
			on:click={() => (filter = 'removed')}>Removed</button
		>
	</div>
	{#each $ToDos as Todo (Todo.id)}
		{#if Todo.status == filter}
			<ToDo title={Todo.title} id={Todo.id} status={Todo.status} />
		{/if}
	{/each}
</section>

<style>
	button {
		transition:
			color 0.2s,
			border-color 0.15s;
		position: relative;
		cursor: pointer;
	}
	button::after {
		content: '';
		position: absolute;
		height: 100%;
		left: 0;
		border-bottom: 2px solid;
		transform-origin: left;
		/* scale: 0; */
		transition: width 0.3s ease;
	}

	button:hover::after {
		width: 100%;
	}
</style>
