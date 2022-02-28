import React from "react";
import ClientAddEditModal from "./ClientAddEditModal";
import ClientDeleteModal from "./ClientDeleteModal";
import ClientTable from "./ClientTable";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            showClientDeleteModal: false,
            showClientAddEditModal: false,
            editClient: {
                id: "",
                name: "",
                phone: "",
                email: "",
                address1: "",
                aderess2: "",
                city: "",
                state: "",
                zip: ""
            },
            deleteClientId: "",
            clients: []
        };
    }

    componentDidMount() {
        this.readClients();
    }

    createClient = (client) => {
        fetch(
            "https://tradr-functions.azurewebsites.net/api/AddressBookCreate",
            {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(client)
            });
    }

    readClients = () => {
        fetch(
            "https://tradr-functions.azurewebsites.net/api/AddressBookRead",
            {
                "method": "GET",
                "headers": {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(
                (result) => {
                    var newState = this.state;
                    newState.clients = result;
                    this.setState(result);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    updateClient = (client) => {
        fetch(
            "https://tradr-functions.azurewebsites.net/api/AddressBookUpdate",
            {
                "method": "PUT",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(client)
            });
    }

    deleteClient = (id) => {
        fetch(
            "https://tradr-functions.azurewebsites.net/api/AddressBookDelete?id=" + id,
            {
                "method": "DELETE",
                "headers": {
                    "Content-Type": "application/json"
                }
            });
    }
    
    handleShowClientDeleteModal = (id) => {   
        var newState = this.state;
        newState.showClientDeleteModal = true;
        newState.deleteClientId = id;
        this.setState(newState);
    }

    handleCloseClientDeleteModal = () => {
        var newState = this.state;
        newState.showClientDeleteModal = false;
        this.setState(newState);
    }

    handleDeleteClientDeleteModal = (id) => {
        var newState = this.state;
        newState.showClientDeleteModal = false;
        this.deleteClient(id);
        this.setState(newState);
        this.readClients();
    }
   
    handleShowClientAddEditModal = (client) => {
        var newState = this.state;
        newState.showClientAddEditModal = true;
        newState.editClient = client;
        this.setState(newState);
    }

    handleCloseClientAddEditModal = () => {
        var newState = this.state;
        newState.showClientAddEditModal = false;
        this.setState(newState);
    }
    
    handleSaveClientAddEditModal = (client) => {
        var newState = this.state;
        newState.showClientAddEditModal = false;
        if (client.id === "") {
            this.createClient(
                {
                    name: client.name,
                    phone: client.phone,
                    email: client.email,
                    address1: client.address1,
                    address2: client.address2,
                    city: client.city,
                    state: client.state,
                    zip: client.zip,
                }
            );
        } else {
            this.updateClient(client);
        }
        this.setState(newState);
        this.readClients();
    }

    handleAdd = () => {
        this.handleShowClientAddEditModal(
            {
                id: "",
                name: "",
                phone: "",
                email: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                zip: ""
            }
        );
    }

    render() {
        return (
            <div>
                 {
                    this.state.showClientAddEditModal
                    ?
                    <ClientAddEditModal 
                        client={this.state.editClient}
                        handleCloseClientAddEditModal={this.handleCloseClientAddEditModal}
                        handleSaveClientAddEditModal={this.handleSaveClientAddEditModal}
                    />
                    :
                    null
                }
                  
                {
                    this.state.showClientDeleteModal
                    ?
                    <ClientDeleteModal 
                        id={this.state.deleteClientId}
                        handleCloseClientDeleteModal={this.handleCloseClientDeleteModal}
                        handleDeleteClientDeleteModal={this.handleDeleteClientDeleteModal}
                    />
                    :
                    null
                }

                <div className="container">
                    <div className="jumbtron">
                        <div className="card">
                            <div className="card-header">Client List</div>
                            <div className="card-body">
                                <h5 className="card-title">Display Database Content</h5>

                                <ClientTable 
                                    clients={this.state.clients}
                                    handleShowClientDeleteModal={this.handleShowClientDeleteModal}
                                    handleShowClientAddEditModal={this.handleShowClientAddEditModal}
                                />

                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={this.handleAdd}
                                        >                                            
                                        Add New
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
