import Link from 'react-router-dom/Link';
import React, { Component } from 'react'; 
import Logo from '../../img/logo.png';


class Dropin extends Component {
    render () {
        return (
            <div className="Dropin">
                <h1>Dropin Page</h1>
                <img src={Logo} alt="logo"/>
                <form style={{align:"center"}}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="johndoe@gmail.com"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="********"/>
                    </div>
                    {/* <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <Link to="/home">
                    <button type="submit" class="btn btn-primary">Login</button>
                    </Link>
                </form>

            </div>
        )
    }
}

export default Dropin ;