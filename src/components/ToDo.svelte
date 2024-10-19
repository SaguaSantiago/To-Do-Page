<script lang="ts">
	import { addToast } from '../stores/Toast';
	import { fade } from 'svelte/transition';
	import { removeToDo, setToDoDone, setToDoProcess } from '../stores/ToDos';
	import Done from './Svg/Done.svelte';
	import DoneRestore from './Svg/DoneRestore.svelte';
	import UnRemove from './Svg/UnRemove.svelte';
	import Remove from './Svg/Remove.svelte';
	export let title: string;
	export let id: number;
	export let status;
</script>

<article
	in:fade
	class="w-full rounded-lg max-w-[650px] border bg-slate-100 min-w-[300px] h-11 flex items-center px-3"
>
	<h2 class="text-slate-700">{title}</h2>
	<div class="ml-auto flex gap-1">
		<button
			on:click={() => {
				if (status !== 'done') {
					addToast({ type: 'success', msg: `To Do: "${title}" done` });
					setToDoDone(id);
				} else {
					addToast({ type: 'info', msg: `To Do: "${title}" restored` });
					setToDoProcess(id);
				}
			}}
			class="hover:border-slate-400 active:border-slate-700 hover:cursor-pointer w-9 h-9 border rounded-3xl
        		border-slate-600 flex items-center justify-center ml-auto transition-all duration-200"
		>
			{#if status !== 'done'}
				<Done />
			{:else}
				<DoneRestore />
			{/if}
		</button>
		<button
			on:click={() => {
				if (status !== 'removed') {
					removeToDo(id);
					addToast({ type: 'error', msg: `To Do: "${title}" removed` });
				} else {
					setToDoProcess(id);
					addToast({ type: 'info', msg: `To Do: "${title}" restored` });
				}
			}}
			class="hover:border-slate-400 active:border-slate-700 hover:cursor-pointer w-9 h-9 border rounded-3xl
        		border-slate-600 flex items-center justify-center ml-auto transition-all duration-200"
		>
			{#if status === 'removed'}
				<UnRemove />
			{:else}
				<Remove />
			{/if}
		</button>
	</div>
</article>
