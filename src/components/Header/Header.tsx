import { NavLink } from "react-router-dom";

type HeaderProps = {
    isConnected?: boolean;
};

const Header = ({ isConnected = false }: HeaderProps) => {
    return (
        <div className="header">
            <NavLink className="logo" to={"/"}>
                <img src="" alt="argentbank logo" />
            </NavLink>
            <div className="user">
                <div className="userPicture">
                    <img src="" alt="user icon" />
                    {isConnected ? "User name" : "Sign In"}
                </div>

                {isConnected && (
                    <div className="logout">
                        <img src="" alt="logout icon" />
                        <p>Sign Out</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
