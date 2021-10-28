import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="footer-32892 pb-0">
      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-md pr-md-5 mb-4 mb-md-0">
              <h3>About Us</h3>
              <p class="mb-4">
                GO& EXPLORE website will be helpful for all kinds of people
                living around the world. It will have all kinds of information
                about tourist place, hotel, route, and travel cost. User can add
                feedback on our website. It will be easier to make decision
                where people want to go with minimum cost.
              </p>
              <ul class="list-unstyled quick-info mb-4">
                <li>
                  <a href="#" class="d-flex align-items-center">
                    <span class="icon mr-3 icon-envelope"></span>
                    mdrohed85@gmail.com
                  </a>
                </li>
              </ul>

              <form action="#" class="subscribe">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your e-mail"
                />
                <input type="submit" class="btn btn-submit" value="Send" />
              </form>
            </div>
            <div class="col-md mb-4 mb-md-0">
              <h3>Get in Touch</h3>
              <ul class="list-unstyled tweets">
                <li class="d-flex">
                  <div class="mr-4">
                    <span class="icon icon-twitter"></span>
                  </div>
                  <div></div>
                </li>
                <li class="d-flex">
                  <div class="mr-4">
                    <span class="icon icon-twitter"></span>
                  </div>
                  <div>
                    <i class="fas fa-home"> Dhaka ,Bangladesh</i>
                    <br />
                    <i class="far fa-envelope"> Mdrohed85@gmail.com</i>
                  </div>
                </li>
                <li class="d-flex">
                  <div class="mr-4">
                    <span class="icon icon-twitter"></span>
                  </div>
                </li>
              </ul>
            </div>

            <div class="col-md-3 mb-4 mb-md-0">
              <h3></h3>
              <div class="row gallery">
                <div class="col-6">
                  <a href="">
                    <img
                      src="images/nature4.jpg"
                      alt="Image"
                      class="img-fluid"
                    />
                  </a>
                  <a href="">
                    <img
                      src="images/nature5.jpg"
                      alt="Image"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="col-6">
                  <a href="">
                    <img src="images/sajek.jpg" alt="Image" class="img-fluid" />
                  </a>
                  <a href="">
                    <img
                      src="images/sylhet.jpg"
                      alt="Image"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="py-5 footer-menu-wrap d-md-flex align-items-center">
                <div class="site-logo-wrap ml-auto">
                  <a href="#" class="site-logo">
                    {" "}
                    Go & Explore{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
