import React from "react";
interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
  error?: string;
  touched?: boolean;
}
const Input = ({ error, touched, label, className, ...props }: Props) => {
  const randomId = Math.random().toString(36).substring(7).toString();
  console.log(error);
  return (
    <>
      <div className="form-control w-full">
        <label className="label" htmlFor={randomId}>
          <span className="label-text">{label}</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className={`input input-bordered w-full max-w-xs ${
            error && touched && " input-error "
          }`}
          id={randomId}
          {...props}
        />
        <label className="label">
          {touched && (
            <span className="label-text-alt text-red-300">{error ?? ""}</span>
          )}
        </label>
      </div>
    </>
  );
};

export default Input;
