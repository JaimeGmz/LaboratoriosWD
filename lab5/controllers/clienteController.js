const pool = require('../db');

// Obtener todos los clientes
exports.getAllClientes = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM clientes ORDER BY nombreCliente ASC'
        );
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener los clientes:', error);
        res.status(500).json({ error: 'Error al obtener los clientes' });
    }
};

// Obtener un cliente por ID
exports.getClienteById = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM clientes WHERE id = ?',
            [req.params.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        res.json(rows[0]);
    } catch (error) {
        console.error('Error al obtener el cliente:', error);
        res.status(500).json({ error: 'Error al obtener el cliente' });
    }
};

// Crear cliente
exports.createCliente = async (req, res) => {
    const { nombreCliente, empresa, sector, contacto, telefono, correo } = req.body;

    if (!nombreCliente) {
        return res.status(400).json({ error: 'El nombre del cliente es obligatorio' });
    }

    try {
        const [result] = await pool.query(
            `INSERT INTO clientes (nombreCliente, empresa, sector, contacto, telefono, correo)
             VALUES (?, ?, ?, ?, ?, ?)`,
            [
                nombreCliente,
                empresa || null,
                sector || null,
                contacto || null,
                telefono || null,
                correo || null
            ]
        );

        const [rows] = await pool.query(
            'SELECT * FROM clientes WHERE id = ?',
            [result.insertId]
        );

        res.status(201).json(rows[0]);
    } catch (error) {
        console.error('Error al crear el cliente:', error);
        res.status(500).json({ error: 'Error al crear el cliente' });
    }
};

// Actualizar cliente
exports.updateCliente = async (req, res) => {
    const { nombreCliente, empresa, sector, contacto, telefono, correo } = req.body;
    const clienteId = req.params.id;

    if (!nombreCliente) {
        return res.status(400).json({ error: 'El nombre del cliente es obligatorio' });
    }

    try {
        const [existing] = await pool.query(
            'SELECT * FROM clientes WHERE id = ?',
            [clienteId]
        );

        if (existing.length === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        await pool.query(
            `UPDATE clientes
             SET nombreCliente = ?, empresa = ?, sector = ?, contacto = ?, telefono = ?, correo = ?
             WHERE id = ?`,
            [
                nombreCliente,
                empresa || null,
                sector || null,
                contacto || null,
                telefono || null,
                correo || null,
                clienteId
            ]
        );

        const [updatedRows] = await pool.query(
            'SELECT * FROM clientes WHERE id = ?',
            [clienteId]
        );

        res.json(updatedRows[0]);
    } catch (error) {
        console.error('Error al actualizar el cliente:', error);
        res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
};

// Eliminar cliente
exports.deleteCliente = async (req, res) => {
    const clienteId = req.params.id;

    try {
        const [existing] = await pool.query(
            'SELECT * FROM clientes WHERE id = ?',
            [clienteId]
        );

        if (existing.length === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        await pool.query('DELETE FROM clientes WHERE id = ?', [clienteId]);

        res.json({ message: 'Cliente eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar el cliente:', error);
        res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
};