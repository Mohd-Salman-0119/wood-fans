import React, { useState } from "react";
import InputFeild from "../../Components/Common/InputFeild";
import Button from "../../Components/Common/Button";
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { signUpNewUser } from "../../Redux/Auth/action";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = ({ onClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const redirectToHome = () => {
    onClick()
  };

  const theme = useSelector((store) => store.themeReducer.theme);

  const errorMessage = useSelector((store) => store.authReducer.errorMessage);
  const successMessage = useSelector(
    (store) => store.authReducer.successMessage
  );

  if (successMessage) {
    toast.success(successMessage);
  }
  if (errorMessage) {
    toast.error(errorMessage);
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email && !name && !password) {
      toast.info("Fill all the feild.");
    }
    await dispatch(signUpNewUser(email, password, name));
    onClick()
  };

  return (
    <>
      <h1 className="mb-5 md:mb-10 font-semibold text-3xl mt-2">Sign Up</h1>
      {/* Sign Up From */}
      <form onSubmit={handleSignUp}>
        <InputFeild
          placeholder="Name"
          icon={faUser}
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          error="Name and shouldn't include any special character!"
        />
        <InputFeild
          placeholder="Email"
          icon={faEnvelope}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          error="It should be a valid email address!"
        />
        <InputFeild
          placeholder="Password"
          icon={faLock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          error={
            "Password should be 6-15 characters and include at least 1 letter, 1 number, and 1 special character!"
          }
        />
        <InputFeild
          placeholder="Confirm Password"
          icon={faLock}
          onChange={(e) => setConfirPassword(e.target.value)}
          type="password"
          value={confirmpassword}
          error="Passwords don't match!"
          pattern={password}
        />

        <Button
          text="Sign Up"
          className={`bg-primary-yellow text-black mt-5 hover:border-primary-yellow ${
            theme ? "hover:text-black" : "text-black hover:text-primary-yellow"
          }`}
          type="submit"
        />
      </form>
      <Button
        text="Already have an account? Login"
        className={`mt-3 ${
          theme
            ? "bg-gray-200 text-black"
            : "bg-white text-black hover:text-white"
        }`}
        onClick={onClick}
      />
    </>
  );
};

export default Signup;
