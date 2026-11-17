
import { Link } from "react-router";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import AuthLayout from "../../components/auth/authLayout";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // API integration comes next
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Enter your credentials to access your classroom."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm mb-2 text-slate-300">
            Email address
          </label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl bg-[#151D35] border border-slate-700 px-4 py-3 outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-slate-300">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="w-full rounded-xl bg-[#151D35] border border-slate-700 px-4 py-3 pr-12 outline-none focus:border-indigo-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 py-3 font-semibold transition-colors"
        >
          Sign in
        </button>
      </form>

      <p className="text-center text-sm text-slate-400 mt-7">
        Don't have an account?{" "}
        <Link to="/register" className="text-indigo-400 hover:text-indigo-300">
          Create account
        </Link>
      </p>
    </AuthLayout>
  );
}
