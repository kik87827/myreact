import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import topLogo from "../assets/images/toplogo_uik_2x2.png";
import utilLogo from "../assets/images/react_logo.svg";
import menuClose from "../assets/images/btn_totalclose.png";

export default function Header() {
  let mobileNavRef = useRef(null);
  let touchstart = "ontouchstart" in window;
  let openTimerID = 0;
  let closeTimerID = 0;
  const bodyDom = document.body;
  function handleNavOpen(e) {
    const mobileNavRefDom = mobileNavRef.current;
    e.preventDefault();
    mobileNavRefDom.classList.add("active");
    if (touchstart) {
      bodyDom.classList.add("touch-dis");
    }
    if (openTimerID) {
      clearTimeout(openTimerID);
    }
    openTimerID = setTimeout(() => {
      mobileNavRefDom.classList.add("motion");
    }, 20);
  }

  function handleNavClose(e) {
    e.preventDefault();
    const mobileNavRefDom = mobileNavRef.current;
    mobileNavRefDom.classList.remove("motion");
    if (touchstart) {
      bodyDom.classList.remove("touch-dis");
    }
    if (closeTimerID) {
      clearTimeout(closeTimerID);
    }
    closeTimerID = setTimeout(() => {
      mobileNavRefDom.classList.remove("active");
    }, 520);
  }

  useEffect(() => {
    return () => {
      /* if (!!mobileNavRefDom) {
        if (mobileNav.length) {
          mobileNav.forEach((eventItem) => {
            eventItem.removeEventListener("click");
          });
        }
      } */
    };
  }, []);

  return (
    <header className="header-wrap">
      <div className="header-inner">
        <h1 className="toplogo">
          <Link className="toplogo-link" to="/">
            <img src={topLogo} alt="UIK" />
            <span className="toplogo-text">Frontend Developer</span>
          </Link>
        </h1>
        <div className="header-main-cols">
          <nav className="nav-wrap">
            <ul className="nav-list">
              <li>
                <Link className="nav-item" to="/about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/work">
                  WORK
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/component">
                  COMPONENT
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/codinglist">
                  CODINGLIST
                </Link>
              </li>
            </ul>
          </nav>
          <div className="util-item-wrap">
            <ul className="util-item-list">
              <li>
                <span className="util-item">
                  <img src={utilLogo} alt="react" />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <button className="btn-panel-menu" onClick={handleNavOpen}>
          <span className="btn-panel-menu-ico"></span>
          <span className="hdtext">메인 메뉴 열기</span>
        </button>
        <div className="mobile-menu-zone" ref={mobileNavRef}>
          <div className="mobile-menu-wrap">
            <div className="mobile-menu-inner">
              <ul className="mobile-menu-list" onClick={handleNavClose}>
                <li>
                  <Link className="mobile-menu" to="/about">
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link className="mobile-menu" to="/work">
                    WORK
                  </Link>
                </li>
                <li>
                  <Link className="mobile-menu" to="/component">
                    COMPONENT
                  </Link>
                </li>
                <li>
                  <Link className="mobile-menu" to="/codinglist">
                    CODINGLIST
                  </Link>
                </li>
              </ul>
            </div>
            <button
              className="btn-mobile-menu-close"
              onClick={handleNavClose}
              style={{
                backgroundImage: "url(" + menuClose + ")",
              }}
            >
              <span className="hdtext">메인 메뉴 닫기</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
