import Logo from "./Logo";

function Header() {
  return (
    <div className="flex justify-center">
      <nav className="p-4 lg:p-5 lg:px-8 text-[18px] rounded-full text-white bg-[#2E2E2E] flex justify-between px-8 items-center fixed md:min-w-[700px] lg:min-w-[1000px] top-6">
        <ul>
          <li>
            <a href="#">
              <Logo />
            </a>
          </li>
        </ul>
        <ul className="flex">
          <li className="hover:bg-gradient-to-tr from-[#4b97f3] to-[#a8bdea] hover:text-transparent bg-clip-text mr-8 duration-200">
            <a href="#">Home</a>
          </li>
          <li className="hover:bg-gradient-to-tr from-[#4b97f3] to-[#a8bdea] hover:text-transparent bg-clip-text mr-8 duration-200">
            <a href="/#skills">Skills</a>
          </li>
          <li className="hover:bg-gradient-to-tr from-[#4b97f3] to-[#a8bdea] hover:text-transparent bg-clip-text mr-8 duration-200">
            <a href="/#work">Work</a>
          </li>
          <li className="hover:bg-gradient-to-tr from-[#4b97f3] to-[#a8bdea] hover:text-transparent bg-clip-text mr-8 duration-200">
            <a href="/#resume">Resume</a>
          </li>
          <li className="hover:bg-gradient-to-tr from-[#4b97f3] to-[#a8bdea] hover:text-transparent bg-clip-text mr-8 duration-200">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
