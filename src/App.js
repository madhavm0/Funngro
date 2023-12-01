import './components/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import ReactPlayer from 'react-player/youtube';

function App() {
  return (
    <>
      <nav>
        <div className="logo">
          <img className='logo1' src="images/Funngrow11.jpg" alt="Funngro" />
          <ul>
            <li className='navul1' href='#'>Teen</li>
            <li className='navul2' href='#'>Parent</li>
            <li className='navul3' href='#'>Company</li>
            <li className='logo2' href='#'><img src="images/ios 1.png" alt="iOS" /></li>
            <li className='logo3' href='#'><img src="images/PlayStore2.png" alt="PlayStore" /></li>
          </ul>
        </div>
      </nav>
      <body>

        <div className="container-1">
          <div className='c1-1'>
            <span>Earn your <br /> First Income</span>
            <p>Real companies, real projects, real earnings and real money.</p>
            <p>Smart opportunities for the smart generation.</p>
          </div>
          <div className='c1-2'>
            <img src="images/Funngrom.png" alt="Funngro" />
          </div>
        </div>

        <div className='container-2'>
          <div>
            <img src="" alt="" />
            <div>
              TeenLancers
              <p id='c2p'>600,000+</p>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>
              Companies
              <p id='c2p'>2,500+</p>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>
              Live Projects
              <p id='c2p'>1000+</p>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>
              Categories
              <p id='c2p'>12</p>
            </div>
          </div>
        </div>

        <div className='container-3'>
          <h1>Why Work in Your Teens ?</h1>
          <br />
          <p>Warren Buffet, Steve Jobs, Bill Gates had started working in their Teens, Do you still want to know Why ?</p>

          <div className='cards'>
            <div className="c3c">
              <img src="images/earning.png" alt="Income" /><br /><br />
              First Income
              <p>Work with Real Companies & earn Money</p>
            </div>
            <div className="c3c">
              <img src="images/experience.png" alt="Experience" /><br /><br />
              Experience
              <p>Keep on gaining experience with earning</p>
            </div>
            <div className="c3c">
              <img src="images/learning.png" alt="Learning" /><br /><br />
              Learning
              <p>Deep learning with real companies</p>
            </div>
            <div className="c3c">
              <img src="images/certificate.png" alt="Certificate" /><br /><br />
              Certification
              <p>Build your profile by getting experience certificates</p>
            </div>
          </div>

        </div>

        <div className='container-4'>
          <div className="circle-m">
            <span>Project Categories</span>
            <p>Hundreds of live project in each category.
              Register for categories of your choice in Funngro App and start working with companies.</p>
          </div>
          <div className="circle1">

            <p>Social Media Marketing</p>
          </div>
          <div className="circle2">

            <p>

              Video Creation
            </p>
          </div>
          <div className="circle3">

            <p>Website Design</p>
          </div>
          <div className="circle4">

            <p>Influencer Marketing</p>
          </div>
          <div className="circle5">

            <p>Mobile App Development</p>
          </div>
          <div className="circle6">

            <p>Data Entry</p>
          </div>
          <div className="circle7">

            <p>Research & Survey</p>
          </div>
          <div className="circle8">

            <p>Graphics Design</p>
          </div>
          <div className="circle9">

            <p>Voice Over</p>
          </div>
          <div className="circle10">

            <p>Campus Ambassador</p>
          </div>
        </div>

        {/* <div className="container-5">
          <h1>We are Trusted By</h1>
        </div>

        <div className='container-6'>
          <h1>Want To Know About Funngro</h1>
          <p>Checkout where in the World, We are featured in</p>
        </div> */}

        <div className='container-7'>
          <div className="c7div">
            <h1>Funngro @ Shark Tank</h1>
            <p>Lakhs of Teens, Hundreds of Companies & Sharks also Loved Funngro</p>
          </div>
          <div className='carousel'>
            <Carousel>
              <Carousel.Item>
                {/* <img
                  className="d-block c w-100"
                  src="images/c1.jpg"
                  alt="First slide" /> */}
                <div className="d-block c w-100">
                  <ReactPlayer className="d-block c w-100" url='https://youtu.be/sGysgwm02YY' />
                </div>

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block c w-100"
                  src="images/c2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block c w-100"
                  src="images/c3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="container-8">
          <div className="c8main">
            <h1>Earn With Funngro</h1>
            <p>Simple steps to earn income by working on projects with real companies.</p>
          </div>

          <div className='c8cards'>
            <div className='c8c'>
              <div className='c8cdiv1'>
                <h1>1</h1>
              </div>
              <div className='c8cdiv2'>
                <div className='c8csub1'>
                  <h4>Register</h4>
                </div>
                <div className='c8csub2'>
                  <p>Register for Earning on Funngro app, select your area of Interest</p>
                </div>
              </div>
            </div>
            <div className='c8c'>
              <div className='c8cdiv1'>
                <h1>2</h1>
              </div>
              <div className='c8cdiv2'>
                <div className='c8csub1'>
                  <h4>Complete Profile</h4>
                </div>
                <div className='c8csub2'>
                  <p>Add details about your Interest , Experience and Past work</p>
                </div>
              </div>
            </div>
            <div className='c8c'>
              <div className='c8cdiv1'>
                <h1>3</h1>
              </div>
              <div className='c8cdiv2'>
                <div className='c8csub1'>
                  <h4>Finish First Project</h4>
                </div>
                <div className='c8csub2'>
                  <p>Complete one project to show your skils, get paid</p>
                </div>
              </div>
            </div>
            <div className='c8c'>
              <div className='c8cdiv1'>
                <h1>4</h1>
              </div>
              <div className='c8cdiv2'>
                <div className='c8csub1'>
                  <h4>Apply to Companies</h4>
                </div>
                <div className='c8csub2'>
                  <p>Hundreds of companies waiting for you, start Applying</p>
                </div>
              </div>
            </div>
            <div className='c8c'>
              <div className='c8cdiv1'>
                <h1>5</h1>
              </div>
              <div className='c8cdiv2'>
                <div className='c8csub1'>
                  <h4>Start Earning</h4>
                </div>
                <div className='c8csub2'>
                  <p>Complete the project - earn money & get certified</p>
                </div>
              </div>
            </div>


          </div>

        </div>
        {/* <div className='container-9'>
          <h1>Frequently Asked Questions</h1>
          <p>Having Doubts Abouts About Funngro, Check Some Listed Questions and Answers</p>
        </div> */}

        <div className="container-11">
          <div className='c11div'>
            <div className='c11sub1'>
              <img className='img1' src="images/Funngrowlogo.jpg" alt="Funngro" />
              <img className='img2' src="images/Funngroimg.jpg" alt="Funngro" />
            </div>
            <div className='c11sub2'>
              <div className='c11-1'>

                <p>Download App</p>

                <a href="#"><img src='images/Playstorelink.png' alt='PlayStore'></img></a>
                <a href="#"><img src='images/Appstore.png' alt='AppStore'></img></a>

              </div>
              <div className='c11-2'>
                <hr />
                <p>Enable smart Teenagers and Smart Companies to reliaze their full potentials. It's fun to grow.</p>
                <hr />
              </div>
              <div className="c11-3">
                <div className="c11d2">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Blogs</a>
                  <a href="#">FAQs</a>
                  <a href="#">Carrers</a>
                </div>
                <div className="c11d2">
                  <a href="#">Login</a>
                  <a href="#">Investors</a>
                  <a href="#">Contact Us</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms & Conditions</a>
                </div>
              </div>
            </div>
          </div>

          <footer>
            &copy; All copyrights reserved 2023 By Funngro
          </footer>

        </div>
      </body>
    </>
  );
}

export default App;
