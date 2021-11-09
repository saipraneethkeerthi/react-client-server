import React from 'react';

const Signup = () => {
    return (
        <div className="container d-flex flex-column align-items-center">
            <div className="card w-75 d-flex flex-column  align-items-center ">
                <h1>Signup with Myntra</h1>
                <p>Easily sign up with</p>
                <div className="d-flex flex-row ">
                    <button style={{ marginRight: "5px" }} type="button" className="btn btn-secondary ">FACEBOOK</button>
                    <button type="button" className="btn btn-secondary">GOOGLE</button>
                </div>
                <p>-OR USING EMAIL</p>
                <div className="container d-flex flex-column align-items-center">
                    <div className="card w-50 d-flex flex-column align-items-center">
                        <input type="text" className="form-control mb-3" placeholder="Your Email Address" />
                        <input type="password" className="form-control mb-3" placeholder="Choose Password" />
                        <input type="number" className="form-control mb-3" placeholder="Mobile Number(For order status updates)"></input>
                        <div className="d-flex flex-row">
                        <input type="radio"  name="gender" id="genderMale" value="Male" checked />
                        <label for="genderMale">Male</label>
                        <input type="radio" className="form-control mb-3" name="gender" id="genderFemale" value="Female" class="ml-2" />
                        <label for="genderFemale">Female</label>
                        </div>
                    </div>
                        <button type="button" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
