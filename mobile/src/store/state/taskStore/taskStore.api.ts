import { API_URL } from '../../../utils/api';
import HttpClient from '../../../utils/http-client';
import { CreateTaskModel, TaskModel } from './models/models';

export const getTasksApi = async () => {
    console.log('getTasksApi', `${API_URL}/tasks`)
    return await HttpClient.get(`${API_URL}/tasks`);
};

export const updateTasksApi = async (id: string, model: TaskModel) => {
    console.log('updateTasksApi', `${API_URL}/tasks/${id}`)
    return await HttpClient.put(`${API_URL}/tasks/${id}`, model);
};

export const createTaskApi = async (model: CreateTaskModel) => {
    console.log('createTaskApi', `${API_URL}/tasks`, model)
    return await HttpClient.post(`${API_URL}/tasks`, model);
};

export const deleteTaskApi = async (id: string) => {
    console.log('deleteTaskApi', `${API_URL}/tasks/${id}`)
    return await HttpClient.delete(`${API_URL}/tasks/${id}`);
};