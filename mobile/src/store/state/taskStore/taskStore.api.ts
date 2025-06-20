import { API_URL } from '../../../utils/api';
import HttpClient from '../../../utils/http-client';
import { CreateTaskModel, TaskModel } from './models/models';

export const getTasksApi = async () => {
    return await HttpClient.get(`${API_URL}/tasks`);
};

export const updateTasksApi = async (id: string, model: TaskModel) => {
    return await HttpClient.put(`${API_URL}/tasks/${id}`, model);
};

export const createTaskApi = async (model: CreateTaskModel) => {
    return await HttpClient.post(`${API_URL}/tasks`, model);
};

export const deleteTaskApi = async (id: string) => {
    return await HttpClient.delete(`${API_URL}/tasks/${id}`);
};