import React, { useState } from "react";
import "./FolderSystem.css";

const FolderSystem = ({ file_explorer, count }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (file_explorer.isFile) {
    return (
      <div>
        <span
          style={{ paddingLeft: `${count * 15}px`, color: "rgb(56, 187, 56)" }}
        >
          {file_explorer.name}
        </span>
        <br />
      </div>
    );
  } else
    return (
      <div className="folder_system">
        <span
          onClick={() => setIsOpen((prevState) => !prevState)}
          style={{ paddingLeft: `${count * 15}px`, color: "rgb(245, 73, 73)" }}
        >
          {file_explorer.name}
        </span>
        {isOpen &&
          file_explorer.data.map((e) => {
            return <FolderSystem file_explorer={e} count={count + 1} />;
          })}
      </div>
    );
};

export default FolderSystem;
