import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#212A31] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-[#748D92]">
        404 - Page Not Found
      </h1>
      <p className="text-[#D3D9D4] text-lg mb-6">
        The page you are looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-[#124E66] text-[#D3D9D4] rounded hover:bg-[#2E3944] transition-colors"
      >
        Go back to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
