export type TaskModel = {
    _id: string;
    title: string;
    description: string;
    isImportant: boolean;
    isCompleted: boolean;
};

export type CreateTaskModel = {
    title: string;
    description: string;
    isImportant: boolean;
    isCompleted: boolean;
};
