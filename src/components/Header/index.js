import logo from "../../asset/img/logo.svg";

const Header = () => {
    return (
        <header className="d-flex justify-center">
            <img src={logo} alt="" />
        </header>
    );
}

export default Header;