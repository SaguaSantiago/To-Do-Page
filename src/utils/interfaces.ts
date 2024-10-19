// toast store interfaces:

export interface IToast {
	msg: string;
	id: number;
	type: ToastType;
}

export type ToastType = 'info' | 'error' | 'success';

// to do store interfaces:

export interface IToDo {
	title: string;
	id: number;
	status: StatusEnum;
}

export enum StatusEnum {
	process = 'process',
	removed = 'removed',
	done = 'done'
}
