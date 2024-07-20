import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import ThreeDotLoader from "../loaders/ThreeDotLoader";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (_data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard/users');
    }, 2000);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="login__input-container">
        <input type="email" placeholder="Email" {...register("email", { required: true })} />
        {errors.email && <span className="login__error">Email Address is required</span>}
      </div>
      <div className="login__input-container">
        <div className="login__password">
          <input type={showPassword ? "text" : "password"} placeholder="Password" {...register("password", { required: true })} />
          <span className="login__password-toggler" onClick={togglePassword}>{showPassword ? "HIDE" : "SHOW"}</span>
        </div>
        {errors.password && <span className="login__error">Password is required</span>}
      </div>
      <small>FORGOT PASSWORD?</small>
      <button disabled={isLoading}>{isLoading ? "LOADING" : "LOG IN"} {isLoading && <ThreeDotLoader />}</button>
    </form>
  );
};

export default LoginForm;
