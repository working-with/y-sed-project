export interface Experiment {
	id: number;
	code: string;
	image: string[];
	answerType: string;
	booleanAnswer?: BooleanAnswer;
	scaleAnswer?: number;
}

enum BooleanAnswer {
	'O' = 0,
	'X' = 1,
}

// interface Experiment {
// 	id: number (auto)
// 	code: string (ex. “G_0123”)
// 	image: Array<Image>
// 	answerType: string ( “boolean”, “scale” )
// 	booleanAnswer?: enum (O:0, X:1)
// 	scaleAnswer?: number (1~4)
// }
