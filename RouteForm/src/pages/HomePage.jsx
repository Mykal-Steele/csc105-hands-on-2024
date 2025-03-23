import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#212A31]">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-12 text-[#748D92]">
          Welcome to the Home Page
        </h1>

        <div className="max-w-sm mx-auto">
          <h2 className="text-xl font-medium text-[#748D92] mb-4 text-center">
            Color Palette Used For This Site
          </h2>

          <div
            className="relative border-2 border-[#2E3944] rounded-md overflow-hidden shadow-lg mx-auto"
            style={{ width: "354px", height: "767px" }}
          >
            <div className="absolute top-0 left-0 right-0 h-1/5 bg-[#212A31] p-4">
              <div className="flex items-center h-full">
                <div className="w-12 h-12 bg-[#212A31] border border-[#2E3944] rounded-md mr-4"></div>
                <div>
                  <p className="text-[#748D92] font-bold">Primary Background</p>
                  <p className="text-[#D3D9D4]">#212A31</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/5 left-0 right-0 h-1/5 bg-[#212A31] p-4">
              <div className="flex items-center h-full">
                <div className="w-12 h-12 bg-[#2E3944] border border-[#2E3944] rounded-md mr-4"></div>
                <div>
                  <p className="text-[#748D92] font-bold">
                    Secondary Background & Borders
                  </p>
                  <p className="text-[#D3D9D4]">#2E3944</p>
                </div>
              </div>
            </div>

            <div className="absolute top-2/5 left-0 right-0 h-1/5 bg-[#212A31] p-4">
              <div className="flex items-center h-full">
                <div className="w-12 h-12 bg-[#124E66] border border-[#2E3944] rounded-md mr-4"></div>
                <div>
                  <p className="text-[#748D92] font-bold">
                    Buttons & Interactive Elements
                  </p>
                  <p className="text-[#D3D9D4]">#124E66</p>
                </div>
              </div>
            </div>

            <div className="absolute top-3/5 left-0 right-0 h-1/5 bg-[#212A31] p-4">
              <div className="flex items-center h-full">
                <div className="w-12 h-12 bg-[#748D92] border border-[#2E3944] rounded-md mr-4"></div>
                <div>
                  <p className="text-[#748D92] font-bold">Headings & Accents</p>
                  <p className="text-[#D3D9D4]">#748D92</p>
                </div>
              </div>
            </div>

            <div className="absolute top-4/5 left-0 right-0 h-1/5 bg-[#212A31] p-4">
              <div className="flex items-center h-full">
                <div className="w-12 h-12 bg-[#D3D9D4] border border-[#2E3944] rounded-md mr-4"></div>
                <div>
                  <p className="text-[#748D92] font-bold">Text & Highlights</p>
                  <p className="text-[#D3D9D4]">#D3D9D4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
