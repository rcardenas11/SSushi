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
  Meteor.call("producto.add",name,descrp,tipo,valor);
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

   Meteor.call("producto.add",name,descrp,tipo,valor);
}

  render() {
    return (
    <div> 

      {Meteor.user() && Meteor.user().username === "Admin" ? (
           <div className="row">
            <div className="col">
              <div class="input-group mb-3">
              {/*Aca van las opciones*/}
                <div className="row">
                 <div className="col">
                   <br/>
                   <button class="btn btn-outline-secondary btn-block" type="button" onClick={this.dudar}>Dudar</button>
                   <br/>
                   <button class="btn btn-outline-secondary btn-block" type="button" onClick={this.plantar}>Plantar</button>
                 </div>
                 <div className="col">
                    <label >¡Has una apuesta!</label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Cantidad:</span>
                      </div>
                      <input type="text" class="form-control" id="cantidad" aria-describedby="basic-addon3"/>
                    </div>  
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Denominación:</span>
                      </div>
                      <input type="text" class="form-control" id="denomi" aria-describedby="basic-addon3"/>
                    </div>  
                     <button class="btn btn-outline-secondary" type="button" onClick={this.acualizarApuesta}>Apostar!</button>
                 </div>
                </div>
              </div>
            </div>
            <div className="col">
            </div>
          </div>

        ): (<br/>)}
          <div class="carousel-item">
            <img src="..." alt="plato de seiki"/>
            { this.props.productos.map((p,i) =>
            <div key={i} class="carousel-caption d-none d-md-block">
              <h5>p.name</h5>
              <p>p.descrip</p>
            </div>
            )}
          </div>      
            
         
        )}
    
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