import CompanyProfile from "../assets/portofolio.png";
import Mobile from "../assets/mobile/mobile.png";

export default function Project() {
  return (
    <div className="h-max mx-20 mt-32 md:mt-10">
      <h1
        className="text-4xl font-bold text-blue-gray-100 text-center"
        id="project"
        data-aos="fade-up">
        MyProject
      </h1>
      <div className="mt-10">
        <div
          className="rounded md:w-[80%] overflow-hidden shadow-lg bg-gray-200 mx-auto"
          data-aos="fade-up">
          <img
            src={CompanyProfile}
            className="w-[90%] py-5 flex mx-auto"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 bg-white">
            <div className="font-bold text-xl mb-2 text-[#181818]">
              Personal Website
            </div>
            <p className="text-[#181818]">
              I designed a personal website project with ReactJS, TailwindCSS,
              and TypeScript. Modern design and responsive functionality are my
              main focus to provide the best experience for visitors
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 bg-white">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #reactJs
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #tailwind
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #typescript
            </span>
          </div>
        </div>
        <div
          className="md:w-[80%] rounded overflow-hidden shadow-lg mt-10 bg-gray-200 mx-auto"
          data-aos="fade-up">
          <img
            src={Mobile}
            className="w-[90%] py-5 flex mx-auto"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 bg-white">
            <div className="font-bold text-xl mb-2 text-[#181818]">
              Cashier Mobile
            </div>
            <p className="text-[#181818] text-base">
              The mobile cashier application was built with Flutter and Laravel
              for the backend REST API. This application makes it easy to manage
              transactions, add items, and process orders efficiently.
            </p>
          </div>
          <div className="px-6  pb-2 bg-white">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #laravel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #flutter
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #rest-api
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
