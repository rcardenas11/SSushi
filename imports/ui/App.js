import React, {Component} from "react";
import PropTypes from "prop-types";
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      
    };

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
                    <a className="nav-link" href="#">Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Menu</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Quién es Seiki</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contáctenos</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/*<!-- Header with Background Image -->*/}
          <header className="business-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 id="princ" className="display-3 text-center text-white mt-4">Seiki Sushi</h1>
                </div>
                <div className="col-lg-12 text-center">
                  <button type="button" class="btn btn-outline-light">Únetenos y realiza tu Reserva</button>
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
                <h2 id="princ" classNamev="mt-4">Contact Us</h2>
                
              </div>
            </div>
            {/*<!-- /.row -->*/}

            <div className="row">
              <div class="col-sm-4 my-4">
                <div class="card">
                  <img class="card-img-top" src="http://placehold.it/300x200" alt=""/>
                  <div class="card-body">
                    <h4 id="princ" class="card-title">Card title</h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                  </div>
                  <div class="card-footer">
                    <a href="#" class="btn btn-primary">Find Out More!</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 my-4">
                <div class="card">
                  <img class="card-img-top" src="http://placehold.it/300x200" alt=""/>
                  <div class="card-body">
                    <h4 id="princ"  class="card-title">Card title</h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
                  </div>
                  <div class="card-footer">
                    <a href="#" class="btn btn-primary">Find Out More!</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 my-4">
                <div class="card">
                  <img class="card-img-top" src="http://placehold.it/300x200" alt=""/>
                  <div class="card-body">
                    <h4  id="princ" class="card-title">Card title</h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                  </div>
                  <div class="card-footer">
                    <a href="#" class="btn btn-primary">Find Out More!</a>
                  </div>
                </div>
              </div>

            </div>
            {/*<!-- /.row -->*/}

          </div>
         {/* <!-- /.container -->*/}

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