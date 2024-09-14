// import React from 'react'
import appStrings from "../../../constants/appStrings"
import { useForm, Controller } from 'react-hook-form';
import useLogin from "./hook/useLogin";
import Preloader from "../../../components/preloader";
const Login = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const { onSubmit,loading,loginError,message } = useLogin();


  if (loading) {
    return (
        <Preloader />
    );
  }
  return (
    <div>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
          <div className="h-full w-full">
              <img
                className="mx-auto w-full rounded-md object-cover"
                src="/image/login.jpg"
                alt=""
                style={{height:"96%"}}
              />
          </div>
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md ">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl text-center">{appStrings.WELCOME}</h2>
            <div className="flex mx-auto justify-center items-center">
              <img className="max-w-sm w-100 h-20 mt-5 justify-center items-center" src={appStrings.LOGO} />
            
            </div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl mt-5">Sign in</h2>
              {/* <p className="mt-2 text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <a
                  href="#"
                  title=""
                  className="font-semibold text-black transition-all duration-200 hover:underline"
                >
                  Create a free account
                </a>
              </p> */}
              <form className="mt-8"  onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="email" className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <Controller
                          name="email"
                          control={control}
                          rules={{
                            required: 'Email Address Required',
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Enter Valid Email Address',
                            },
                          }}
                          render={({ field }) => (
                            <>
                              <input {...field} type="email" placeholder="Enter Email Address"   className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                              {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                            </>
                          )}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-base font-medium text-gray-900">
                        Password
                      </label>
                      <a
                        href="#"
                        title=""
                        className="text-sm font-semibold text-black hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="mt-2">
                      <Controller
                          name="password"
                          control={control}
                          rules={{
                            required: 'Password is required',
                            minLength: {
                              value: 6,
                              message: 'Password must be at least 6 characters long',
                            },
                          }}
                          render={({ field }) => (
                            <>
                              <input {...field} type="password" placeholder="Enter Password"   className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                              {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                            </>
                          )}
                      />
                    </div>
                  </div>
                  {message && <p style={{color: "green"}}>{{message}}</p>}
                  {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
                  <div>
                    <button type="submit" className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">Sign In</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login