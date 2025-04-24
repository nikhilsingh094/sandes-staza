import { Typography } from "@mui/material";
import { Button } from "antd";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function LoginAdmin_Page() {
  const navigate = useNavigate();
  const [emailMobile, setEmailMobile] = useState("")
  const [otp, setOTP] = useState("")
  const [otpInputShow, setOtpInputShow] = useState(false)

  const Login_by_number = async () => {
    try {
      if (emailMobile != "") {
        setOtpInputShow(true)
      }
    } catch (error) {
      console.log("Something error in Login_by_number ", error);

    }
  }

  const OTP_Verification = async () => {
    try {


      if (otp != "") {
        toast.success("Login Successful !!")
        navigate('/Dashboard');
        console.log("dsfbdsb");
      }
    } catch (error) {
      console.log("Something error in OTP_Verification ", error);

    }
  }

  return (
    <>
      <div className="col-md-12" >
        <div className="col-md-6" style={{ padding: "10%", margin: "auto" }}>
          <div className="admin_form" style={{ border: "1px solid", padding: "5%", borderRadius: "10px" }}>
            <div className="logo_img" style={{ textAlign: "-webkit-center" }}>
              <img src="assets/images/sandes_logo.png" width="20%" alt="" />
            </div>
            <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center">
              Sandes Authentication Admin Login
            </Typography>

            <form>
              {otpInputShow === true ? <></> :
                <>
                  <p style={{ color: "green", textAlign: "center" }}>Please provide email/mobile registered in SANDES </p>
                  <br />
                  <div class="mb-3">
                    <label for="exampleInputEmailMobile" class="form-label">Email/Mobile</label>
                    <input type="text" class="form-control" onChange={(e) => setEmailMobile(e.target.value)} id="exampleInputEmailMobile" aria-describedby="emailmobileHelp" />
                  </div>
                  <div className="button-submit-cancle" style={{ textAlign: "center" }}>
                    <button className="btn btn-primary mr-2" onClick={(e) => { e.preventDefault(); Login_by_number(); }}>
                      Submit
                    </button>
                    <button class="btn btn-danger">Cancle</button>
                  </div>
                </>}
              {otpInputShow === true ?
                <>
                  <p style={{ color: "green", textAlign: "center" }}>Please Provide OTP </p>
                  <br />
                  <div class="mb-3">
                    <label for="otp" class="form-label">OTP</label>
                    <input type="text" class="form-control" id="otp" onChange={(e) => setOTP(e.target.value)} aria-describedby="otphelp" />
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <div className="button-submit-cancle" style={{ textAlign: "center" }}>
                    <Button class="btn btn-primary mr-2" style={{ backgroundColor: "green", marginRight: "10px" }} onClick={() => OTP_Verification()} >Submit</Button>
                    <Button class="btn btn-danger">Cancle</Button>
                  </div>
                </> : <></>
              }
            </form>
          </div>

        </div>

      </div>
    </>
  );
}
