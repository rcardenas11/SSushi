import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import {Reservas} from "../api/reservas.js";
 
class Layout extends Component {
  constructor(props) {
   super(props);
   this.state = {
      items: 10,
      loadingState: false,
      reservas: []
    };
  }
 
  componentDidMount() {
    this.refs.iScroll.addEventListener("scroll", () => {
      if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=this.refs.iScroll.scrollHeight){
        this.loadMoreItems();
      }
    });
  }
 
  displayItems() {
    var items = [];
    var reser = this.props.reservas;
   for (var i = 0; i < this.props.reservas.length; i++) 
  //    this.props.reservas.map((p,i)=>
      {
        var z = reser[i];
        console.log(typeof(z.fecha));
        var re =  /"/g;
      items.push(
     <li key={i}>
       <div class="card">
        <div class="card-header">
         {JSON.stringify(z.fecha).replace(re,' ')}
        </div>
        <div class="card-body">
          <h5 class="card-title">Reserva para {z.numPersonas}  personas</h5>
          <p class="card-text">El estado de esta reserva es: {z.estado === false ? (<p class="text-danger">Pendiente</p>):(null)}</p>
          {Meteor.user() && Meteor.user().username === "Admin" ? (<div><button type="button" class="btn btn-outline-danger btn-sm">Aceptar</button><button type="button" class="btn btn-outline-danger btn-sm">Rechazar</button></div>):(null)}
        </div>
      </div>
      <br/>
    </li>);
    }
    return items;
  }
 
  loadMoreItems() {
    this.setState({ loadingState: true });
    setTimeout(() => {
      this.setState({ items: this.state.items + 10, loadingState: false });
    }, 3000);
  }
 
  render() {
    return (
      <div ref="iScroll" style={{ height: "400px", overflow: "auto" }}>
        <ul>
          {this.displayItems()}
          {console.log(this.props.reservas.length)}
        </ul>
 
        {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}
 
      </div>
    );
  }
}

Layout.propTypes ={
 reservas: PropTypes.array.isRequired
};

 
export default withTracker(() =>{
  var a =Meteor.user().username;
  Meteor.subscribe("reservas");
  return{
    reservas: Reservas.find({}).fetch()
  };

}
)(Layout);