import React from "react";
import { useState } from "react";

interface Props {
  accitems: string[];
}

const DropDown = ({ accitems }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [drpSel, setDrpSel] = useState(false);
  return (
    <div className="dropdown">
      <button
        onClick={() => {
          setDrpSel(true);
          setSelectedIndex(0);
        }}
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded={drpSel}
      >
        {selectedIndex === -1 ? accitems[0] : accitems[selectedIndex]}
      </button>
      {accitems.length === 0 && <p>No items found</p>}
      <ul className={drpSel === true ? "dropdown-menu show" : "dropdown-menu"}>
        {accitems.map((item, index) =>
          index !== selectedIndex ? (
            <li>
              <a
                onClick={() => {
                  setDrpSel(false);
                  setSelectedIndex(index);
                }}
                className="dropdown-item"
                href="#"
              >
                {item}
              </a>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
};
export default DropDown;
