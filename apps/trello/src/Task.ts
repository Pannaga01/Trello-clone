export interface Task{
    taskName: string;
    deadline: Date;
}

export interface List{
    title: string;
    tasks: Task[];
}