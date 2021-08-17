/*
    Date : 12/08/2021
    Name : Yash Gautambhai Sarvaiya
    purpose "Making Sidebar for Panel"

*/
import React from "react";
import logo from "./logo.png"; // infilon top logo
import Mainlogo from "./Main-logo-3.png"; // infilon bottom logo
import styles from "./SideBar.module.css"; // css
import { Link } from "react-router-dom"; // router file
import SideBar_Json from "./SideBar_Json.json"; // fetch json data in sidebar_json file

const SideBar = (props) => {

  const [NewDiv, setNewDiv] = React.useState(false);
  const [newIconText, setnewIconText] = React.useState(false);
  const [newFooter, setnewFooter] = React.useState(false);
  const [newIconeHover, setIconHover] = React.useState(false);
  const [newclass, setnewClass] = React.useState("");

  // top right toggle cilck hover
  const ToggleSetDiv = () => {
    setNewDiv(!NewDiv);
    setnewIconText(!newIconText);
    setnewFooter(!newFooter);
    props.newSidebar();
  };

  // before hover only show 3 dot aafter hover show text
  const showText = () => {
    setIconHover(false);
  };

  // text hide
  const hideText = () => {
    setIconHover(true);
  };

  // cilck time set class active
  const activeClass = () => {
    if (newclass === "active") {
      setnewClass("");
    } else {
      setnewClass("active");
    }
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div
          onMouseEnter={showText} // onMouseEnter (hover) time show text
          onMouseLeave={hideText} // onMouseLeave (out) time hide text
          className={`${
            styles[NewDiv ? "sidebar-part-toggle" : "sidebar-part"]
          }`}
        >
          <div className={`row ${styles["sidebar-top-inside"]}`}>
            <div className={`col-md-3`} style={{ padding: "0 0 0 5px" }}>
              <img
                className={`${styles["Main-logo-size"]}`}
                src={Mainlogo}
                alt="new"
              ></img>
            </div>
            <div className={"col-md-7"}>
              <img
                className={`${styles["logo-size"]}`}
                src={logo}
                alt="new"
              ></img>
            </div>
            <div className={`col-md-2 ${styles["icon-size"]}`}>
              <i
                className="fal fa-record-vinyl"
                onClick={() => {
                  ToggleSetDiv();
                }}
              ></i>
            </div>
          </div>

          <div className={`row ${styles["sidebar-section"]}`}>
            <div className={`${styles["sidebar-section-inside"]}`}>
              {SideBar_Json.map((item) => {
                return (
                  <>
                    {item.main_name && newIconText ? (
                      newIconeHover ? (
                        <div>
                          <i
                            className={`fal fa-ellipsis-h ${styles["main-icon-text"]}`}
                          ></i>
                        </div>
                      ) : (
                        <div className={`${styles["main-text"]}`}>
                          {item.main_name}{" "}
                        </div>
                      )
                    ) : (
                      <div className={`${styles["main-text"]}`}>
                        {item.main_name}
                      </div>
                    )}
                    {item.data
                      ? item.data.map((item_item) => {
                          return (
                            <ul>
                              <li
                                className={`${styles["row-text-active"]}`}
                                onClick={activeClass}
                              >
                                <Link
                                  className={`row ${
                                    newclass ? styles["active"] : ""
                                  }`}
                                  to="/"
                                >
                                  <div className={`col-md-2`}>
                                    <i class={item_item.main_icon}></i>
                                  </div>
                                  <div className={`col-md-8 pl-3`}>
                                    <span>{item_item.name}</span>
                                  </div>
                                  <div className={`col-md-2 pl-2`}>
                                    <i class={item_item.right_icon}></i>
                                  </div>
                                </Link>

                                {item_item._children
                                  ? item_item._children.map((newitem) => {
                                      return (
                                        newitem && (
                                          <ul
                                            className={`${styles["dropdown-content"]}`}
                                          >
                                            <li
                                              className={`row ${styles["li-hover"]} pt-2`}
                                            >
                                              <div className={`col-md-2`}>
                                                <i
                                                  className={newitem.main_icon}
                                                ></i>
                                              </div>
                                              <div className={`col-md-8 pl-3`}>
                                                <Link to="/">
                                                  <span>{newitem.name}</span>
                                                </Link>
                                              </div>
                                              <div className={`col-md-2 pl-2`}>
                                                <i
                                                  className={newitem.right_icon}
                                                  style={{
                                                    padding: "0 0 0 10px",
                                                  }}
                                                ></i>
                                              </div>
                                              <ul
                                                className={`${styles["dropdown-content-child"]}`}
                                              >
                                                {newitem.sub_children
                                                  ? newitem.sub_children.map(
                                                      (newnewitem) => {
                                                        return (
                                                          newnewitem && (
                                                            <li
                                                              className={`row ${styles["li-hover"]} pt-2`}
                                                            >
                                                              <Link
                                                                exact
                                                                to="/"
                                                              >
                                                                <span>
                                                                  {
                                                                    newnewitem.name
                                                                  }
                                                                </span>
                                                              </Link>
                                                            </li>
                                                          )
                                                        );
                                                      }
                                                    )
                                                  : null}
                                              </ul>
                                            </li>
                                          </ul>
                                        )
                                      );
                                    })
                                  : null}
                              </li>
                            </ul>
                          );
                        })
                      : null}
                  </>
                );
              })}
            </div>
          </div>

          {newFooter ? (
            " "
          ) : (
            <div className={`row ${styles["sidebar-footer-part"]}`}>
              <div className={"col-md-10"}>
                <img
                  className={`${styles["logo-size"]}`}
                  src={logo}
                  alt="new"
                ></img>
              </div>
              <div className={`col-md-2 ${styles["icon-size"]}`}>
                <i className="fal fa-record-vinyl"></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
