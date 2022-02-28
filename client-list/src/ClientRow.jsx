import React from "react";

class ClientRow extends React.Component {
    handleShowDelete= () => {
        this.props.handleShowClientDeleteModal(this.props.id);
    }
    //added
    handleShowEdit = () => {
        this.props.handleShowClientAddEditModal(
            {
                id: this.props.id,
                name: this.props.name,
                phone: this.props.phone,
                email: this.props.email,
                address1: this.props.address1,
                address2: this.props.address2,
                city: this.props.city,
                state: this.props.state,
                zip: this.props.zip
            }
        ); 
    }

    render() {
        return (
            <tr>
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
                        style={{ width: "60px" }}
                        onClick={this.handleShowEdit}
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        style={{ width: "60px" }}
                        onClick={this.handleShowDelete}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default ClientRow;