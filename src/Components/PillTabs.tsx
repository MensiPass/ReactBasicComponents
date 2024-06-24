import React from "react";
import { useState } from "react";
interface Props {
  tabcontents: string[];
  tabtitles: string[];
}

const PillTabs = ({ tabcontents, tabtitles }: Props) => {
  const [tabSelectedIndex, setTabSelectedIndex] = useState(0);
  const [tabSelected, setTabSelected] = useState(true);
  return (
    <>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        {tabtitles.map((tabtitle, index) => (
          <li className="nav-item" role="presentation">
            <button
              className={
                tabSelectedIndex === index ? "nav-link active" : "nav-link"
              }
              id={"pills-" + tabtitle + "-tab"}
              data-bs-toggle="pill"
              data-bs-target={"#pills-" + tabtitle}
              type="button"
              role="tab"
              aria-controls={"pills-" + tabtitle}
              aria-selected="true"
              onClick={() => {
                setTabSelectedIndex(index);
                setTabSelected(true);
              }}
            >
              {tabtitle}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="pills-tabContent">
        {tabcontents.map((tabcontent, cindex) => (
          <div
            className={
              tabSelectedIndex === cindex && tabSelected
                ? "tab-pane fade show active"
                : "tab-pane fade"
            }
            id={"#pills-" + tabtitles[cindex]}
            role="tabpanel"
            aria-labelledby={"pills-" + tabtitles[cindex] + "-tab"}
          >
            {tabcontent}
          </div>
        ))}
      </div>
    </>
  );
};
export default PillTabs;
