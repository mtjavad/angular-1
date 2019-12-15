import {ProjectService} from '../services/project.service';

export class Task {
    id;
    title;
    project;
    lables;
    deadline;
    priority;

    constructor(id, title, project, labels, deadline, priority) {
        this.id = id;
        this.title = title;
        this.project = project;
        this.lables = labels;
        this.deadline = deadline;
        this.priority = priority;
    }
}