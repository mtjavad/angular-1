import {Task} from './task';

export class Project {
    id;
    title;
    tasks: Task[] = [];

    constructor(id, title, ) {
        this.id = id;
        this.title = title;
        // this.tasks = tasks;
    }
}