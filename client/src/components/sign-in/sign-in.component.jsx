import React from "react";
import { Form } from "react-bootstrap";
import FormInput from "../form-input/form-input.component";
// import CustomButton from "../custom-button/custom-button.component";
import { motion } from "framer-motion";
import { auth } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <motion.div className="sign-in container">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <Form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <button
              onClick={() => alert("You are logged in")}
              className="btn btn-dark"
            >
              Login
            </button>
          </div>
        </Form>
      </motion.div>
    );
  }
}

export default SignIn;
