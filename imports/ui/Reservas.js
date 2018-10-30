import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import DatePicker from 'react-datepicker';
import moment from 'moment';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
class Reservas extends Component {

 constructor(props){
    super(props);
    this.state = {
     startDate: moment() 
    };
  this.handleChange = this.handleChange.bind(this);
}

handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
       <div>
       {Meteor.user() && Meteor.user().username !== "Admin" ? (

        <div className="container-fluid" id="lobby">
        <br/>
        <br/>
        <h2> Bienvenid@ {Meteor.user().username} </h2>
        <br/>
        <br/>
        <div className="row">
          <div className="col">
            <h2>Realizar solicitud reserva</h2>
            <hr/>
          </div>
          <div className="col">
            <h2>Historial de Reservas</h2>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <br/>
            <p>Por favor ingresa los datos  correspondientes a la reserva en los siguientes campos: </p>
            <br/>
            <div class="input-group mb-3">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Numero de Personas:</span>
                      </div>
                      <input type="text" class="form-control" id="nombreProd" aria-describedby="basic-addon3"/>
                    </div>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Fecha y Hora:</span>
                      </div>
                        <br/>
                        <br/>
                        <DatePicker selected={this.state.date}
                                   onChange={this.handleChange}
                                     showTimeSelect
                                     dateFormat="LLL" />
                    </div>
            </div>
          </div>
          <div className="col">
            
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col">
            <div class="input-group mb-3">
              <p>Una vez enviada la solicitud para una reserva, tendrás que esperar a que el administrador del restaurante la acepte. En tu historial de reservas podrás ver si la reserva fue aceptada o rechazada.</p>
              <br/>
              <br/>
                <button class="btn btn-outline-danger" type="button" >Realizar reserva </button>
            </div>
          </div>
          <div className="col">
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div> ): (
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