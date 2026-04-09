import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signUp} = useContext(UserContext);

  const navigate = useNavigate();

  const onSubmit = async (user_data) => {
    await signUp({
      email: user_data.email,
      password: user_data.password,
      options: {
        data: {
          first_name: user_data.first_name,
          last_name: user_data.last_name,
          username: user_data.username,
        },
      },
    });
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-100 ">
        <h1 className="text-2xl font-bold mb-4  ">Register</h1>
        <div className="flex  items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full max-w-sm"
          >
            <input
              type="text"
              placeholder="name"
              className="input input-lg mb-5 w-full"
              {...register("first_name", { required: true })}
            />
            {errors.first_name && (
              <span className="text-red-500">First name is required</span>
            )}

            <input
              type="text"
              placeholder="last name"
              className="input input-lg mb-5 w-full"
              {...register("last_name", { required: true })}
            />
            {errors.last_name && (
              <span className="text-red-500">Last name is required</span>
            )}

            <input
              type="text"
              placeholder="username"
              className="input input-lg mb-5 w-full"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-red-500">Username is required</span>
            )}

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
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
