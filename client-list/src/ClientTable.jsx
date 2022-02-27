import React from "react";
import ClientRow from "./ClientRow";

class ClientTable extends React.Component {
    render() {
        return (
            <table className="table table-striped table-dark table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th> 
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Address 2</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Zip</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.clients.map((client) => (
                        <ClientRow 
                            key={client.id}
                            id={client.id} 
                            name={client.name} 
                            phone={client.phone} 
                            email={client.email} 
                            address1={client.address1} 
                            address2={client.address2} 
                            city={client.city} 
                            state={client.state} 
                            zip={client.zip} 
                            handleShowClientDeleteModal={this.props.handleShowClientDeleteModal}
                        />    
                    ))}
                </tbody>
            </table>
        );
    }
}

export default ClientTable;