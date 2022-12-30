import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <form className="mt-8 space-y-6" action="/signup" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div className="grid grid-cols-2">
          <TextInput
            id="firstname"
            name="firstname"
            type="text"
            autoComplete="given-name"
            required={true}
            className="appearance-none w-full px-3 py-2 my-3 mr-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="First name"
          />
          <TextInput
            id="lastname"
            name="lastname"
            type="text"
            autoComplete="family-name"
            required
            className="appearance-none relative w-full px-3 py-2 my-3 ml-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Last name"
          />
        </div>
        <div>
          <TextInput
            id="email_address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none  relative block w-full px-3 py-2 my-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div>
          <TextInput
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none  relative block w-full px-3 py-2 my-6 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>
      <div>
        <Button
          type="submit"
          id="submit_btn"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <FontAwesomeIcon
              icon={faCheck}
              className="h-5 w-5 py-0.5 px-1 text-gray-300 group-hover:text-gray-200"
            />
          </span>
          <span>Submit</span>
        </Button>
      </div>
      <div className="text-center">
        <span className="text-gray-400">
          Have an account?
          <Link to="/login" className="text-blue-400">
            Sign in
          </Link>
        </span>
      </div>
    </form>
  );
};

export default SignupForm;
