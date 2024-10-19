import { writable } from 'svelte/store';
import type { IToast, ToastType } from '../utils/interfaces';

export const toasts = writable<IToast[]>([]);

export const addToast = (newToast: { type?: ToastType; msg: string }) => {
	// Create a unique ID so we can easily find/remove it
	// if it is dismissible/has a timeout.
	const id = Math.floor(Math.random() * 10000);
	const DEFAULT_TYPE = 'info';

	// Push the toast to the top of the list of toasts
	toasts.update((all) => [{ id, type: DEFAULT_TYPE, ...newToast }, ...all]);

	// Remove toast after 300ms
	setTimeout(() => dismissToast(id), 3000);
};

export const dismissToast = (id: number) => {
	toasts.update((all) => all.filter((t) => t.id !== id));
};
