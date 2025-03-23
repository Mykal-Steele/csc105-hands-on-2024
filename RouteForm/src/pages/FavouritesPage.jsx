import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const favSchema = z.object({
  number: z
    .number()
    .min(1, "number must be between 1 and 100")
    .max(100, "number must be between 1 and 100"),
  q: z.enum(["love", "like"], {
    errorMap: () => ({ message: "select 'love' or 'like'" }),
  }),
  size: z.enum(["small", "medium", "large"], {
    errorMap: () => ({ message: "select a valid size" }),
  }),
});

const FavouritesPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(favSchema),
    defaultValues: {
      number: 1,
      q: "love",
      size: "medium",
    },
  });

  const onSubmit = (data) => {
    const { number, q, size } = data;
    navigate(`/fav/${number}?q=${q}&size=${size}`);
  };

  return (
    <div className="min-h-screen bg-[#212A31]">
      <Navbar />
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#748D92]">
          This is the Favourites Page
        </h1>

        <div className="max-w-md mx-auto bg-[#212A31] border border-[#2E3944] p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-[#D3D9D4] font-medium mb-2">
                Number (1-100):
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 bg-[#212A31] border border-[#2E3944] rounded text-[#D3D9D4]"
                {...register("number", { valueAsNumber: true })}
              />
              {errors.number && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.number.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-[#D3D9D4] font-medium mb-2">
                Query Parameter:
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center text-[#D3D9D4]">
                  <input
                    type="radio"
                    value="love"
                    {...register("q")}
                    className="mr-2 accent-[#124E66]"
                  />
                  <span>Love</span>
                </label>
                <label className="inline-flex items-center text-[#D3D9D4]">
                  <input
                    type="radio"
                    value="like"
                    {...register("q")}
                    className="mr-2 accent-[#124E66]"
                  />
                  <span>Like</span>
                </label>
              </div>
              {errors.q && (
                <p className="text-red-400 text-xs mt-1">{errors.q.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-[#D3D9D4] font-medium mb-2">
                Size Parameter:
              </label>
              <select
                className="w-full px-3 py-2 bg-[#212A31] border border-[#2E3944] rounded text-[#D3D9D4]"
                {...register("size")}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
              {errors.size && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.size.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#124E66] text-[#D3D9D4] py-2 px-4 rounded hover:bg-[#2E3944]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FavouritesPage;
