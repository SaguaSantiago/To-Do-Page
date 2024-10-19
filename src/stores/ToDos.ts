import { writable } from 'svelte/store';
import { StatusEnum, type IToDo } from '../utils/interfaces';

export const ToDos = writable<IToDo[]>([]);

export const addToDo = (newToDo: { title: string }) => {
	// Create a unique ID so we can easily find/remove it
	const id = Math.floor(Math.random() * 10000);
	const DEFAULT = {
		id,
		status: StatusEnum.process
	};

	// Push the To do to the top of the list of To Dos
	ToDos.update((all) => {
		return [{ ...DEFAULT, ...newToDo }, ...all];
	});
};

// change status and set it to 'delete'
export const removeToDo = (id: number) => {
	ToDos.update((all) => setStatus(StatusEnum.removed, id, all));
};

// change status and set it to 'done'
export const setToDoDone = (id: number) => {
	ToDos.update((all) => setStatus(StatusEnum.done, id, all));
};

// restore the status to 'process'
export const setToDoProcess = (id: number) => {
	ToDos.update((all) => setStatus(StatusEnum.process, id, all));
};

// find the pending ToDo to change and its index.
// change its status

// TODO: change the function so that it does not mutate the 'all' array
const setStatus = (status: StatusEnum, id: number, all: IToDo[]) => {
	let index: number = 0;
	let oldToDo = all.find((t, i) => {
		if (t.id === id) index = i;
		return t.id === id;
	});
	if (oldToDo) all[index] = { ...oldToDo, status };
	console.log(all);
	return all;
};
