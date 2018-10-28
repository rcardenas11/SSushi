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
        
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
              <a class="navbar-brand" href="#">Start Bootstrap</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/*<!-- Header with Background Image -->*/}
          <header class="business-header">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="display-3 text-center text-white mt-4">Seiki Sushi</h1>
                </div>
              </div>
            </div>
          </header>

          {/*<!-- Page Content -->*/}
          <div class="container">

            <div class="row">
              <div class="col-sm-8">
                <h2 class="mt-4">What We Do</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
                <p>
                  <a class="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
                </p>
              </div>
              <div class="col-sm-4">
                <h2 class="mt-4">Contact Us</h2>
                
              </div>
            </div>
            {/*<!-- /.row -->*/}

            <div class="row">
              <div class="col-sm-4 my-4">
                <div class="card">
                  <img class="card-img-top" src="http://placehold.it/300x200" alt=""/>
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
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
                    <h4 class="card-title">Card title</h4>
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
                    <h4 class="card-title">Card title</h4>
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