import React, { useState } from "react";

export default function CodingList() {
  let [category, setCategory] = useState([
    "MY2",
    "청구",
    "대출",
    "상품",
    "고객지원",
  ]);
  let [menuActiveIndex, setMenuActiveIndex] = useState(-1);

  const handleTotal = (e) => {
    let etarget = e.currentTarget;
    e.preventDefault();
    etarget.classList.add("active");
    setMenuActiveIndex(-1);
  };

  const handleMenu = (e, index) => {
    let etarget = e.currentTarget;
    e.preventDefault();
    etarget.classList.add("active");
    setMenuActiveIndex(index);
  };

  const getClassName = (index) => {
    if (menuActiveIndex === index || menuActiveIndex === -1) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <div className="middle-templete">
      <div className="middle-left-cols">
        <div className="middle-left-item">
          <h2 className="middle-left-title">Publishing list</h2>
          <ul className="middle-menu-list">
            {
              <li>
                <button
                  className={`middle-menu ${
                    menuActiveIndex === -1 ? "active" : ""
                  }`}
                  onClick={(e) => handleTotal(e)}
                >
                  전체
                </button>
              </li>
            }
            {category.map((item, index) => {
              return (
                <li key={index}>
                  <button
                    className={`middle-menu ${
                      menuActiveIndex === index ? "active" : ""
                    }`}
                    onClick={(e) => handleMenu(e, index)}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="middle-right-cols">
        <div className="middle-right-content">
          <div className="middle-right-title-row">
            <h3 className="middle-right-title">퍼블리싱 리스트</h3>
            <div className="middle-right-title-count-wrap">
              <p className="middle-right-title-count">
                End page : <span className="current-count">5</span>page / Total
                page : <span className="total-count">15</span>page
              </p>
              <p className="middle-right-title-count">
                진행율 : <span className="current-count-per">33</span>%
              </p>
            </div>
          </div>
          <div className="vertical-cont-item-wrap">
            {category.map((item, index) => {
              return (
                <div
                  className={`vertical-cont-item ${getClassName(index)}`}
                  key={index}
                >
                  <p className="vertical-cont-title">{item}</p>
                  <div className="vertical-cont-content">
                    <div className="codinglist-tb-wrap">
                      <table className="codinglist-tb">
                        <thead>
                          <tr>
                            <th className="num">no.</th>
                            <th className="depth">메뉴명</th>
                            <th className="screen-id">화면 ID</th>
                            <th className="worker">담당자</th>
                            <th className="work">현황</th>
                            <th className="else">비고</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="num">1</td>
                            <td className="depth">
                              <a
                                href="#"
                                target="_blank"
                                className="screen-link"
                              >
                                메뉴명1 &gt; 메뉴명2
                              </a>
                            </td>
                            <td className="screen-id">
                              <a
                                href="#"
                                target="_blank"
                                className="screen-link"
                              >
                                MY000000
                              </a>
                            </td>
                            <td className="worker">홍길동</td>
                            <td className="work">대기중</td>
                            <td className="else">비고란입니다.</td>
                          </tr>
                          <tr>
                            <td className="num">2</td>
                            <td className="depth">
                              <a
                                href="#"
                                target="_blank"
                                className="screen-link"
                              >
                                메뉴명1 &gt; 메뉴명2
                              </a>
                            </td>
                            <td className="screen-id">
                              <a
                                href="#"
                                target="_blank"
                                className="screen-link"
                              >
                                MY000001
                              </a>
                            </td>
                            <td className="worker">홍길동</td>
                            <td className="work">대기중</td>
                            <td className="else"></td>
                          </tr>
                          <tr>
                            <td className="num">3</td>
                            <td className="depth">
                              <a
                                href="#"
                                target="_blank"
                                className="screen-link"
                              >
                                메뉴명1 &gt; 메뉴명2
                              </a>
                            </td>
                            <td className="screen-id">
                              <a
                                href="#"
                                target="_blank"
                                className="screen-link"
                              >
                                MY000002
                              </a>
                            </td>
                            <td className="worker">홍길동</td>
                            <td className="work end">완료</td>
                            <td className="else"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="vertical-cont-item">
              <p className="vertical-cont-title">MY</p>
              <div className="vertical-cont-content">
                <div className="codinglist-tb-wrap">
                  <table className="codinglist-tb">
                    <thead>
                      <tr>
                        <th className="num">no.</th>
                        <th className="depth">메뉴명</th>
                        <th className="screen-id">화면 ID</th>
                        <th className="worker">담당자</th>
                        <th className="work">현황</th>
                        <th className="else">비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="num">1</td>
                        <td className="depth">
                          <a href="#" target="_blank" className="screen-link">
                            메뉴명1 &gt; 메뉴명2
                          </a>
                        </td>
                        <td className="screen-id">
                          <a href="#" target="_blank" className="screen-link">
                            MY000000
                          </a>
                        </td>
                        <td className="worker">홍길동</td>
                        <td className="work">대기중</td>
                        <td className="else">비고란입니다.</td>
                      </tr>
                      <tr>
                        <td className="num">2</td>
                        <td className="depth">
                          <a href="#" target="_blank" className="screen-link">
                            메뉴명1 &gt; 메뉴명2
                          </a>
                        </td>
                        <td className="screen-id">
                          <a href="#" target="_blank" className="screen-link">
                            MY000001
                          </a>
                        </td>
                        <td className="worker">홍길동</td>
                        <td className="work">대기중</td>
                        <td className="else"></td>
                      </tr>
                      <tr>
                        <td className="num">3</td>
                        <td className="depth">
                          <a href="#" target="_blank" className="screen-link">
                            메뉴명1 &gt; 메뉴명2
                          </a>
                        </td>
                        <td className="screen-id">
                          <a href="#" target="_blank" className="screen-link">
                            MY000002
                          </a>
                        </td>
                        <td className="worker">홍길동</td>
                        <td className="work end">완료</td>
                        <td className="else"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="vertical-cont-item">
              <p className="vertical-cont-title">청구</p>
              <div className="vertical-cont-content">
                <div className="codinglist-tb-wrap">
                  <table className="codinglist-tb">
                    <thead>
                      <tr>
                        <th className="num">no.</th>
                        <th className="depth">메뉴명</th>
                        <th className="screen-id">화면 ID</th>
                        <th className="worker">담당자</th>
                        <th className="work">현황</th>
                        <th className="else">비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="num">1</td>
                        <td className="depth">
                          <a href="#" target="_blank" className="screen-link">
                            메뉴명1 &gt; 메뉴명2
                          </a>
                        </td>
                        <td className="screen-id">
                          <a href="#" target="_blank" className="screen-link">
                            MY000000
                          </a>
                        </td>
                        <td className="worker">홍길동</td>
                        <td className="work">대기중</td>
                        <td className="else">비고란입니다.</td>
                      </tr>
                      <tr>
                        <td className="num">2</td>
                        <td className="depth">
                          <a href="#" target="_blank" className="screen-link">
                            메뉴명1 &gt; 메뉴명2
                          </a>
                        </td>
                        <td className="screen-id">
                          <a href="#" target="_blank" className="screen-link">
                            MY000001
                          </a>
                        </td>
                        <td className="worker">홍길동</td>
                        <td className="work">대기중</td>
                        <td className="else"></td>
                      </tr>
                      <tr>
                        <td className="num">3</td>
                        <td className="depth">
                          <a href="#" target="_blank" className="screen-link">
                            메뉴명1 &gt; 메뉴명2
                          </a>
                        </td>
                        <td className="screen-id">
                          <a href="#" target="_blank" className="screen-link">
                            MY000002
                          </a>
                        </td>
                        <td className="worker">홍길동</td>
                        <td className="work end">완료</td>
                        <td className="else"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="vertical-cont-item">
              <p className="vertical-cont-title">대출</p>
              <div className="vertical-cont-content">
                <div className="codinglist-tb-wrap">
                  <table className="codinglist-tb">
                    <thead>
                      <tr>
                        <th className="num">no.</th>
                        <th className="depth">메뉴명</th>
                        <th className="screen-id">화면 ID</th>
                        <th className="worker">담당자</th>
                        <th className="work">현황</th>
                        <th className="else">비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="num">1</td>
                        <td className="depth">
                          <a href="#" target="_blank" className="screen-link">
                            메뉴명1 &gt; 메뉴명2
                          </a>
                        </td>
                        <td className="screen-id">
                          <a href="#" target="_blank" className="screen-link">
                            MY000000
                          </a>
                        </td>
                        <td className="worker">홍길동</td>
                        <td className="work">대기중</td>
                        <td className="else">비고란입니다.</td>
                      </tr>
                      <tr>
                        <td className="num">2</td>
                        <td className="depth">
                          <a href="#" target="_blank" className="screen-link">
                            메뉴명1 &gt; 메뉴명2
                          </a>
                        </td>
                        <td className="screen-id">
                          <a href="#" target="_blank" className="screen-link">
                            MY000001
                          </a>
                        </td>
                        <td className="worker">홍길동</td>
                        <td className="work">대기중</td>
                        <td className="else"></td>
                      </tr>
                      <tr>
                        <td className="num">3</td>
                        <td className="depth">
                          <a href="#" target="_blank" className="screen-link">
                            메뉴명1 &gt; 메뉴명2
                          </a>
                        </td>
                        <td className="screen-id">
                          <a href="#" target="_blank" className="screen-link">
                            MY000002
                          </a>
                        </td>
                        <td className="worker">홍길동</td>
                        <td className="work end">완료</td>
                        <td className="else"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="vertical-cont-item">
              <p className="vertical-cont-title">상품</p>
              <div className="vertical-cont-content">
                <div className="codinglist-tb-wrap">
                  <table className="codinglist-tb">
                    <thead>
                      <tr>
                        <th className="num">no.</th>
                        <th className="depth">메뉴명</th>
                        <th className="screen-id">화면 ID</th>
                        <th className="worker">담당자</th>
                        <th className="work">현황</th>
                        <th className="else">비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="num">1</td>
                        <td className="depth">
                          <a href="#" target="_blank" className="screen-link">
                            메뉴명1 &gt; 메뉴명2
                          </a>
                        </td>
                        <td className="screen-id">
                          <a href="#" target="_blank" className="screen-link">
                            MY000000
                          </a>
                        </td>
                        <td className="worker">홍길동</td>
                        <td className="work">대기중</td>
                        <td className="else">비고란입니다.</td>
                      </tr>
                      <tr>
                        <td className="num">2</td>
                        <td className="depth">
                          <a href="#" target="_blank" className="screen-link">
                            메뉴명1 &gt; 메뉴명2
                          </a>
                        </td>
                        <td className="screen-id">
                          <a href="#" target="_blank" className="screen-link">
                            MY000001
                          </a>
                        </td>
                        <td className="worker">홍길동</td>
                        <td className="work">대기중</td>
                        <td className="else"></td>
                      </tr>
                      <tr>
                        <td className="num">3</td>
                        <td className="depth">
                          <a href="#" target="_blank" className="screen-link">
                            메뉴명1 &gt; 메뉴명2
                          </a>
                        </td>
                        <td className="screen-id">
                          <a href="#" target="_blank" className="screen-link">
                            MY000002
                          </a>
                        </td>
                        <td className="worker">홍길동</td>
                        <td className="work end">완료</td>
                        <td className="else"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="vertical-cont-item">
              <p className="vertical-cont-title">고객지원</p>
              <div className="vertical-cont-content">
                <div className="codinglist-tb-wrap">
                  <table className="codinglist-tb">
                    <thead>
                      <tr>
                        <th className="num">no.</th>
                        <th className="depth">메뉴명</th>
                        <th className="screen-id">화면 ID</th>
                        <th className="worker">담당자</th>
                        <th className="work">현황</th>
                        <th className="else">비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="num">1</td>
                        <td className="depth">
                          <a href="#" target="_blank" className="screen-link">
                            메뉴명1 &gt; 메뉴명2
                          </a>
                        </td>
                        <td className="screen-id">
                          <a href="#" target="_blank" className="screen-link">
                            MY000000
                          </a>
                        </td>
                        <td className="worker">홍길동</td>
                        <td className="work">대기중</td>
                        <td className="else">비고란입니다.</td>
                      </tr>
                      <tr>
                        <td className="num">2</td>
                        <td className="depth">
                          <a href="#" target="_blank" className="screen-link">
                            메뉴명1 &gt; 메뉴명2
                          </a>
                        </td>
                        <td className="screen-id">
                          <a href="#" target="_blank" className="screen-link">
                            MY000001
                          </a>
                        </td>
                        <td className="worker">홍길동</td>
                        <td className="work">대기중</td>
                        <td className="else"></td>
                      </tr>
                      <tr>
                        <td className="num">3</td>
                        <td className="depth">
                          <a href="#" target="_blank" className="screen-link">
                            메뉴명1 &gt; 메뉴명2
                          </a>
                        </td>
                        <td className="screen-id">
                          <a href="#" target="_blank" className="screen-link">
                            MY000002
                          </a>
                        </td>
                        <td className="worker">홍길동</td>
                        <td className="work end">완료</td>
                        <td className="else"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
