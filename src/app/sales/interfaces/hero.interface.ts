export enum Color {
    red, green, blue, black
}

export interface Hero {
    name: string;
    fly: boolean;
    color: Color;
}