import React from 'react';
import { Container } from 'react-bootstrap';

const Covid = () => {
    return (
        <div>
            <h2 className="mt-5 text-info">Premium Membership</h2>
            <p className="text-success">We provide free delivery service for our Premium Member</p>

            <Container className="mb-2">
                
                <div className="row">
                    
                    <div className="col-12 col-md-6 w-50 mx-auto">
                    <form className="mt-5">
                    <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Name"/>
    </div>
  </div>
  <br />
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <br />
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Mobile Number</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword3" placeholder="Mobile No"/>
    </div>
  </div>
  <br />
  
  
  <div class="form-group row">
    <div class="col-sm-2">Valid Information</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          I recheck all the given information
        </label>
      </div>
    </div>
  </div>
  <br />
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Covid;