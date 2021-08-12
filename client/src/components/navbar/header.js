import React from "react";
import { FaRegUser } from "react-icons/fa";
const HeaderNav = () => {
  return (
    <React.Fragment>
      <nav
        style={{
          height: "25px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
        className="container"
      >
        <ul>
          <li style={{ textDecoration: "none", listStyle: "none" }}>
            <FaRegUser />
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default HeaderNav;
