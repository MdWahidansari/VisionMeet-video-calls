import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-2xl mx-auto bg-base-100 rounded-xl overflow-hidden shadow-lg">
        {/* LOGIN FORM SECTION */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col">
          {/* LOGO */}
          <div className="mb-4 flex items-center gap-2">
            <ShipWheelIcon className="size-9 text-primary" />
            <span className="text-2xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              VisionMeet
            </span>
          </div>

          {/* ERROR MESSAGE DISPLAY */}
          {error && (
            <div className="alert alert-error mb-3">
              <span>
                {error?.response?.data?.message || "Something went wrong"}
              </span>
            </div>
          )}

          <form onSubmit={handleLogin} className="flex-1">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold">Welcome Back</h2>
                <p className="text-sm opacity-70">
                 Welcome back! Sign in to continue your language journey.
                </p>
              </div>

              {/* Email */}
              <div className="form-control w-full space-y-2">
                <label htmlFor="email" className="label-text">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="hello@gmail.com"
                  className="input input-bordered w-full"
                  value={loginData.email}
                  autoComplete="email"
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control w-full space-y-2">
                <label htmlFor="password" className="label-text">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="***********"
                  className="input input-bordered w-full"
                  value={loginData.password}
                  autoComplete="current-password"
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <span className="loading loading-spinner loading-xs"></span>
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>

              {/* Sign Up Link */}
              <div className="text-center mt-4">
                <p className="text-sm">
                 No account yet? Join us today!{" "}
                  <Link to="/signup" className="text-primary hover:underline">
                    Create one
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* IMAGE SECTION */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-6">
            <div className="relative aspect-square max-w-sm mx-auto">
              <img
                src="/i.png"
                alt="Language connection illustration"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">
               Meet language partners worldwide
              </h2>
              <p className="opacity-70">
               Make friends while practicing conversations and improving your language skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
