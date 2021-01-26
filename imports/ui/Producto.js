import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import {Menu} from "../api/menu.js";

class Producto extends Component {

 constructor(props){
    super(props);
    this.state = { 
      productos: []
    };

}

agregarProducto(){
  const name = document.getElementById("nombreProd").value;
  const descrp = document.getElementById("descrpProd").value;
  const valor = document.getElementById("nombreProd").value;
  const tipo = document.getElementById("tipoProd").value;
  Meteor.call("producto.add",name,descrp,"a",valor);
}

eliminarProducto(){

  const name = document.getElementById("nombreProd").value;

  Meteor.call("producto.del",name);

}

editarProducto(){
  const name = document.getElementById("nombreProd").value;
  const descrp = document.getElementById("descrpProd").value;
  const valor = document.getElementById("nombreProd").value;
  const tipo = document.getElementById("tipoProd").value;

   Meteor.call("producto.add",name,descrp,"a",valor);
}
 
 /* Camilo: Debería darle feedback al usuario haciendole saber que su operación (agregar o editar o eliminar) fue existosa */

  render() {
    return (
    <div className="container"> 
      <br/>
      {Meteor.user() && Meteor.user().username === "Admin" ? (
     /* Camilo: Tremendo machetazo para manejar tipo de cuenta administrador jajaja */
           
              <div class="input-group mb-3">
              {/*Aca van las opciones*/}
                <div className="row">
                 <div className="col-sm">
                   <br/>
                   <button class="btn btn-outline-danger btn-block" type="button" onClick={this.agregarProducto}>Agregar Producto</button>
                   <br/>
                   <button class="btn btn-outline-danger btn-block" type="button" onClick={this.eliminarProducto}>Eliminar Prodcuto</button>
                 </div>
                 <div className="col">
                    <label >¡Agregar o Eliminar productos del menu!</label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Nombre:</span>
                      </div>
                      <input type="text" class="form-control" id="nombreProd" aria-describedby="basic-addon3"/>
                    </div>  
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Desripcion Del Producto:</span>
                      </div>
                      <textarea rows="4" cols="50" name="comment" form="usrform"/>
                    </div> 
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Valor:</span>
                      </div>
                      <input type="text" class="form-control" id="nombreProd" aria-describedby="basic-addon3"/>
                    </div> 
                 </div>
        
              </div>
            <div className="col">
            </div>
          </div>

        ): (<br/>)}
          <div class="item carousel-item">
            <img src="https://www.thegalmont.com/files/hotel/hotel-a/08-generic/galmont-hotel-sushi-bar-01.jpg" alt="plato de seiki"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>p.name</h5>
              <p>p.descrip</p>
            </div>
            { this.props.productos.map((p,i) =>
            <div key={i} class="carousel-caption d-none d-md-block">
              <h5>p.name</h5>
              <p>p.descrip</p>
            </div>
            )}
          </div>      
            
         
        
    
    </div>
      );
  }
}

Producto.propTypes ={
 productos: PropTypes.array.isRequired
};


export default withTracker(() =>{
  
  Meteor.subscribe("menu");
  return{
    productos: Menu.find({}).fetch()
  };

}
)(Producto);
