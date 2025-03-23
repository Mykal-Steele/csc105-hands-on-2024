import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, Link } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email("enter a valid email"),
  password: z.string().min(6, "password must be at least 6 characters"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#212A31] flex items-center justify-center p-4">
      <div className="bg-[#212A31] border border-[#2E3944] p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#748D92]">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-[#D3D9D4] text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 bg-[#212A31] border border-[#2E3944] rounded text-[#D3D9D4] focus:outline-none focus:border-[#124E66] focus:ring-1 focus:ring-[#124E66]"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-[#D3D9D4] text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 bg-[#212A31] border border-[#2E3944] rounded text-[#D3D9D4] focus:outline-none focus:border-[#124E66] focus:ring-1 focus:ring-[#124E66]"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#124E66] text-[#D3D9D4] py-2 px-4 rounded hover:bg-[#2E3944] transition-colors"
          >
            Log In
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/signup" className="text-[#124E66] hover:text-[#748D92]">
            Don't have an account? SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
