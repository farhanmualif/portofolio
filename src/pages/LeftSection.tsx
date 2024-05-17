import MyProfile from "../components/image";
import Navbar from "../components/navbar";

export default function LeftSection() {
  return (
    <div className="lg:visible">
      <div className="lg:fixed left-0 top-0 min-w-[25%] bg-[#0F162B] flex flex-col min-h-screen">
        <h2 className="text-blue-gray-100 text-3xl font-bold mx-auto mb-4 pt-16">
          Wellcome, 👋
        </h2>
        <div className="my-20 mx-auto">
          <MyProfile />
        </div>
        <div className="flex-grow flex justify-center mt-10">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
