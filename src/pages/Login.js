import pepe from "../assets/images/pepe.png";
import LoginForm from "../features/authentication/components/LoginForm";
import { useState } from "react";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* conditional rendering for error */}
        {error && (
          <div className="relative flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 items-center">
            <span>{error.message}</span>
          </div>
        )}
        <div>
          <img className="mx-auto h-28 w-auto" src={pepe} alt="Mr.pepe" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <LoginForm
          data={data}
          error={error}
          setData={setData}
          setError={setError}
        />
      </div>
    </div>
  );
}

export default Login;
