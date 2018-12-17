import React, { Component } from 'react';
import Canvas from "../../components/Canvas";
// import Navbar from "../../components/Navbar";
import './Home.css';

class App extends Component {

  state = {
    EMAIL: '',
    width: '',
    height: '',
    scroll: 0,
    alreadyFadedIn: false,
    navClass: 'd-none'
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleScroll = (event) => {
    let scrollTop = window.scrollY;
  
    this.setState({ scroll: scrollTop });
    let navClass;

    if (this.state.scroll >= 50) {navClass = 'fade-in'}
    if (this.state.scroll < 50) {navClass = 'd-none'}

    this.setState({ navClass });
  }

  updateCanvas = () => {
    var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d'),
        colorDot = '#fff',
        color = '#fff';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.display = 'block';
        ctx.fillStyle = colorDot;
        ctx.lineWidth = .25;
        ctx.strokeStyle = color;
  }
  
  canvasDots = () => {
    var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d'),
        colorDot = '#fff',
        color = '#fff';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.display = 'block';
        ctx.fillStyle = colorDot;
        ctx.lineWidth = .25;
        ctx.strokeStyle = color;

    // var mousePosition = {
    //     x: 30 * canvas.width / 100,
    //     y: 30 * canvas.height / 100
    // };

    // var dots = {
    //     nb: ((window.innerWidth > 900) ? 0 : 0),
    //     distance: 90,
    //     d_radius: 100,
    //     array: []
    // };

    // function Dot(){
    //     this.x = Math.random() * canvas.width;
    //     this.y = Math.random() * canvas.height;

    //     this.vx = -.5 + Math.random();
    //     this.vy = -.5 + Math.random();

    //     this.radius = Math.random() + 1;
    // }

    // Dot.prototype = {
    //     create: function(){
    //         ctx.beginPath();
    //         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    //         ctx.fill();
    //     },

    //     animate: function(){
    //         for(var i = 0; i < dots.nb; i++){

    //             var dot = dots.array[i];

    //             if(dot.y < 0 || dot.y > canvas.height){
    //                 dot.vx = dot.vx;
    //                 dot.vy = - dot.vy;
    //             }
    //             else if(dot.x < 0 || dot.x > canvas.width){
    //                 dot.vx = - dot.vx;
    //                 dot.vy = dot.vy;
    //             }
    //             dot.x += dot.vx;
    //             dot.y += dot.vy;
    //         }
    //     },

    //     line: function(){
    //         for(var i = 0; i < dots.nb; i++){
    //             for(var j = 0; j < dots.nb; j++){
    //                 var i_dot = dots.array[i];
    //                 var j_dot = dots.array[j];

    //                 if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
    //                     if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
    //                         ctx.beginPath();
    //                         ctx.moveTo(i_dot.x, i_dot.y);
    //                         ctx.lineTo(j_dot.x, j_dot.y);
    //                         ctx.stroke();
    //                         ctx.closePath();
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // };

    // function createDots(){
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     for(var i = 0; i < dots.nb; i++){
    //         dots.array.push(new Dot());
    //         var dot = dots.array[i];

    //         dot.create();
    //     }

    //     dot.line();
    //     dot.animate();
    // }

    // window.onmousemove = function(parameter) {
    //     mousePosition.x = parameter.pageX;
    //     mousePosition.y = parameter.pageY;
    // }

    // mousePosition.x = window.innerWidth / 2;
    // mousePosition.y = window.innerHeight / 2;

    // setInterval(createDots, 1000/30);
  };


  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,      
    })
  }

  componentWillMount = () => {
    this.updateDimensions();
  }

  componentDidMount() {
    this.canvasDots();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener("resize", this.updateCanvas);
  }
  
  componentWillUnmount = () => {
    window.addEventListener('scroll', this.handleScroll);
    window.removeEventListener("resize", this.updateCanvas);
  }  


  // Render Function
  render() {

    return (
      <div>

        <div className={this.state.navClass}>
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top mobile-nav" style={{ backgroundColor: "#000000" }}>
              {/* <div className="container"> */}

                <a className="navbar-brand" >
                  <img src="/img/look-box-logo.png" width="auto" height="30" alt="" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" target="_blank" href="https://vimeo.com/lookscience">Demo</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/docs/Look_Whitepaper.pdf" target="_Blank">Whitepaper</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-toggle="modal" data-target="#mc-modal" >Contact</a>
                    </li>
                  </ul>
                </div>
              {/* </div> */}
            </nav>
        </div>

        <div className="header">

          <Canvas />

          <div className="header-container text-center">
            {/* <h3 className="header-subtitle header-mobile-title">an augmented scientist approaches...</h3> */}
            {/* <h1 className="header-title">look.<span className="header-title-ar">ar</span></h1> */}
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" className="btn btn-look" data-toggle="modal" data-target="#mc-modal">
              Sign up for updates
            </button> */}
          </div>
        </div>

        <h3 className="header-subtitle header-corner text-center  ">an augmented scientist approaches...</h3>
        <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>

        <div className="fullscreen">
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#000000" }}>
              {/* <div className="container"> */}

                <a className="navbar-brand" >
                  <img src="/img/look-box-logo.png" width="auto" height="30" alt="" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" target="_blank" href="https://vimeo.com/lookscience">Demo</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/docs/Look_Whitepaper.pdf" target="_Blank">Whitepaper</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-toggle="modal" data-target="#mc-modal" >Contact</a>
                    </li>
                  </ul>
                </div>
              {/* </div> */}
            </nav>

          <div className="demo">
            <div className="container-fluid demo-cont">

              <div className="content-container text-center ar-header">
                <h2 style={{ color: "#fff", fontFamily: "Montserrat" }}>augmented reality</h2>
                <h2 style={{ color: "#fff", fontFamily: "Montserrat" }}>=</h2>
                <h2 style={{ color: "#fff", fontFamily: "Montserrat" }}>scientific tool</h2> 
              </div>

              <div className="row">
                <div className="col-lg gif top-left">
                  <h3 className="gif-header gif-header-top text-center" style={{ color: "#fff", fontFamily: "Montserrat" }}>Make Your Tool</h3>
                  <img src="/img/clip1.gif" />
                </div>
                <div className="col-lg gif top-right">
                  <h3 className="gif-header gif-header-top text-center" style={{ color: "#fff", fontFamily: "Montserrat" }}>Place on Target</h3>
                  <img src="/img/clip2.gif" />
                </div>
              </div>        

              <div className="row">
                <div className="col-lg gif bottom-left">
                  <h3 className="gif-header gif-header-top gif-header-mobile text-center" style={{ color: "#fff", fontFamily: "Montserrat" }}>Scan Target</h3>
                  <img src="/img/clip3.gif" />
                  <h3 className="gif-header gif-header-bottom text-center" style={{ color: "#fff", fontFamily: "Montserrat" }}>Scan Target</h3>
                </div>
                <div className="col-lg gif bottom-right">
                  <h3 className="gif-header gif-header-top gif-header-mobile text-center" style={{ color: "#fff", fontFamily: "Montserrat" }}>Analyze Results</h3>
                  <img src="/img/clip4.gif" />
                  <h3 className="gif-header gif-header-bottom text-center" style={{ color: "#fff", fontFamily: "Montserrat" }}>Analyze Results</h3>
                </div>
              </div>    

            </div>          
          </div>

          <div className="footer">
            <div className="container-fluid">
            <div className="row">
                <img className="footer-logo" src="/img/look-box-logo.png" />
              </div>
              <div className="row">
                <p className="footer-text text-center">your quantitative sixth sense</p>
              </div>
            </div>
          </div>
        </div>




        {/* <!-- Modal --> */}
        <div className="modal fade" id="mc-modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Contact Us</h5>
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <a href="mailto:look.science@gmail.com<" style={{ color: "#fff" }}>look.science@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
