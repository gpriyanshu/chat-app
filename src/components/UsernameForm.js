import React, { Component } from 'react'


class UsernameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.username)
  }

  onChange(e) {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
      <html>
	  <head>
	  <style>

	  </style>
	  </head>
        <body background="bgimage.jpg">
    <div id="root"></div>
	
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top"><h1>Chat-APP</h1></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#download">Download</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-lg-7 my-auto">
            <div class="header-content mx-auto">
              <h1 class="mb-5">What is your Username??</h1>
			  
			  <div>
			  <form onSubmit={this.onSubmit}>
		   
            <input type="text" class="form-control" id="validationTooltip05" placeholder="Your full name"
              onChange={this.onChange} 
            />
			
            <input type="submit" class="xyz" class="btn btn-secondary btn-lg" value="Enter" />
          
		  </form>
		  </div>
              
            </div>
          </div>
          <div class="col-lg-5 my-auto">
            <div class="device-container">
              <div class="device-mockup iphone6_plus portrait white">
                <div class="device">
                  <div class="screen">
                    
                 
                 <div class="img"></div>
                  </div>
                  <div class="button">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
		
		
		
		
		
		
		
		
		
		
		
		
        
	  
	  
	  <section class="contact bg-primary" id="contact">
      <div class="container">
        <h2>We
          <i class="fa fa-heart"></i>
          new friends!</h2>
        <ul class="list-inline list-social">
          <li class="list-inline-item social-twitter">
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item social-facebook">
            <a href="https://www.facebook.com/">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li class="list-inline-item social-github">
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <footer>
      <div class="container">
        <p>&copy;  2018. All Rights Reserved.</p>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Privacy</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>

   
        </body>
        </html>
    )
  }
}

export default UsernameForm
