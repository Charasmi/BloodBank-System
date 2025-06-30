import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";
import banner1 from "../../assets/banner1.jpg";
import '../../styles/auth.css';

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-12 col-md-8 form-banner">
            <img src={banner1} alt="loginImage" />
          </div>
          <div className="col-12 col-md-4 form-container">
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;