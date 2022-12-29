import pepe from "../assets/images/pepe.png";
console.log("signup called...");

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/**if(errFlash.length > 0) { */}
        <div className="relative flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 items-center">
          <span> error message here</span>
        </div>
        <div>
          <img className="mx-auto h-28 w-auto" src={pepe} alt="Mr.pepe" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="/signup" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="flex">
              <label htmlFor="firstname" className="sr-only">
                First name
              </label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                autoComplete="given-name"
                required
                className="appearance-none relative block w-1/2 px-3 py-2 my-3 mr-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First name"
              />
              <label htmlFor="lastname" className="sr-only">
                Last name
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                autoComplete="family-name"
                required
                className="appearance-none  relative block w-1/2 px-3 py-2 my-3 ml-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last name"
              />
            </div>

            <div>
              <label htmlFor="email_address" className="sr-only">
                Email address
              </label>
              <input
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
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
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
            <button
              type="submit"
              id="submit_btn"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <i className="fas fa-check"></i>
              </span>
              <span>Submit</span>
            </button>
          </div>
          <div className="text-center">
            <span className="text-gray-400">
              Have an account?
              <a href="/login" className="text-blue-400">
                Sign in
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
