import React from "react";

class ClientRow extends React.Component {
    render() {
        return (
            <tr>
                <th scope="row">1</th>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td> 
                <td>{this.props.email}</td>
                <td>{this.props.address1}</td>
                <td>{this.props.address2}</td>
                <td>{this.props.city}</td>
                <td>{this.props.state}</td>
                <td>{this.props.zip}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        data-toggle="modal"
                        data-target="#addEdit"
                        style={{ width: "60px" }}
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        data-toggle="modal"
                        data-target="#delete"
                        style={{ width: "60px" }}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default ClientRow;