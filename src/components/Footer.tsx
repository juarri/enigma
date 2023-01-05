import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between">
        <span>
          by{" "}
          <a href="https://juarri.com" className="text-rose-400 font-bold">
            juarri
          </a>
        </span>

        <div className="flex gap-4">
          <a
            href="https://github.com/juarri/lips"
            className="text-rose-300 font-bold hover:underline"
          >
            github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
