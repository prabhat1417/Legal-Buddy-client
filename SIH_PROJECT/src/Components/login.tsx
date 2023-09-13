import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import img2 from "../assets/two.svg";
import "../Components/style/loginstyle.css"

interface FormData {
  username: string;
  password: string;
}

function Login() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    //API LINK 
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data stored successfully!");
      } else {
        console.error("Failed to store data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-left-container">
          <h1>Welcome back!</h1>
          <p className="login-top-title">
            Legistrive: Bridging the Gap Between Legal Talent and Opportunities, One Connection at a Time.
          </p>

          <div className="login-left-container-sub">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <button className="login-btn-login" onClick={handleSubmit}>
              Login
            </button>
          </div>

          <span className="login-text">Or Continue With</span>
          <div className="login-icons">
            <div className="icon">
              <i className="fa-brands fa-google"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-facebook"></i>
            </div>
          </div>

          <p className="login-sub-title-login">Not A Member? Register here!</p>
          <Link className="login-register-btn" to="/">
            Register here!
          </Link>
        </div>

        <div className="login-container-right"></div>

        <div className="login-right-container">
          <img src={img2} alt="img" />
          <p>Unlocking Legal Opportunities and Talent with Legistrive.</p>
        </div>
      </div>
    </>
  );
}

export default Login;
