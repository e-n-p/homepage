export interface Todo {
    id: string,
    name: string,
    description: string,
    due: Date,
}

export interface Tracks {
    id: string,
    intensity: number,
    pattern : string,
    colour: Array<Array<number>>,
}
