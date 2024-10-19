<script lang="ts">
	import { addToast } from '../stores/Toast';
	import { addToDo } from '../stores/ToDos';
	import AddSvg from './Svg/AddSvg.svelte';
	import ToDoPage from './Svg/ToDo-page.svelte';
	let inputValue = '';

	const handleChange = (e: Event) => {
		const inputElement = e.target as HTMLInputElement;
		inputValue = inputElement.value;
	};

	const handleSubmit = (e: Event) => {
		addToast({ type: 'info', msg: `To Do "${inputValue}" added` });
		addToDo({ title: inputValue });
		inputValue = '';
	};
</script>

<h1 class="text-4xl font-bold mb-3 flex items-center">
	<ToDoPage width="80" height="80" /> TO DO
</h1>

<header
	class="flex p-1 px-2 items-center min-w-[320px] w-1/3 max-w-[700px] h-12 rounded-3xl border border-slate-400 border-opacity-45"
>
	<form class="w-full h-full flex" on:submit={handleSubmit} action="">
		<input
			bind:value={inputValue}
			on:input={handleChange}
			maxlength="33"
			placeholder="i.e: i have to..."
			class="outline-none appearance-none h-full w-3/4 rounded-3xl px-3 border border-slate-500 focus:border-slate-600
        focus:border-2 bg-slate-50 transition-all"
			type="text"
		/>
		<button
			type="submit"
			disabled={inputValue == ''}
			class="hover:border-slate-400 active:border-slate-700 hover:cursor-pointer w-9 h-9 border rounded-3xl
        border-slate-600 flex items-center justify-center ml-auto transition-all duration-200"
		>
			<AddSvg />
		</button>
	</form>
</header>
