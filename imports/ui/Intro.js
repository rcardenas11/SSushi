import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import { HTTP } from 'meteor/http';
class Intro extends Component {

 constructor(props){
    super(props);
    this.state = {
      
    };

}
  render() {
    return (
    <div> 
        
          {/*<!-- Header with Background Image -->*/}
          <header className="business-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 id="princ" className="display-3 text-center text-white mt-4">Seiki Sushi</h1>
                </div>
                <div className="col-lg-12 text-center">
                  <button type="button" class="btn btn-outline-light">Únetenos y realiza tu Reserva</button>
                  <br/>
                  <br/>
                  <p class="text-white">¿Ya eres parte de la Familia?</p>
                  <button type="button" class="btn btn-outline-light">Ingresa</button>
                </div>
              </div>
            </div>
          </header>

          {/*<!-- Page Content -->*/}
          <div className="container">

            <div className="row">
              <div className="col-sm-8">
                <h2 id="princ" className="mt-4">¿Qué se opina de nosotros?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
              </div>
              <div className="col-sm-4">
                <h2 id="princ" className="mt-4">¿Dónde estamos?</h2>
                
              </div>
            </div>
          </div>
         {/* <!-- /.container -->*/}
</div>
      );
  }
}

export default Intro;