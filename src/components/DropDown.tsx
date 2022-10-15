import React, { useState } from "react";
interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
}
const Input = ({ label, className, ...props }: Props) => {
  const randomId = Math.random().toString(36).substring(7).toString();
  const [isSelected, setIsSelected] = useState(false);
  return (
    <>
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          {label}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow "
        >
          <li>
            <a>Remotly</a>
          </li>
          <li>
            <a>Part Time</a>
          </li>
          <li>
            <a>Full Time</a>
          </li>
          <li>
            <a>Office</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Input;
