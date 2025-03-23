import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const FavouriteDetailPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const size = searchParams.get("size") || "";

  return (
    <div className="min-h-screen bg-[#212A31]">
      <Navbar />
      <div className="container mx-auto p-4 md:p-8">
        <div className="max-w-lg mx-auto bg-[#212A31] border border-[#2E3944] p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-[#748D92]">
            Favourite Detail
          </h1>
          <p className="text-lg text-[#D3D9D4]">
            Your favourite post is {q}. Post ID is {id}. Size is {size}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavouriteDetailPage;
