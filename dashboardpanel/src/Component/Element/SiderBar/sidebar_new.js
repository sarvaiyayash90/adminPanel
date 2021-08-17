/*
    Date : 12/08/2021
    Name : Yash Gautambhai Sarvaiya
    purpose "Making Sidebar for Panel"

*/
import React from "react";
import logo from "./logo.png"; // infilon top logo
import Mainlogo from "./Main-logo-3.png"; // infilon bottom logo 
import styles from "./SideBar.module.css"; // css
import {Link} from 'react-router-dom'; // router file

const SideBar = () => {
  
  const [NewDiv, setNewDiv] = React.useState(false);
  const [newIconText,setnewIconText] = React.useState(false);
  const [newFooter,setnewFooter] = React.useState(false);
  const [newIconeHover, setIconHover] = React.useState(false);
  const [newclass,setnewClass] = React.useState('');

  // top right toggle cilck hover 
  const ToggleSetDiv = () => {
    setNewDiv(!NewDiv);
    setnewIconText(!newIconText);
    setnewFooter(!newFooter);
  };    

  // before hover only show 3 dot aafter hover show text 
  const showText = () => {
    setIconHover(false);
  }

  // text hide 
  const hideText = () => {
    setIconHover(true);
  }

  // cilck time set class active
  const activeClass = () =>{
    if(newclass === 'active')
    {
        setnewClass(''); 
    }else{
        setnewClass('active'); 
    }
  }
  
  return (
    <>
      <div className="container-fluid p-0">
        <div onMouseEnter={showText} onMouseLeave={hideText} className={`${styles[ NewDiv ? "sidebar-part-toggle" : "sidebar-part"]}`}>
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
                <ul>
                    <li className={`${styles['row-text-active']}`} onClick={activeClass}>
                        <Link className={`row ${newclass ? styles['active'] : ''}`} to="/">
                            <div className={`col-md-2`}>
                                <i class="fal fa-home-lg-alt"></i>
                            </div>
                            <div className={`col-md-8 pl-3`}>
                                <span>Dashboards</span>
                            </div>
                            <div className={`col-md-2 pl-2`}>
                                <i class="fal fa-chevron-right"></i>
                            </div>
                        </Link>
                        <ul className={`${styles['dropdown-content']}`}>
                          <li className={`row ${styles['li-hover']}`}>
                            <div className="col-md-2">
                              <i class="fal fa-circle"></i>
                            </div>
                            <div className="col-md-10">
                              <Link exact to="/">eCommerce</Link>
                            </div>
                          </li>
                          <li className="row">
                            <div className="col-md-2">
                              <i class="fal fa-circle"></i>
                            </div>
                            <div className="col-md-10">
                              <Link exact to="/">Analytics</Link>
                            </div>
                          </li>
                        </ul>
                    </li>
                </ul>
                {
                newIconText ?
                    newIconeHover ? 
                        <div><i className={`fal fa-ellipsis-h ${styles['main-icon-text']}`}></i></div> 
                    :
                        <div className={`${styles["main-text"]}`}>APPS & PAGES </div>
                :
                    <div className={`${styles["main-text"]}`}>APPS & PAGES </div>
                }
                <ul>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-envelope"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Email</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-comment-alt"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Chat</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-clipboard-check"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Todo</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-calendar-alt"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Calender</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-receipt"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Invoice</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      <i class="fal fa-chevron-right"></i>
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-shopping-cart"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>eCommerce</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      <i class="fal fa-chevron-right"></i>
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-user"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>User</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      <i class="fal fa-chevron-right"></i>
                    </div>
                  </li>
                  <li className={`${styles['row-text-active']}`}>
                    <div className="row">
                      <div className={`col-md-2`}>
                        <i class="fal fa-file"></i>
                      </div>
                      <div className={`col-md-8 pl-3`}>
                        <Link to="/"><span>Pages</span></Link>
                      </div>
                      <div className={`col-md-2 pl-2`}>
                        <i class="fal fa-chevron-right"></i>
                      </div>
                    </div>
                    <ul className={`${styles['dropdown-content']}`}>
                      <li className={`row ${styles['li-hover']}`}>
                        <div className="col-md-2">
                          <i class="fal fa-circle"></i>
                        </div>
                        <div className="col-md-10">
                          <Link exact to="/">Authentication</Link>
                        </div>
                        <ul className={`${styles['dropdown-content-child']}`}>
                          <li><Link exact to="/">Login</Link></li>
                          <li><Link exact to="/">Register</Link></li>
                        </ul>
                      </li>
                      <li className="row">
                        <div className="col-md-2">
                          <i class="fal fa-circle"></i>
                        </div>
                        <div className="col-md-10">
                          <Link exact to="/">Profile</Link>
                        </div>
                      </li>
                      <li className="row">
                        <div className="col-md-2">
                          <i class="fal fa-circle"></i>
                        </div>
                        <div className="col-md-10">
                          <Link exact to="/">FAQ</Link>
                        </div>
                      </li>
                      <li className="row">
                        <div className="col-md-2">
                          <i class="fal fa-circle"></i>
                        </div>
                        <div className="col-md-10">
                          <Link exact to="/">Knowledge Base</Link>
                        </div>
                      </li>
                      <li className="row">
                        <div className="col-md-2">
                          <i class="fal fa-circle"></i>
                        </div>
                        <div className="col-md-10">
                          <Link exact to="/">Pricing</Link>
                        </div>
                      </li>
                      <li className={`row ${styles['li-hover']}`}>
                        <div className="col-md-2">
                          <i class="fal fa-circle"></i>
                        </div>
                        <div className="col-md-10">
                          <Link exact to="/">Blog</Link>
                        </div>
                        <ul className={`${styles['dropdown-content-child']}`}>
                          <li><Link exact to="/">List</Link></li>
                          <li><Link exact to="/">Details</Link></li>
                          <li><Link exact to="/">Edit</Link></li>
                        </ul>
                      </li>
                      <li className="row">
                        <div className="col-md-2">
                          <i class="fal fa-circle"></i>
                        </div>
                        <div className="col-md-10">
                          <Link exact to="/">Mail Templates</Link>
                        </div>
                      </li>
                      <li className="row">
                        <div className="col-md-2">
                          <i class="fal fa-circle"></i>
                        </div>
                        <div className="col-md-10">
                          <Link exact to="/">Miscellaneous</Link>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
                {
                    newIconText ?
                        newIconeHover ? 
                            <div><i className={`fal fa-ellipsis-h ${styles['main-icon-text']}`}></i></div> 
                        :
                            <div className={`${styles["main-text"]}`}>USER INTERFACE </div>
                    :
                    <div className={`${styles["main-text"]}`}>USER INTERFACE</div>
                }
                <ul>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-text"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Typography</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-tint"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Colors</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-feather"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Feather</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-credit-card-blank"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Cards</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      <i class="fal fa-chevron-right"></i>
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-window-maximize"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Components</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      <i class="fal fa-chevron-right"></i>
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-plus-circle"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Extensions</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      <i class="fal fa-chevron-right"></i>
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-pager"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Page Layouts</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      <i class="fal fa-chevron-right"></i>
                    </div>
                  </li>
                </ul>
                {
                    newIconText ? 
                            newIconeHover ? 
                            <div><i className={`fal fa-ellipsis-h ${styles['main-icon-text']}`}></i></div> 
                        :
                            <div className={`${styles["main-text"]}`}>FORMS & TABLES</div>
                    :
                    <div className={`${styles["main-text"]}`}>FORMS & TABLES</div>
                }
                <ul>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fab fa-wpforms"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Forms elements</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      <i class="fal fa-chevron-right"></i>
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fab fa-wpforms"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Form Layout</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-cube"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Form Wizard</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-badge-check"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Form Validation</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fab fa-wpforms"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Form Repeater</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-table"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Bs Table</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-th-large"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Good Table</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                </ul>
                {
                    newIconText ? 
                        newIconeHover ? 
                            <div><i className={`fal fa-ellipsis-h ${styles['main-icon-text']}`}></i></div> 
                        :
                            <div className={`${styles["main-text"]}`}>CHARTS & MAPS </div>
                    :
                    <div className={`${styles["main-text"]}`}>CHARTS & MAPS</div>
                }
                <ul>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-chart-pie-alt"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Charts</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      <i class="fal fa-chevron-right"></i>
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="far fa-map"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Leaflet</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                </ul>
                {
                    newIconText ?
                        newIconeHover ? 
                            <div><i className={`fal fa-ellipsis-h ${styles['main-icon-text']}`}></i></div> 
                        :
                        <div className={`${styles["main-text"]}`}>APPS & PAGES </div>
                    :
                    <div className={`${styles["main-text"]}`}>OTHERS</div>
                }
                <ul>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-shield"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Access Control</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-bars"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Menu Levels</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      <i class="fal fa-chevron-right"></i>
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-eye-slash"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span disable>Disabled Menu</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      <i class="fal fa-chevron-right"></i>
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-life-ring"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Raise Support</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                  <li className={`row ${styles['row-text-active']}`}>
                    <div className={`col-md-2`}>
                      <i class="fal fa-file-alt"></i>
                    </div>
                    <div className={`col-md-8 pl-3`}>
                      <Link to="/"><span>Documentation</span></Link>
                    </div>
                    <div className={`col-md-2 pl-2`}>
                      {/* <i class="fal fa-chevron-right"></i> */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {newFooter ? ' ': 
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
            </div>}
        </div>
      </div>
    </>
  );
};

export default SideBar;
