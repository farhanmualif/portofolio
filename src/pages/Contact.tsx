export default function Contact() {
  return (
    <div
      className="mt-40 pb-10 h-max text-blue-gray-100"
      id="contact"
      data-aos="fade-up">
      <h1 className="text-4xl font-bold text-center" id="project">
        Contact
      </h1>
      <form className="w-[80%] mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-blue-gray-100">
            Your name
          </label>
          <input
            type="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-blue-gray-100 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-blue-gray-100">
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="bg-gray-50 border border-gray-300 text-blue-gray-100 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-blue-gray-100">
            Your subject
          </label>
          <input
            type="subject"
            id="subject"
            placeholder="Subject"
            className="bg-gray-50 border border-gray-300 text-blue-gray-100 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-blue-gray-100">
            Your message
          </label>
          <textarea
            id="message"
            rows={5}
            className="block p-2.5 w-full text-sm text-blue-gray-100 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </div>
  );
}
