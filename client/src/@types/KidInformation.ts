export interface KidInformation {
	id: number;
	code: string;
	name: string;
	gender: Gender;
	experiment: string[];
}

enum Gender {
	'F' = 0,
	'M' = 1,
}
