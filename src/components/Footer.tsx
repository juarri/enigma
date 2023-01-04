import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 px-8">
      <div className="flex justify-between">
        <span>
          by <a href="https://juarri.com">juarri</a>
        </span>

        <div className="flex gap-4">
          <a
            href="https://github.com/juarri/lips"
            className="font-bold text-rose-300 hover:underline"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
