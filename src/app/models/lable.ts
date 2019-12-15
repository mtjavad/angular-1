import {Task} from './task';

export class Lable {
    id;
    title;
    tasks: Task[] = [];
    color;

    constructor(id, title, color, ) {
        this.id = id;
        this.title = title;
        this.color = color;
        // this.tasks = tasks;
    }
}