import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="w-full flex flex-col justify-center items-center mx-auto max-w-screen-xl p-4 md:flex-row md:items-center md:justify-between">
        <p className="text-center flex justify-center items-center text-gray-500 dark:text-gray-400">
          <span className="text-sm">@ 2030-</span>
          <span>
            <Link to="/" className="hover:underline">
              Cinemate™
            </Link>
          </span>
          <span className="text-sm">. All Rights Reserved.</span>
        </p>
        <ul className="flex flex-wrap justify-center items-center text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
