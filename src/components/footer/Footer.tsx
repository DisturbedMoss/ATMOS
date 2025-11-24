import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <>
      <div className="font-poppins bg-[#0F1724] text-[#faf9f6]">
        <div className="flex justify-between px-3 py-10">
          <div>ATMOS</div>
          <div>Copyright &copy; 2025</div>
          <div className="flex justify-between gap-2">
            <ul>
              <li>
                <a href="">Futuro</a>
              </li>
            </ul>
            <span>|</span>
            <ul>
              <li>
                <a href="">Creditos</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between gap-2">
            <div>
              <LinkedinLogoIcon size={24} weight="bold" />
            </div>
            <div>
              <GithubLogoIcon size={24} weight="bold" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
