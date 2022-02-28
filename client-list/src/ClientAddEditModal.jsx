import React from "react";


class ClientAddEditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.client.id,
            name: this.props.client.name,
            phone: this.props.client.phone,
            email: this.props.client.email,
            address1: this.props.client.address1,
            address2: this.props.client.address2,
            city: this.props.client.city,
            state: this.props.client.state,
            zip: this.props.client.zip
        }
    } 

    componentDidMount() {
        window.$("#addEdit").modal("show");
        window.$("#addEdit").on('hidden.bs.modal', this.props.handleAddEditModal);
    }

    handleNameChange = (event) => {
        var newState = this.state;
        newState.name = event.target.value;
        this.setState(newState);
    }

    handlePhoneChange = (event) => {
        var newState = this.state;
        newState.phone = event.target.value;
        this.setState(newState);
    }

    handleEmailChange = (event) => {
        var newState = this.state;
        newState.email = event.target.value;
        this.setState(newState);
    }

    handleAddress1Change = (event) => {
        var newState = this.state;
        newState.address1 = event.target.value;
        this.setState(newState);
    }

    handleAddress2Change = (event) => {
        var newState = this.state;
        newState.address2 = event.target.value;
        this.setState(newState);
    }

    handleCityChange = (event) => {
        var newState = this.state;
        newState.city = event.target.value;
        this.setState(newState);
    }

    handleStateChange = (event) => {
        var newState = this.state;
        newState.state = event.target.value;
        this.setState(newState);
    }

    handleZipChange = (event) => {
        var newState = this.state;
        newState.zip = event.target.value;
        this.setState(newState);
    }
     
    handleSave = () => {
        window.$("#addEdit").modal("hide");
        this.props.handleSaveClientAddEditModal(
            {
                id: this.state.id,
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                address1: this.state.address1,
                address2: this.state.address2,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip
            }
        );
    }

    handleClose = () => {
        window.$("#addEdit").modal("hide");
        this.props.handleCloseClientAddEditModal();
    }
   
    render() {
        return (
            <div
                className="modal fade"
                id="addEdit"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Add / Edit Client
                            </h5>
                            <button
                                type="button"
                                className="close"
                                aria-label="Close"
                                onClick={this.handleClose}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="addEdit_name"
                                        placeholder="Enter Name"
                                        maxLength="255"
                                        value={this.state.name}
                                        onChange={this.handleNameChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="addEdit_phone"
                                        placeholder="Enter Phone Number"
                                        maxLength="20"
                                        value={this.state.phone}
                                        onChange={this.handlePhoneChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="addEdit_email"
                                        placeholder="Enter Email"
                                        maxLength="100"
                                        value={this.state.email}
                                        onChange={this.handleEmailChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="addEdit_address1"
                                        placeholder="Enter Address"
                                        maxLength="255"
                                        value={this.state.address1}
                                        onChange={this.handleAddress1Change}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Address 2</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="addEdit_address2"
                                        placeholder="Enter Address"
                                        maxLength="255"
                                        value={this.state.address2}
                                        onChange={this.handleAddress2Change}                                        
                                    />
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="addEdit_city"
                                        placeholder="Enter City"
                                        maxLength="100"
                                        value={this.state.city}
                                        onChange={this.handleCityChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>State</label>
                                    <select id="addEdit_state" className="form-control"  value={this.state.state} onChange={this.handleStateChange}>
                                        <option value="">Choose...</option>
                                        <option value="Alabama">Alabama</option>
                                        <option value="Alaska">Alaska</option>
                                        <option value="Arizona">Arizona</option>
                                        <option value="Arkansas">Arkansas</option>
                                        <option value="California">California</option>
                                        <option value="Colorado">Colorado</option>
                                        <option value="Connecticut">Connecticut</option>
                                        <option value="Delaware">Delaware</option>
                                        <option value="District Of Columbia">District Of Columbia</option>
                                        <option value="Florida">Florida</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Hawaii">Hawaii</option>
                                        <option value="Idaho">Idaho</option>
                                        <option value="Illinois">Illinois</option>
                                        <option value="Indiana">Indiana</option>
                                        <option value="Iowa">Iowa</option>
                                        <option value="Kansas">Kansas</option>
                                        <option value="Kentucky">Kentucky</option>
                                        <option value="Louisiana">Louisiana</option>
                                        <option value="Maine">Maine</option>
                                        <option value="Maryland">Maryland</option>
                                        <option value="Massachusetts">Massachusetts</option>
                                        <option value="Michigan">Michigan</option>
                                        <option value="Minnesota">Minnesota</option>
                                        <option value="Mississippi">Mississippi</option>
                                        <option value="Missouri">Missouri</option>
                                        <option value="Montana">Montana</option>
                                        <option value="Nebraska">Nebraska</option>
                                        <option value="Nevada">Nevada</option>
                                        <option value="New Hampshire">New Hampshire</option>
                                        <option value="New Jersey">New Jersey</option>
                                        <option value="New Mexico">New Mexico</option>
                                        <option value="New York">New York</option>
                                        <option value="North Carolina">North Carolina</option>
                                        <option value="North Dakota">North Dakota</option>
                                        <option value="Ohio">Ohio</option>
                                        <option value="Oklahoma">Oklahoma</option>
                                        <option value="Oregon">Oregon</option>
                                        <option value="Pennsylvania">Pennsylvania</option>
                                        <option value="Rhode Island">Rhode Island</option>
                                        <option value="South Carolina">South Carolina</option>
                                        <option value="South Dakota">South Dakota</option>
                                        <option value="Tennessee">Tennessee</option>
                                        <option value="Texas">Texas</option>
                                        <option value="Utah">Utah</option>
                                        <option value="Vermont">Vermont</option>
                                        <option value="Virginia">Virginia</option>
                                        <option value="Washington">Washington</option>
                                        <option value="West Virginia">West Virginia</option>
                                        <option value="Wisconsin">Wisconsin</option>
                                        <option value="Wyoming">Wyoming</option>
                                    </select>
                                    
                                </div>
                                <div className="form-group">
                                    <label>Zip</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="addEdit_zip"
                                        placeholder="Enter Zip"
                                        maxLength="5"
                                        value={this.state.zip}
                                        onChange={this.handleZipChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                onClick={this.handleClose} 
                            >
                                Close
                            </button>
                            
                            <button type="button" className="btn btn-primary" onClick={this.handleSave} /*added*/> 
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientAddEditModal;