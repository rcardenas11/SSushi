import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import { HTTP } from 'meteor/http';
import  Seiki  from "./Seiki";
import  Intro  from "./Intro";
class App extends Component {

 constructor(props){
    super(props);
    this.state = {
      carga: <Intro/>
      
    };

    this.toggleEstadoSeiki = this.toggleEstadoSeiki.bind(this);
    this.toggleEstadoInicio = this.toggleEstadoInicio.bind(this);
 }
 handleShow() {
    if (!this.state.showForm)
      this.setState({ showForm: true })
    else
      this.setState({ showForm: false })
 }
 toggleEstadoSeiki() {
   this.setState({ estado: "Seiki", carga: <Seiki/> })
 }
  toggleEstadoInicio() {
   this.setState({ estado: "Intro", carga: <Intro/> })
 }
  render() {
    return (
    <div> 
        
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">Seiki Sushi</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#" onClick={this.toggleEstadoInicio} >Incio
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" id="menu">Menu</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" id="seiki" onClick={this.toggleEstadoSeiki}>Quién es Seiki</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" id="contacto">Reservas</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div>{this.state.carga}</div>
         {/* <!-- Footer -->*/}
          <footer class="py-5 bg-dark">
            <div class="container">
              <p class="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
            </div>
         {/*   <!-- /.container -->*/}
          </footer>
</div>
      );
  }
}

export default App;