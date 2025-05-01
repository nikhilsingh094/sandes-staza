import React from 'react'
import NavbarDash from './NavbarDash'
import Footer from '../Footer/Footer'
import { Typography, Box } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function APPInsightsDash() {
  return (
    <div>
      <NavbarDash />
      <Box>

        <Typography>
          APP Insights <span style={{ color: "red" }}>** Beta</span>
        </Typography>
        <Typography >Ministry for POC Organization for POC</Typography>
        <Typography >iOS</Typography>
        <div className="row col-md-12" style={{ padding: "2%" }}>
          <div className="col-md-3 mt-3">
            <div class="card" style={{ width: "100%" }}>
              <div class="card-body d-flex">
                <FontAwesomeIcon icon={faApple} fontSize="65" /> <p class="card-text ml-4">
                  Total Users <br /><strong style={{ fontSize: "30px" }}>5</strong></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div class="card" style={{ width: "100%" }}>
              <div class="card-body d-flex">
                <FontAwesomeIcon icon={faApple} fontSize="65" /> <p class="card-text ml-4">Current Version <br /><strong style={{ fontSize: "30px" }}>2.4.01</strong></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div class="card" style={{ width: "100%" }}>
              <div class="card-body d-flex">
                <FontAwesomeIcon icon={faApple} fontSize="65" /> <p class="card-text ml-4">Current Version Updated <br /><strong style={{ fontSize: "30px" }}>1</strong></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div class="card" style={{ width: "100%" }}>
              <div class="card-body d-flex">
                <FontAwesomeIcon icon={faApple} fontSize="65" /> <p class="card-text ml-4">Current Version Not updated <br /><strong style={{ fontSize: "30px" }}>4</strong></p>
              </div>
            </div>
          </div>
        </div>
        <Typography >ANDROID</Typography>
        <div className="row col-md-12" style={{ padding: "2%" }}>
          <div className="col-md-3 mt-3">
            <div class="card" style={{ width: "100%" }}>
              <div class="card-body d-flex">
                <img src='assets/images/social.png' alt='' width="20%" /> <p class="card-text ml-4">
                  Total Users <br /><strong style={{ fontSize: "30px" }}>20</strong></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div class="card" style={{ width: "100%" }}>
              <div class="card-body d-flex">
                <img src='assets/images/social.png' alt='' width="20%" /> <p class="card-text ml-4">Current Version <br /><strong style={{ fontSize: "30px" }}>2.2.55</strong></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div class="card" style={{ width: "100%" }}>
              <div class="card-body d-flex">
                <img src='assets/images/social.png' alt='' width="20%" /> <p class="card-text ml-4">Current Version Updated <br /><strong style={{ fontSize: "30px" }}>3</strong></p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div class="card" style={{ width: "100%" }}>
              <div class="card-body d-flex">
                <img src='assets/images/social.png' alt='' width="20%" /> <p class="card-text ml-4">Current Version Not updated <br /><strong style={{ fontSize: "30px" }}>17</strong></p>
              </div>
            </div>
          </div>


        </div>
        <div className="row col-md-12" style={{ padding: "2%" }}>
          <div className="col-md-6">
            <table class="table table-striped table-hover">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </table>
          </div>
          <div className="col-md-6">
            <table class="table table-striped table-hover">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </table>
          </div>
        </div>
        <div className="row col-md-12" style={{ padding: "2%" }}>
          <div className="col-md-6">
            <table class="table table-striped table-hover">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </table>
          </div>

        </div>

      </Box>
      <Footer />
    </div>
  )
}

export default APPInsightsDash