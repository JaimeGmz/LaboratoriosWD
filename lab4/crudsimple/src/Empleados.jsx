import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table, Button, Container, FormGroup,
    Modal, ModalHeader, ModalBody, ModalFooter,
} from "reactstrap";
const data = [
    { id: 1, nombre: "Juan Alberto", empresa: "Accenture", edad: "29", rol: "Analista", correo: "jorge.carranza@accenture.com" },
    { id: 2, nombre: "Alejandro Belez", empresa: "Accenture", edad: "35", rol: "Gerente", correo: "ramon.velez@accenture.com" },
    { id: 3, nombre: "Carlos Iturbide ", empresa: "Accenture", edad: "28", rol: "Tecnico", correo: "hugo.sanchez@accenture.com" },
    { id: 4, nombre: "Rafael Marquez", empresa: "Accenture", edad: "32", rol: "Analista", correo: "rafael.marquez@accenture.com" },
    { id: 5, nombre: "Carlos Alcaraz", empresa: "Accenture", edad: "26", rol: "Desarrollador", correo: "carlos.alcaraz@accenture.com" },
    { id: 6, nombre: "N.Djokovic", empresa: "Accenture", edad: "34", rol: "Tecnico", correo: "n.djokovic@accenture.com" },
    { id: 7, nombre: "Sergio Perez", empresa: "Accenture", edad: "40", rol: "Gerente", correo: "sergio.perez@accenture.com" },
    { id: 8, nombre: "Max Verstapen", empresa: "Accenture", edad: "25", rol: "Vendedor", correo: "max.verstapen@accenture.com" },
    { id: 9, nombre: "Carlos Sainz", empresa: "Accenture", edad: "28", rol: "Lider", correo: "carlos.sainz@accenture.com" },
];

class Empleados extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            nombre: "",
            empresa: "",
            edad: "",
            rol: "",
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
                arreglo[contador].nombre = dato.nombre;
                arreglo[contador].empresa = dato.empresa;
                arreglo[contador].edad = dato.edad;
                arreglo[contador].rol = dato.rol;
                arreglo[contador].correo = dato.correo;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };
    eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
        if (opcion === true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.id === registro.id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
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
    }
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
                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
                    <br />
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Empresa</th>
                                <th>Edad</th>
                                <th>Rol</th>
                                <th>Correo</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.nombre}</td>
                                    <td>{dato.empresa}</td>
                                    <td>{dato.edad}</td>
                                    <td>{dato.rol}</td>
                                    <td>{dato.correo}</td>
                                    <td>
                                        <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)} >Editar
                                        </Button>{" "}
                                        <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>

                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>
                        <div><h3>Editar Registro</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label> Id:</label>
                            <input className="form-control" readOnly type="text" value={this.state.form.id} />
                        </FormGroup>
                        <FormGroup>
                            <label>Nombre:</label>
                            <input className="form-control" name="nombre" type="text"
                                onChange={this.handleChange} value={this.state.form.nombre} />
                        </FormGroup>
                        <FormGroup>
                            <label>Empresa:</label>
                            <input className="form-control" name="empresa" type="text"
                                onChange={this.handleChange} value={this.state.form.empresa} />
                        </FormGroup>
                        <FormGroup>
                            <label>Edad:</label>
                            <input className="form-control" name="edad" type="text"
                                onChange={this.handleChange} value={this.state.form.edad} />
                        </FormGroup>
                        <FormGroup>
                            <label>Rol:</label>
                            <input className="form-control" name="rol" type="text"
                                onChange={this.handleChange} value={this.state.form.rol} />
                        </FormGroup>
                        <FormGroup>
                            <label>Correo:</label>
                            <input className="form-control" name="correo" type="text"
                                onChange={this.handleChange} value={this.state.form.correo} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editar(this.state.form)} >
                            Editar</Button>
                        <Button color="danger" onClick={() => this.cerrarModalActualizar()} >
                            Cancelar</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar nombre</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Id: </label>
                            <input className="form-control" readOnly type="text" value={this.state.data.length + 1} />
                        </FormGroup>
                        <FormGroup>
                            <label>Nombre: </label>
                            <input className="form-control" name="nombre" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Empresa: </label>
                            <input className="form-control" name="empresa" type="text" onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Edad: </label>
                            <input className="form-control" name="edad" type="text" onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Rol: </label>
                            <input className="form-control" name="rol" type="text" onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Correo: </label>
                            <input className="form-control" name="correo" type="text" onChange={this.handleChange}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.insertar()} >Insertar </Button>
                        <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}
                        >Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}
export default Empleados;
            