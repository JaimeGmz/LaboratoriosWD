import React, { useState, useEffect } from 'react';
import { getClientes, deleteCliente } from '../services/api';
import ClienteItem from './ClienteItem';
import ClienteForm from './ClienteForm';

const ClienteList = () => {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editingId, setEditingId] = useState(null);

    const fetchClientes = async () => {
        setLoading(true);
        try {
            const data = await getClientes();
            setClientes(data);
            setError(null);
        } catch (err) {
            setError('Error al cargar los clientes');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClientes();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este cliente?')) {
            try {
                await deleteCliente(id);
                setClientes(clientes.filter(cliente => cliente.id !== id));
            } catch (err) {
                setError('Error al eliminar el cliente');
            }
        }
    };

    const handleEdit = (id) => {
        setEditingId(id);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
    };

    const handleFormSubmit = () => {
        fetchClientes();
        setEditingId(null);
    };

    if (loading) return <div>Cargando clientes...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="country-list">
            <h2>Lista de Clientes</h2>

            {!editingId && (
                <div className="new-country">
                    <h3>Agregar Nuevo Cliente</h3>
                    <ClienteForm onSubmitSuccess={handleFormSubmit} />
                </div>
            )}

            <div className="countries">
                {clientes.length === 0 ? (
                    <p>No hay clientes registrados.</p>
                ) : (
                    <table className="countries-table">
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Empresa</th>
                                <th>Sector</th>
                                <th>Contacto</th>
                                <th>Teléfono</th>
                                <th>Correo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map(cliente => (
                                editingId === cliente.id ? (
                                    <tr key={cliente.id}>
                                        <td colSpan="7">
                                            <div className="edit-form">
                                                <h3>Editar Cliente</h3>
                                                <ClienteForm
                                                    cliente={cliente}
                                                    onSubmitSuccess={handleFormSubmit}
                                                    onCancel={handleCancelEdit}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    <ClienteItem
                                        key={cliente.id}
                                        cliente={cliente}
                                        onDelete={() => handleDelete(cliente.id)}
                                        onEdit={() => handleEdit(cliente.id)}
                                    />
                                )
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ClienteList;