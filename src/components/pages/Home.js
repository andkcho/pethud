import React, { Component } from 'react'; 
import NavBar from '../common/Navbar';
import Footer from '../common/Footer';
class Home extends Component {
    render () {
        return (
            <div className="Home">
                <NavBar/>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                    </li>
                </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><h1>Home Tab</h1></div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><h1>Profile Tab</h1></div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><h1>Contact Tab</h1></div>
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default Home ;