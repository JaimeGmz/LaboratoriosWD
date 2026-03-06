import React from 'react';

const ClienteItem = ({ cliente, onDelete, onEdit }) => {
    return (
        <tr>
            <td>{cliente.nombreCliente}</td>
            <td>{cliente.empresa || 'No especificada'}</td>
            <td>{cliente.sector || 'No especificado'}</td>
            <td>{cliente.contacto || 'No especificado'}</td>
            <td>{cliente.telefono || 'No especificado'}</td>
            <td>{cliente.correo || 'No especificado'}</td>
            <td className="actions">
                <button onClick={onEdit} className="edit-btn">Editar</button>
                <button onClick={onDelete} className="delete-btn">Eliminar</button>
            </td>
        </tr>
    );
};

export default ClienteItem;