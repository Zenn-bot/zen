import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full bg-slate-800 py-4 shadow-lg top-0 z-50">
      <div className="navbar bg-base-100 w-[90%] m-auto justify-between text-white flex items-center">
        <div className="flex-1 ">
          <a className="btn btn-ghost normal-case text-xl">
            <h1>
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl font-bold text-yellow-300"
              >
                <Link to="/">Seyha</Link>
              </motion.h1>
            </h1>
          </a>
        </div>
        <div className="">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden lg:flex space-x-8 menu menu-horizontal p-0 items-center  "
          >
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Skills", path: "/skills" },
              { name: "Experience", path: "/experience" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <motion.li
                key={item}
                className="hover:text-yellow-300 text-lg font-medium hover:bg-slate-500 px-3 py-2 rounded-md translate-all duration-300 ease-in-out"
              >
                <Link to={item.path} className="">
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <IoMdMenu className="text-3xl cursor-pointer" />
          ) : (
            <IoMdClose className="text-3xl cursor-pointer" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidde"
          >
            <ul className="flex flex-col text-white items-center py-5 space-y-5 text-lg">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Skills", path: "/skills" },
                { name: "Experience", path: "/experience" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <motion.li
                  key={item}
                  className="hover:text-yellow-300 font-medium hover:bg-slate-500 px-3 py-2 rounded-md translate-all duration-300 ease-in-out w-1/2 text-center"
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className="hover:text-gray-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
