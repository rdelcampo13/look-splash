import React, { Component } from 'react';
import './Home.css';
import Navbar from "../../components/Navbar";

class App extends Component {

  state = {
    EMAIL: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state)    
  };

  canvasDots() {
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

    var mousePosition = {
        x: 30 * canvas.width / 100,
        y: 30 * canvas.height / 100
    };

    var dots = {
        nb: 90,
        distance: 90,
        d_radius: 100,
        array: []
    };

    function Dot(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();

        this.radius = Math.random() + 1;
    }

    Dot.prototype = {
        create: function(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        },

        animate: function(){
            for(var i = 0; i < dots.nb; i++){

                var dot = dots.array[i];

                if(dot.y < 0 || dot.y > canvas.height){
                    dot.vx = dot.vx;
                    dot.vy = - dot.vy;
                }
                else if(dot.x < 0 || dot.x > canvas.width){
                    dot.vx = - dot.vx;
                    dot.vy = dot.vy;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        },

        line: function(){
            for(var i = 0; i < dots.nb; i++){
                for(var j = 0; j < dots.nb; j++){
                    var i_dot = dots.array[i];
                    var j_dot = dots.array[j];

                    if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
                        if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
                            ctx.beginPath();
                            ctx.moveTo(i_dot.x, i_dot.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        }
    };

    function createDots(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(var i = 0; i < dots.nb; i++){
            dots.array.push(new Dot());
            var dot = dots.array[i];

            dot.create();
        }

        dot.line();
        dot.animate();
    }

    window.onmousemove = function(parameter) {
        mousePosition.x = parameter.pageX;
        mousePosition.y = parameter.pageY;
    }

    mousePosition.x = window.innerWidth / 2;
    mousePosition.y = window.innerHeight / 2;

    setInterval(createDots, 1000/30);
  };

  log = () => {
    console.log(this.state)
  }


  componentDidMount() {         
    this.log()
    this.canvasDots();
  }


  // Render Function
  render() {

    return (
      <div>
        <div className="header">
          <canvas className='connecting-dots'>
          </canvas>
          <div className="header-container text-center">
            <h1 className="header-title">Look<span className="header-title-ar">ar</span></h1>
            <h3 className="header-subtitle">We're turning augmented reality into a scientific tool</h3>

            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-look" data-toggle="modal" data-target="#mc-modal">
              Sign up for updates
            </button>
          </div>
        </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="mc-modal" tabIndex="-1" role="dialog">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">Sign up for our mailing list</h5>
                    <button type="button" className="close" data-dismiss="modal">
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">

                  {/* <!-- Begin Mailchimp Signup Form --> */}
                  <div id="mc_embed_signup">
                    <form action="https://app.us19.list-manage.com/subscribe/post?u=93f8f62161d6fac936d34784e&amp;id=0fc8d63267" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                      <div id="mc_embed_signup_scroll">
                      <p style={{ fontSize: 14 }}>Enter your email address to get updates on the project</p>
                        <div className="mc-field-group">
                          <input type="email" defaultValue="" placeholder="Your Email" name="EMAIL" className="required email" id="mce-EMAIL"  onChange={this.handleInputChange} />
                        </div>
                        <div id="mce-responses" className="clear">
                          <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                          <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                        </div>    
                        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                        <div style={{ position: "absolute", left: -5000 }}>
                          <input type="text" name="b_93f8f62161d6fac936d34784e_0fc8d63267" tabIndex="-1" defaultValue="" />
                        </div>
                        <div className="clear">
                          <input disabled={!this.state.EMAIL} type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-look" />
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <!--End mc_embed_signup--> */}

                  </div>
                  {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div> */}
                </div>
              </div>
            </div>

      </div>
    );
  }
}

export default App;
