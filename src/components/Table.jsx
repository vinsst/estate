import React from "react";
import Settings from "../assets/img/Settings.svg";
import Search from "../assets/img/Search.svg";

function Table() {
  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>
              <img src={Settings} alt="" />
            </th>
            <th>IMSI</th>
            <th>MSISDN</th>
            <th>IMEI</th>
            <th>МОДЕЛЬ</th>
            <th>ВЕНДОР</th>
            <th>CS РЕГИС...</th>
            <th>PS РЕГИС...</th>
            <th>IMS РЕГИС...</th>
            <th>SIM-APPL...</th>
            <th>ACCESS T...</th>
            <th>VPLMN</th>
            <th>РЕГИОН</th>
            <th>ТИП SIM</th>
            <th>HOST-ПРО...</th>
            <th>АДРЕС</th>
          </tr>
        </thead>
        <tr className="search-row">
          <th>
            <img src={Search} alt="" />
          </th>
          <th>
            <img src={Search} alt="" />
          </th>
          <th>
            <img src={Search} alt="" />
          </th>
          <th>
            <img src={Search} alt="" />
          </th>
          <th>
            <img src={Search} alt="" />
          </th>
          <th>
            <img src={Search} alt="" />
          </th>
          <th>
            <img src={Search} alt="" />
          </th>
          <th>
            <img src={Search} alt="" />
          </th>
          <th>
            <img src={Search} alt="" />
          </th>
          <th>
            <img src={Search} alt="" />
          </th>
          <th>
            <img src={Search} alt="" />
          </th>
          <th>
            <img src={Search} alt="" />
          </th>
          <th>
            <img src={Search} alt="" />
          </th>
          <th>
            <img src={Search} alt="" />
          </th>
          <th>
            <img src={Search} alt="" />
          </th>
          <th>
            <img src={Search} alt="" />
          </th>
        </tr>
        <tbody>
          {Array(10)
            .fill()
            .map((_, index) => (
              <tr key={index} className={index % 2 === 0 ? "even-row" : ""}>
                <td></td>
                <td>25056542256456</td>
                <td>25056542256456</td>
                <td>25056542256456</td>
                <td>iPhone 7 Plus</td>
                <td>Apple Inc</td>
                <td>30.04.2004 13:11</td>
                <td>30.04.2004 13:11</td>
                <td>30.04.2004 13:11</td>
                <td>Multi-IMSI AT-Applet USSD</td>
                <td>LTE</td>
                <td>MTS</td>
                <td>Краснодарский край</td>
                <td>eSIM</td>
                <td>Beeline</td>
                <td>Краснодарский Край ул. Краснодарская 152/36 окр центр</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
