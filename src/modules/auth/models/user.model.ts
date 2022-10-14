export type Status = 'authenticated' | 'not-authenticated' | 'checking';

export interface User {
	id: string;
	name: string;
}

export interface Credentials {
	email: string;
	password: string;
}
