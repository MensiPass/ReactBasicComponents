import React from "react";
import { useState } from "react";

interface Props {
  accitems: string[];
  headings: string[];
}

const Accordion = ({ headings, accitems }: Props) => {
  const [accSel, setAccSel] = useState(false);
  const [accSelIn, setAccSelIn] = useState(-1);
  return (
    <div className="accordion" id="accordionExample">
      {headings.map((heading, index) => (
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              onClick={() => {
                setAccSel(true);
                setAccSelIn(index);
              }}
              className={
                accSel === true && accSelIn === index
                  ? "accordion-button"
                  : "accordion-button collapsed"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapse" + index}
              aria-expanded={accSel}
              aria-controls={"collapse" + index}
            >
              {heading}
            </button>
          </h2>

          <div
            id={"collapse" + index}
            className={
              accSel === true && accSelIn === index
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse "
            }
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>{accitems[index]}</strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
