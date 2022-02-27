import React from "react";
import ClientAddEditModal from "./ClientAddEditModal";
import ClientDeleteModal from "./ClientDeleteModal";
import ClientTable from "./ClientTable";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            showClientDeleteModal: false,
            deleteClientId: "",
            clients: [
                {
                    id: "1",
                    name: "Christopher Washington",
                    phone: "503-807-5522",
                    email: "cdwetal@gmail.com",
                    address1: "3602 Kellett St",
                    address2: "",
                    city: "Claremont",
                    state: "California",
                    zip: "91711"
                },
                {
                    id: "2",
                    name: "Christopher Washington",
                    phone: "503-807-5522",
                    email: "cdwetal@gmail.com",
                    address1: "3602 Kellett St",
                    address2: "",
                    city: "Claremont",
                    state: "California",
                    zip: "91711"
                },
                {
                    id: "3",
                    name: "Christopher Washington",
                    phone: "503-807-5522",
                    email: "cdwetal@gmail.com",
                    address1: "3602 Kellett St",
                    address2: "",
                    city: "Claremont",
                    state: "California",
                    zip: "91711"
                },
                {
                    id: "4", 
                    name: "Christopher Washington",
                    phone: "503-807-5522",
                    email: "cdwetal@gmail.com",
                    address1: "3602 Kellett St",
                    address2: "",
                    city: "Claremont",
                    state: "California",
                    zip: "91711"
                }
            ]
        };
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
        for(var i = 0; i < newState.clients.length; i++) {
            if (newState.clients[i].id === id) {
                newState.clients.splice(i, 1);
            }
        } 
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <ClientAddEditModal />
                
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
                                />
                                    
                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <button
                                            className="btn btn-primary btn-sm"
                                            data-toggle="modal"
                                            data-target="#addEdit"
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
