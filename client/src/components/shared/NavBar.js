import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Breadcrumb, Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

const NavBar = () => {
  const auth = useContext(AuthContext);

  // Class method
  // const {user} = useContext(AuthContext);
  // if(user) => logout
  // if(!user) => login/register

  // Function to render links/buttons on the right side of NavBar
  const renderRightNav = () => {
    if (auth.user) {
      return <Breadcrumb onClick={auth.handleLogout}>Logout</Breadcrumb>;
    }
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="/login">Login</Breadcrumb.Item>
        <Link to="/register">Register</Link>
      </Breadcrumb>
    );
  };

  // Function to render links on left side of NavBar
  // Different links will appear depending on user authentication
  const renderLeftNav = () => {
    if (auth.user) {
      return (
        <>
          <Breadcrumb>
            <Breadcrumb.Item href="/posts">
              <UserOutlined />
              <span>Posts</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/new_post">
              <span>New Post</span>
            </Breadcrumb.Item>
            <Link to="/favorites">Favorites</Link>
          </Breadcrumb>
        </>
      );
    }

    return (
      <Breadcrumb>
        <Link to="/posts">Memester</Link>
      </Breadcrumb>
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>{renderLeftNav()}</div>
      <div>{renderRightNav()}</div>
    </div>
  );
};

export default NavBar;
