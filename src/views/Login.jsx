import { useNavigate } from "react-router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const { login } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (user_data) => {
    await login({
      email: user_data.email,
      password: user_data.password,
    });
    navigate("/");
  };

  return (
    <>
      <div className="auth_page flex flex-col items-center justify-center min-h-screen bg-100 ">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="auth_form">
          <input
            type="email"
            placeholder="email"
            className="input input-lg mb-5 w-full"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
          <input
            type="password"
            placeholder="password"
            className="input input-lg mb-5 w-full"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
