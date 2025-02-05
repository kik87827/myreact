import React, { useEffect, useState } from 'react';

export default function CodingTable({ listIndex, menuActiveIndex, dataItem }) {
  const [jsonData, setJsonData] = useState([]);
  const getClassName = () => {
    return menuActiveIndex === listIndex || menuActiveIndex === -1 ? 'active' : '';
  };
  useEffect(() => {
    if (dataItem.dataURL) {
      fetch(dataItem.dataURL)
        .then((response) => response.json())
        .then((data) => setJsonData(data))
        .catch((error) => console.error('JSON 패치 오류', error));
    }
  }, [dataItem.dataURL]);
  return (
    <>
      <div className={`vertical-cont-item ${getClassName()}`}>
        <p className="vertical-cont-title">{dataItem.groupName}</p>
        <div className="vertical-cont-content">
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
              {jsonData.map((data, index) => {
                return (
                  <tr key={data.groupName}>
                    <td className="num">{index + 1}</td>
                    <td className="depth">{data.menu}</td>
                    <td className="screen-id">{data.screenID}</td>
                    <td className="worker">{data.staff}</td>
                    <td className="work">{data.current}</td>
                    <td className="else">{data.note}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
