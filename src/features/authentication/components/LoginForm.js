import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import LockSvg from "./LockSvg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const LoginForm = (props) => {
  return (
    <form className="mt-8 space-y-6" action="/login" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <TextInput
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Email address"
          required={true}
        />
        <TextInput
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Password"
          required={true}
        />
      </div>

      {/** Remember me button - not used at the moment */}
      {/* <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember_me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>D
      </div> */}
      <div>
        <Button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 my-1 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          text="Sign in"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockSvg />
          </span>
        </Button>
        <Link to="/signup">
          <div className="group relative w-full flex justify-center py-2 px-4 my-1 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <FontAwesomeIcon
                icon={faUserPlus}
                className="h-5 w-5 py-0.5 px-1 text-gray-300 group-hover:text-gray-200"
              />
            </span>
            <span>Create an account</span>
          </div>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
