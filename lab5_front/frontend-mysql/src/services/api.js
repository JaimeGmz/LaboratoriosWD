import axios from 'axios';

const API_URL = 'http://localhost:5000/api/clientes';

export const getClientes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los clientes:', error);
        throw error;
    }
};

export const getCliente = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el cliente:', error);
        throw error;
    }
};

export const createCliente = async (cliente) => {
    try {
        const response = await axios.post(API_URL, cliente);
        return response.data;
    } catch (error) {
        console.error('Error al crear el cliente:', error);
        throw error;
    }
};

export const updateCliente = async (id, cliente) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, cliente);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el cliente:', error);
        throw error;
    }
};

export const deleteCliente = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el cliente:', error);
        throw error;
    }
};