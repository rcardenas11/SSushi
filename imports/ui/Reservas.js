import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
class Reservas extends Component {

 constructor(props){
    super(props);
    this.state = { 
    };

}

  render() {
    return (
       <div>
       {Meteor.user() ? (<div>asda</div>): (
      <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 class="mt-5">¿No has iniciado sesión?</h1>
          <p class="lead">Por favor inicia sesión para poder realizar una reserva en Seiki Sushi o regístrate si aun no perteneces a la familia !</p>

        </div>
      </div>
    </div>
)}
       </div>
    
      );
  }
}

export default Reservas;