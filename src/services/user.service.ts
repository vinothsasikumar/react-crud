import axios from "axios"
import type { User } from "../models/user.model";

export const getUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
};

export const createUser = async (data: User) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', data);
    return response.data;
};

export const updateUser = async (userId: string, data: User) => {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, data);
    return response.data;
};

export const deleteUsers = async (userId: string) => {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
};