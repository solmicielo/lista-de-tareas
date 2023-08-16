export enum Levels {
    "Info",
    "urgent",
    "Blocking"
}


export interface ITask {
    title: string;
    description: string;
    completed: boolean;
    level: Levels;
}