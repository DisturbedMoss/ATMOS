import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="font-poppins bg-[#0F1724] text-[#faf9f6]">
        <div className="flex justify-between px-3 py-10">
          <div><Link to="/">ATMOS</Link></div>
          <div>Copyright &copy; 2025</div>
          <div className="flex justify-between gap-2">
            <ul>
              <li>
                <Link to="/futuro">Futuro</Link>
              </li>
            </ul>
            <span>|</span>
            <ul>
              <li>
                <Link to="/creditos">Creditos</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-between gap-2">
            <div>
              <a href="https://www.linkedin.com/in/vitor-hugo-silva-7b6b14220" target="_blank" rel="noopener noreferrer"><LinkedinLogoIcon size={24} weight="bold" /></a>
            </div>
            <div>
              <a href="http://github.com/disturbedmoss" target="_blank" rel="noopener noreferrer"><GithubLogoIcon size={24} weight="bold" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
