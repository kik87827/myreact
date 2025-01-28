import React from "react";
import { Link } from "react-router-dom";
import topLogo from "../assets/images/toplogo_uik_2x2.png";
import utilLogo from "../assets/images/react_logo.svg";
import menuClose from "../assets/images/btn_totalclose.png";

export default function Header() {
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
        <button className="btn-panel-menu">
          <span className="btn-panel-menu-ico"></span>
          <span className="hdtext">메인 메뉴 열기</span>
        </button>
        <div className="mobile-menu-zone">
          <div className="mobile-menu-wrap">
            <div className="mobile-menu-inner">
              <ul className="mobile-menu-list">
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
                  <Link className="nav-item" to="/component">
                    COMPONENT
                  </Link>
                </li>
              </ul>
            </div>
            <button
              className="btn-mobile-menu-close"
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
