import { Avatar, Drawer } from "@mui/material";
import * as React from "react";
import "./sidebar.css";
import me from "assets/img/me.jpg";

interface Props {
  open: boolean;
}
export const Sidebar = (props: Props): React.ReactElement => {
  return (
    <div className="aside aside-left aside-fixed  d-flex flex-column flex-row-auto">
      <>
        <Drawer
          className={props.open ? "drawerOpen" : "drawerClose"}
          variant="persistent"
          anchor={"left"}
          open={true}
        >
          <div className="brand flex-column-auto">
            <div className="kt-aside__brand-tools pointer">
              <div
                className={
                  props.open
                    ? "brand-toggle btn btn-sm px-0"
                    : " brand-toggle btn btn-sm px-0 active"
                }
              ></div>
            </div>
          </div>

          <div
            className="aside-menu-wrapper flex-column-fluid"
            id="kt_aside_menu_wrapper"
          >
            <div
              id="kt_aside_menu"
              className="aside-menu scroll ps ps--active-y"
              data-ktmenu-vertical="1"
              data-ktmenu-scroll="1"
              data-ktmenu-dropdown-timeout="500"
            >
              <div className="info">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                    alt="Sahar Behbahani"
                    src={me}
                    sx={{ width: "75px", height: "75px" }}
                  />
                </div>
                <div className="personnel-info">
                  <div className="username">Sahar Behbahani</div>
                </div>
                <br />
              </div>
              <ul className="menu-nav py-1">
                <li className={"menu-item"}>
                  <span className="menu-text">Category Form</span>
                </li>
              </ul>
            </div>
          </div>
        </Drawer>
      </>
    </div>
  );
};
