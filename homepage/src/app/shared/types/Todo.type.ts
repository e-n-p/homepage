export interface Todo {
    id: number,
    name: string,
    description: string,
    due: string,
    priority: number
}

export interface UpdatePriority {
    id: number,
    priority: number
}