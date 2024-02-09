import React from "react";

const HomeHeader = () => {
  return (
    <div className="header p-1">
      <div className="flex justify-between py-1 px-3">
        <div className="logo">
          <h1>📽️Movie Library</h1>
        </div>
        <ul className="flex gap-x-5">
          <li>Category</li>
          <li>Favorate</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeHeader;
