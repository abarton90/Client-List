import React from "react";

class ClientDeleteModal extends React.Component {
    componentDidMount() {
        window.$("#delete").modal("show");
        window.$("#delete").on('hidden.bs.modal', this.props.handleCloseClientDeleteModal);
    }

    handleDelete = () => {
        window.$("#delete").modal("hide");
        this.props.handleDeleteClientDeleteModal(this.props.id);
    }

    handleClose = () => {
        window.$("#delete").modal("hide");
        this.props.handleCloseClientDeleteModal();
    }

    render() {
        return (
            <div 
                className="modal fade"
                id="delete"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Delete Entry
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={this.handleClose}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete entry?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={this.handleClose}
                            >
                                Close
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-danger" 
                                onClick={this.handleDelete}
                            >

                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientDeleteModal;