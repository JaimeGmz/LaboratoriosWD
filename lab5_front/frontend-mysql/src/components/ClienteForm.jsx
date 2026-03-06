import React, { useState, useEffect } from 'react';
import { createCliente, updateCliente } from '../services/api.js';

const ClienteForm = ({ cliente, onSubmitSuccess, onCancel }) => {
    const [formData, setFormData] = useState({
        nombreCliente: '',
        empresa: '',
        sector: '',
        contacto: '',
        telefono: '',
        correo: ''
    });

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (cliente) {
            setFormData({
                nombreCliente: cliente.nombreCliente || '',
                empresa: cliente.empresa || '',
                sector: cliente.sector || '',
                contacto: cliente.contacto || '',
                telefono: cliente.telefono || '',
                correo: cliente.correo || ''
            });
        }
    }, [cliente]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.nombreCliente.trim()) {
            setError('El nombre del cliente es obligatorio');
            return;
        }

        setSubmitting(true);
        setError(null);

        try {
            if (cliente) {
                await updateCliente(cliente.id, formData);
            } else {
                await createCliente(formData);
            }

            setFormData({
                nombreCliente: '',
                empresa: '',
                sector: '',
                contacto: '',
                telefono: '',
                correo: ''
            });

            if (onSubmitSuccess) onSubmitSuccess();
        } catch (err) {
            setError('Error al guardar el cliente');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="country-form">
            {error && <div className="error">{error}</div>}

            <div className="form-group">
                <label htmlFor="nombreCliente">Nombre del cliente*:</label>
                <input
                    type="text"
                    id="nombreCliente"
                    name="nombreCliente"
                    value={formData.nombreCliente}
                    onChange={handleChange}
                    disabled={submitting}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="empresa">Empresa:</label>
                <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    disabled={submitting}
                />
            </div>

            <div className="form-group">
                <label htmlFor="sector">Sector:</label>
                <input
                    type="text"
                    id="sector"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    disabled={submitting}
                />
            </div>

            <div className="form-group">
                <label htmlFor="contacto">Contacto:</label>
                <input
                    type="text"
                    id="contacto"
                    name="contacto"
                    value={formData.contacto}
                    onChange={handleChange}
                    disabled={submitting}
                />
            </div>

            <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input
                    type="text"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    disabled={submitting}
                />
            </div>

            <div className="form-group">
                <label htmlFor="correo">Correo:</label>
                <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    disabled={submitting}
                />
            </div>

            <div className="form-actions">
                <button type="submit" disabled={submitting}>
                    {submitting ? 'Guardando...' : cliente ? 'Actualizar' : 'Crear'}
                </button>

                {onCancel && (
                    <button type="button" onClick={onCancel} disabled={submitting}>
                        Cancelar
                    </button>
                )}
            </div>
        </form>
    );
};

export default ClienteForm;