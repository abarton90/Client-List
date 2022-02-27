import React from "react";
import ClientAddEditModal from "./ClientAddEditModal";
import ClientDeleteModal from "./ClientDeleteModal";
import ClientTable from "./ClientTable";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
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

    render() {
        return (
            <div>
                <ClientAddEditModal />
                
                <ClientDeleteModal/>

                <div className="container">
                    <div class="jumbtron">
                        <div class="card">
                            <div class="card-header">Client List</div>
                            <div class="card-body">
                                <h5 class="card-title">Display Database Content</h5>

                                <ClientTable 
                                    clients={this.state.clients}
                                />
                                    
                                <div class="row">
                                    <div class="col-md-12 text-right">
                                        <button
                                            class="btn btn-primary btn-sm"
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
