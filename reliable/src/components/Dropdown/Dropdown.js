import React, { useState } from "react";
import "./Dropdown.css";

const buttons = [
  [
    {
      title: "Professional Plumbing Services for All Your Needs",
      description: [
        {
          text: "Stop a Running Toilet – Efficient Solutions to Save Water",
          subDescriptions: [
            "We ofly while conserving water.We oflsssssssssssssssssonservingssssssssssssssssss water.",
          ],
        },
        {
          text: "Plumbing description 2...",
          subDescriptions: ["Sub-description 4", "Sub-description 5"],
        },
      ],
    },
    {
      title: "Button 2",
      description: [
        {
          text: "Button 2 description 1...",
          subDescriptions: ["Sub-description 6", "Sub-description 7"],
        },
        {
          text: "Button 2 description 2...",
          subDescriptions: ["Sub-description 8"],
        },
      ],
    },
  ],
  [
    {
      title: "Button 1",
      description: [
        {
          text: "Button 1 description 1...",
          subDescriptions: [
            "Sub-description 9",
            "Sub-description 10",
            "Sub-description 11",
          ],
        },
        {
          text: "Button 1 description 2...",
          subDescriptions: ["Sub-description 12", "Sub-description 13"],
        },
      ],
    },
    {
      title: "Button 3",
      description: [
        {
          text: "Button 3 description 1...",
          subDescriptions: ["Sub-description 14"],
        },
        {
          text: "Button 3 description 2...",
          subDescriptions: [
            "Sub-description 15",
            "Sub-description 16",
            "Sub-description 17",
          ],
        },
      ],
    },
  ],
];

function Dropdown() {
  const [openStatuses, setOpenStatuses] = useState(
    buttons.map((column) => column.map(() => false))
  );

  const handleClick = (columnIndex, buttonIndex) => {
    const newOpenStatuses = [...openStatuses];
    newOpenStatuses[columnIndex][buttonIndex] =
      !newOpenStatuses[columnIndex][buttonIndex];
    setOpenStatuses(newOpenStatuses);
  };

  return (
    <div className="dropdown">
      <h2 className="dropdown-title">All Services</h2>
      <hr className="dropdown-divider" />
      {buttons.map((column, columnIndex) => (
        <div key={columnIndex} className="dropdown-column">
          {column.map((button, buttonIndex) => (
            <div key={buttonIndex} className="dropdown-item">
              <button onClick={() => handleClick(columnIndex, buttonIndex)}>
                {button.title}
              </button>
              <div
                className={`dropdown-content ${
                  openStatuses[columnIndex][buttonIndex] ? "show" : ""
                }`}
              >
                {button.description.map((desc, index) => (
                  <div key={index}>
                    <p>{desc.text}</p>
                    {desc.subDescriptions && (
                      <ul>
                        {desc.subDescriptions.map((subDesc, subIndex) => (
                          <li key={subIndex}>{subDesc}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
