import React from "react";
import Logo2 from "../../assets/Logo2.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto py-14 px-6">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-7">
          <div className="lg:col-span-4 col-span-12">
            <h1 className="text-2xl md:text-3xl font-bold text-[#3291a8]">
              Code<span className="text-[#24c964]">Connect</span>
            </h1>
            <p className="mt-6">
              At CodeConnect, we specialize in matching top IT talent with
              leading companies. Our mission is to empower businesses by
              providing them with highly skilled professionals and help job
              seekers find rewarding career opportunities. With a focus on
              innovation and quality, we are committed to transforming the IT
              recruitment landscape through personalized solutions and
              exceptional service.
            </p>
          </div>
          <div className="lg:col-span-2 md:col-span-4 col-span-12">
            <h5 className="tracking-wide text-gray-100 font-semibold">
              Company
            </h5>
            <ul className="list-none mt-6 space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Find A Job
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-12">
            <h5 className="tracking-wide text-gray-100 font-semibold">
              Important Links
            </h5>
            <ul className="list-none mt-6 space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Terms of Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Privarcy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  POPIA Act
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-12">
            <h5 className="tracking-wide text-gray-100 font-semibold">
              Newsletter
            </h5>
            <p>Get latest updates of new job opportunity</p>
            <form>
              <div className="my-3">
                <input
                  type="email"
                  className="mt-3 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-500"
                  placeholder="name@example.com"
                />
                <button className="button-action w-full my-8">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700">
        <div className="md:text-left text-center container mx-auto py-7 px-6">
          <p className="mb-0">&copy; LessEgo Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
