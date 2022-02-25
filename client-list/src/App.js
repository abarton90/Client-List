import React,{Component} from 'react';

class App extends React.Component {
  render(){
    return (
      <div>
        <div class="modal fade" id="add" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add New Entry</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                
                  <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" id=""  placeholder="Enter Name"/>
                      </div>
                      <div class="form-group">
                          <label for="exampleInputEmail1">Phone</label>
                          <input type="text" class="form-control" id="" placeholder="Enter Phone Number"/>
                      </div>
                      <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="text" class="form-control" id="" placeholder="Enter Email"/>
                      </div>
                      <div class="form-group">
                          <label for="exampleInputEmail1">Address</label>
                          <input type="text" class="form-control" id="" placeholder="Enter Address"/>
                      </div>
                      <div class="form-group">
                          <label for="exampleInputEmail1">City</label>
                          <input type="text" class="form-control" id="" placeholder="Enter City"/>
                      </div>
                      <div class="form-group">
                          <label for="inputState">State</label>
                          <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>Alabama</option>
                            <option>Alaska</option>
                            <option>Arizona</option>
                            <option>Arkansas</option>
                            <option>California</option>
                            <option>Colorado</option>
                            <option>Connecticut</option>
                            <option>Delaware</option>
                            <option>Florida</option>
                            <option>Georgia</option>
                            <option>Hawaii</option>
                            <option>Idaho</option>
                            <option>Illinois</option>
                            <option>Indiana</option>
                            <option>Iowa</option>
                            <option>Kansas</option>
                            <option>Kentucky</option>
                            <option>Louisiana</option>
                            <option>Maine</option>
                            <option>Maryland</option>
                            <option>Massachusetts</option>
                            <option>Michigan</option>
                            <option>Minnesota</option>
                            <option>Mississippi</option>
                            <option>Missouri</option>
                            <option>Montana</option>
                            <option>Nebraska</option>
                            <option>Nevada</option>
                            <option>New Hampshire</option>
                            <option>New Jersey</option>
                            <option>New Mexico</option>
                            <option>New York</option>
                            <option>North Carolina</option>
                            <option>North Dakota</option>
                            <option>Ohio</option>
                            <option>Oklahoma</option>
                            <option>Oregon</option>
                            <option>Pennsylvania</option>
                            <option>Rhode Island</option>
                            <option>South Carolina</option>
                            <option>South Dakota</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Utah</option>
                            <option>Vermont</option>
                            <option>Virgina</option>
                            <option>Washington</option>
                            <option>West Virgina</option>
                            <option>Wisconsin</option>
                            <option>Wyoming</option>
                          </select>
                        </div>
                      <div class="form-group">
                          <label for="exampleInputEmail1">Zip</label>
                          <input type="text" class="form-control" id="" placeholder="Enter Zip"/>
                      </div>
                    
                      
                    </form>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Entry</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                
                  <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" id=""  placeholder="Enter Name"/>
                      </div>
                      <div class="form-group">
                          <label for="exampleInputEmail1">Phone</label>
                          <input type="text" class="form-control" id="" placeholder="Enter Phone Number"/>
                      </div>
                      <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="text" class="form-control" id="" placeholder="Enter Email"/>
                      </div>
                      <div class="form-group">
                          <label for="exampleInputEmail1">Address</label>
                          <input type="text" class="form-control" id="" placeholder="Enter Address"/>
                      </div>
                      <div class="form-group">
                          <label for="exampleInputEmail1">City</label>
                          <input type="text" class="form-control" id="" placeholder="Enter City"/>
                      </div>
                      <div class="form-group">
                          <label for="inputState">State</label>
                          <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>Alabama</option>
                            <option>Alaska</option>
                            <option>Arizona</option>
                            <option>Arkansas</option>
                            <option>California</option>
                            <option>Colorado</option>
                            <option>Connecticut</option>
                            <option>Delaware</option>
                            <option>Florida</option>
                            <option>Georgia</option>
                            <option>Hawaii</option>
                            <option>Idaho</option>
                            <option>Illinois</option>
                            <option>Indiana</option>
                            <option>Iowa</option>
                            <option>Kansas</option>
                            <option>Kentucky</option>
                            <option>Louisiana</option>
                            <option>Maine</option>
                            <option>Maryland</option>
                            <option>Massachusetts</option>
                            <option>Michigan</option>
                            <option>Minnesota</option>
                            <option>Mississippi</option>
                            <option>Missouri</option>
                            <option>Montana</option>
                            <option>Nebraska</option>
                            <option>Nevada</option>
                            <option>New Hampshire</option>
                            <option>New Jersey</option>
                            <option>New Mexico</option>
                            <option>New York</option>
                            <option>North Carolina</option>
                            <option>North Dakota</option>
                            <option>Ohio</option>
                            <option>Oklahoma</option>
                            <option>Oregon</option>
                            <option>Pennsylvania</option>
                            <option>Rhode Island</option>
                            <option>South Carolina</option>
                            <option>South Dakota</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Utah</option>
                            <option>Vermont</option>
                            <option>Virgina</option>
                            <option>Washington</option>
                            <option>West Virgina</option>
                            <option>Wisconsin</option>
                            <option>Wyoming</option>
                          </select>
                        </div>
                      <div class="form-group">
                          <label for="exampleInputEmail1">Zip</label>
                          <input type="text" class="form-control" id="" placeholder="Enter Zip"/>
                      </div>
                    </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Delete Entry</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Are you sure you want to delete entry?
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>

          <div class="container">
              <div class="jumbtron">
                  <div class="card">
                      <div class="card-header">
                        Client List
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">Display Database Content</h5>

                          

                        <table class="table table-striped table-dark table-hover table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Phone</th>
                              <th scope="col">Email</th>
                              <th scope="col">Address</th>
                              <th scope="col">City</th>
                              <th scope="col">State</th>
                              <th scope="col">Zip</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Aaron Barton</td>
                              <td>909-225-4328</td>
                              <td>abarton@gmail.com</td>
                              <td>1234 Pintail Ct.</td>
                              <td>Chino</td>
                              <td>California</td>
                              <td>91710</td>
                              <td>
                                  <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#edit" style="width: 60px">Edit</button>
                                  <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#delete" style="width: 60px">Delete</button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Christopher Washington</td>
                              <td>503-123-4567</td>
                              <td>cwashington@gmail.com</td>
                              <td>1234 Kellet Ave.</td>
                              <td>Upland</td>
                              <td>California</td>
                              <td>91763</td>
                              <td>
                                  <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#edit" style="width: 60px">Edit</button>
                                  <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#delete" style="width: 60px">Delete</button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Jennette Perreau</td>
                              <td>626-123-4567</td>
                              <td>jperreau@gmail.com</td>
                              <td>1234 San Bernardino Ave.</td>
                              <td>Chino</td>
                              <td>California</td>
                              <td>91710</td>
                              <td>
                                  <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#edit" style="width: 60px">Edit</button>
                                  <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#delete" style="width: 60px">Delete</button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>Beatrice Melara</td>
                              <td>909-123-4567</td>
                              <td>bmalara@gmail.com</td>
                              <td>1234 Kellet Ave.</td>
                              <td>Upland</td>
                              <td>California</td>
                              <td>91763</td>
                              <td>
                                  <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#edit" style="width: 60px">Edit</button>
                                  <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#delete" style="width: 60px">Delete</button>
                              </td>
                            </tr>
                          </tbody>
                          
                        </table>

                        <div class="row">
                          <div class="col-md-12 text-right">
                              <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#add">Add New</button>
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