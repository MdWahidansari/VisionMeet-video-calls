import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router-dom";

import useSignup from "../hooks/useSignup";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignup();
  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div
      className="h-screen bg-base-200 flex justify-center items-center px-4"
      data-theme="forest"
    >
      {/* SIGNUP CARD */}
      <div
        className="border border-primary/25 flex flex-col lg:flex-row 
                   w-full max-w-4xl bg-base-100 rounded-xl shadow-lg 
                   overflow-hidden p-6"
      >
        {/* LEFT SIDE FORM */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* LOGO */}
          <div className="mb-4 flex items-center gap-2">
            <ShipWheelIcon className="size-7 text-primary" />
            <span
              className="text-2xl font-bold font-mono bg-clip-text text-transparent 
              bg-gradient-to-r from-blue-500 to-blue-700 tracking-wider"
            >
              VisionMeet
            </span>
          </div>

          {/* ERROR MESSAGE IF ANY  */}
          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response.data.message}</span>
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleSignup} className="space-y-3">
            <div>
              <h2 className="text-lg font-semibold">Create an Account</h2>
              <p className="text-xs opacity-70">
               Sign up on VisionMeet and kickstart your language learning journey!
              </p>
            </div>

            {/* FULL NAME */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="md wahid"
                className="input input-bordered input-sm"
                value={signupData.fullName}
                onChange={(e) =>
                  setSignupData({ ...signupData, fullName: e.target.value })
                }
                required
              />
            </div>

            {/* EMAIL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm">Email</span>
              </label>
              <input
                type="email"
                placeholder="wahid@gmail.com"
                className="input input-bordered input-sm"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm">Password</span>
              </label>
              <input
                type="password"
                placeholder="*********"
                className="input input-bordered input-sm"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                required
              />
              <p className="text-xs opacity-70 mt-1">
               Password length must be a minimum of 6 characters.
              </p>
            </div>

            {/* TERMS */}
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2 text-sm">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs"
                  required
                />
                I agree to the{" "}
                <span className="text-primary hover:underline">Terms</span> and{" "}
                <span className="text-primary hover:underline">Privacy</span>
              </label>
            </div>

            {/* BUTTON */}
            <button type="submit" className="btn btn-primary btn-sm w-full">
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Loading....
                </>
              ) : (
                "Create Account"
              )}
            </button>

            {/* LOGIN LINK */}
            <div className="text-center mt-2">
              <p className="text-xs">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center relative">
          <div className="sticky top-0 h-full flex flex-col items-center justify-center max-w-md p-8">
            <div className="relative mx-auto">
              <img
                src="/i.png"
                alt="language connection illustration"
                className="w-64 h-64 object-contain mx-auto"
              />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">
                Meet and connect with language partners around the world
              </h2>
              <p className="opacity-70">
                Make friends, practice conversations, and grow your language skills together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
