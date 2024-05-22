import Image from "next/image";

const Login = () => {
  return (
    <>
      <div className="w-full h-screen flex items-start">
        <div className='relative w-3/5 h-full bg-[#1679AB] flex flex-col'>
          <div className='absolute top-[30%] left-[10%] flex flex-col'>
            <h1 className='text-4xl text-white font-bold my-3'>GoReader</h1>
            <p className='text-l text-white font-medium mb-2'>Monitoring Air dengan Mudah dan Praktis</p>
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-md shadow-md hover:bg-gray-200 w-fit mt-2">Read More</button>
          </div>
        </div>

        <div className='w-2/5 h-full bg-white flex flex-col p-20'>
          <div className='w-full flex flex-col'>
            <h3 className='text-2xl text-black font-bold mb-2'>Hello!</h3>
            <p className='text-l mb-1'>Sign in to your account</p>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-gray-900 hover:text-[#1679AB]">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <a
                  href="@/src/app/page"
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#1679AB] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </a>

              </div>
              <div className="text-sm flex justify-center">
                <a href="@/src/app/register" className="font-semibold text-gray-900 hover:text-[#1679AB]">
                  Don't have an account?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;