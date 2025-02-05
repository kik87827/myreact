import React, { useState } from 'react';
import CodingTable from '../components/CodingTable';
export default function CodingList() {
  let [category] = useState([
    {
      groupName: 'MY',
      dataURL: '/codinglist/my.json',
    },
    {
      groupName: '청구',
      dataURL: '/codinglist/charge.json',
    },
    {
      groupName: '대출',
      dataURL: '/codinglist/loan.json',
    },
    {
      groupName: '상품',
      dataURL: '/codinglist/product.json',
    },
    {
      groupName: '고객지원',
      dataURL: '/codinglist/customer.json',
    },
  ]);
  let [menuActiveIndex, setMenuActiveIndex] = useState(-1);

  const handleTotal = (e) => {
    let etarget = e.currentTarget;
    e.preventDefault();
    etarget.classList.add('active');
    setMenuActiveIndex(-1);
  };

  const handleMenu = (e, index) => {
    let etarget = e.currentTarget;
    e.preventDefault();
    etarget.classList.add('active');
    setMenuActiveIndex(index);
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
                  className={`middle-menu ${menuActiveIndex === -1 ? 'active' : ''}`}
                  onClick={(e) => handleTotal(e)}
                >
                  전체
                </button>
              </li>
            }
            {category.map((item, index) => {
              return (
                <li key={`menu-${item.groupName}`}>
                  <button
                    className={`middle-menu ${menuActiveIndex === index ? 'active' : ''}`}
                    onClick={(e) => handleMenu(e, index)}
                  >
                    {item.groupName}
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
                End page : <span className="current-count">5</span>page / Total page :{' '}
                <span className="total-count">15</span>page
              </p>
              <p className="middle-right-title-count">
                진행율 : <span className="current-count-per">33</span>%
              </p>
            </div>
          </div>
          <div className="vertical-cont-item-wrap">
            {category.map((item, index) => {
              let propsGroup = {
                listIndex: index,
                menuActiveIndex,
                dataItem: item,
              };
              return <CodingTable {...propsGroup} key={`content-${item.groupName}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
