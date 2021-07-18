export interface Todo {
    id: string,
    name: string,
    description: string,
    due: Date,
}

export interface Track {
    id: string,
    intensity: number,
    pattern : string,
    colour: Array<Array<number>>,
}
