import React from "react";
import "./SkillComponent.css";
const SkillComponent = (props) => {
  return (
    <>
      <div class="kelash_tm_counter">
        <ul>
          <li>
            <div class="list_inner shadow-xl"
              style={{
                backgroundColor: props.bgColor,
              }}
            >
              <h3>{props.value}</h3>
              <span>{props.valueDesc}</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SkillComponent;
