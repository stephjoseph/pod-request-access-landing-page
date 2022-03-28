import logo from "../images/desktop/logo.svg";

const Header = () => {
  return (
    <header className="mt-[3.875rem] mb-[3.563rem] md:mt-[3.125rem] md:ml-10 md:mr-auto md:mb-[9.5rem] xl:mb-[6.438rem] xl:ml-[10.313rem] xl:mt-[6.375rem]">
      <a href="#">
        <img src={logo} alt="" />
      </a>
    </header>
  );
};

export default Header;
