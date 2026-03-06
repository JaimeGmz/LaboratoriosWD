import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table, Button, Container, FormGroup,
    Modal, ModalHeader, ModalBody, ModalFooter,
} from "reactstrap";

const data = [
    { id: 1, nombreCliente: "BBVA México", empresa: "Accenture", sector: "Finanzas", contacto: "Laura Gómez", telefono: "8112345678", correo: "laura.gomez@bbva.com" },
    { id: 2, nombreCliente: "Femsa", empresa: "Accenture", sector: "Retail", contacto: "Carlos Hernández", telefono: "8123456789", correo: "carlos.hernandez@femsa.com" },
    { id: 3, nombreCliente: "Cemex", empresa: "Accenture", sector: "Construcción", contacto: "Mariana Torres", telefono: "8134567890", correo: "mariana.torres@cemex.com" },
    { id: 4, nombreCliente: "Banorte", empresa: "Accenture", sector: "Banca", contacto: "José Martínez", telefono: "8145678901", correo: "jose.martinez@banorte.com" },
    { id: 5, nombreCliente: "Soriana", empresa: "Accenture", sector: "Supermercados", contacto: "Andrea Salinas", telefono: "8156789012", correo: "andrea.salinas@soriana.com" },
    { id: 6, nombreCliente: "Liverpool", empresa: "Accenture", sector: "Retail", contacto: "Roberto Díaz", telefono: "8167890123", correo: "roberto.diaz@liverpool.com" },
    { id: 7, nombreCliente: "Bimbo", empresa: "Accenture", sector: "Alimentos", contacto: "Fernanda Ruiz", telefono: "8178901234", correo: "fernanda.ruiz@bimbo.com" },
    { id: 8, nombreCliente: "Kia México", empresa: "Accenture", sector: "Automotriz", contacto: "Miguel Castro", telefono: "8189012345", correo: "miguel.castro@kia.com" },
    { id: 9, nombreCliente: "Sigma", empresa: "Accenture", sector: "Manufactura", contacto: "Daniela Pérez", telefono: "8190123456", correo: "daniela.perez@sigma.com" },
];

class Clientes extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            nombreCliente: "",
            empresa: "Accenture",
            sector: "",
            contacto: "",
            telefono: "",
            correo: "",
        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
            form: {
                id: "",
                nombreCliente: "",
                empresa: "Accenture",
                sector: "",
                contacto: "",
                telefono: "",
                correo: "",
            },
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.id === registro.id) {
                arreglo[contador].nombreCliente = dato.nombreCliente;
                arreglo[contador].empresa = dato.empresa;
                arreglo[contador].sector = dato.sector;
                arreglo[contador].contacto = dato.contacto;
                arreglo[contador].telefono = dato.telefono;
                arreglo[contador].correo = dato.correo;
            }
            contador++;
            return null;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };

    eliminar = (dato) => {
        var opcion = window.confirm("¿Estás seguro que deseas eliminar el cliente " + dato.id + "?");
        if (opcion === true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.id === registro.id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
                return null;
            });
            this.setState({ data: arreglo, modalActualizar: false });
        }
    };

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    };

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
        return (
            <>
                <Container>
                    <br />
                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>
                        Crear Cliente
                    </Button>
                    <br />
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre del Cliente</th>
                                <th>Empresa</th>
                                <th>Sector</th>
                                <th>Contacto</th>
                                <th>Teléfono</th>
                                <th>Correo</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.nombreCliente}</td>
                                    <td>{dato.empresa}</td>
                                    <td>{dato.sector}</td>
                                    <td>{dato.contacto}</td>
                                    <td>{dato.telefono}</td>
                                    <td>{dato.correo}</td>
                                    <td>
                                        <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)}>
                                            Editar
                                        </Button>{" "}
                                        <Button color="danger" onClick={() => this.eliminar(dato)}>
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>

                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>
                        <div><h3>Editar Cliente</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>ID:</label>
                            <input className="form-control" readOnly type="text" value={this.state.form.id} />
                        </FormGroup>
                        <FormGroup>
                            <label>Nombre del Cliente:</label>
                            <input
                                className="form-control"
                                name="nombreCliente"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.nombreCliente}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Empresa:</label>
                            <input
                                className="form-control"
                                name="empresa"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.empresa}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Sector:</label>
                            <input
                                className="form-control"
                                name="sector"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.sector}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Contacto:</label>
                            <input
                                className="form-control"
                                name="contacto"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.contacto}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Teléfono:</label>
                            <input
                                className="form-control"
                                name="telefono"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.telefono}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Correo:</label>
                            <input
                                className="form-control"
                                name="correo"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.correo}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editar(this.state.form)}>
                            Editar
                        </Button>
                        <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar Cliente</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>ID:</label>
                            <input className="form-control" readOnly type="text" value={this.state.data.length + 1} />
                        </FormGroup>
                        <FormGroup>
                            <label>Nombre del Cliente:</label>
                            <input
                                className="form-control"
                                name="nombreCliente"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Empresa:</label>
                            <input
                                className="form-control"
                                name="empresa"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.empresa}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Sector:</label>
                            <input
                                className="form-control"
                                name="sector"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Contacto:</label>
                            <input
                                className="form-control"
                                name="contacto"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Teléfono:</label>
                            <input
                                className="form-control"
                                name="telefono"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Correo:</label>
                            <input
                                className="form-control"
                                name="correo"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.insertar()}>
                            Insertar
                        </Button>
                        <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default Clientes;