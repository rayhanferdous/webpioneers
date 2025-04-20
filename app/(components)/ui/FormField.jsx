import Image from "next/image";
import React from "react";

const FormField = ({
  label,
  name,
  placeholder,
  error,
  textarea,
  select,
  options,
  value,
  onChange,
  required,
  optional,
  icon,
  ...props
}) => {
  // Render form field based on the prop types
  if (!textarea && !select && options) {
    console.error("Options can only be used with a select field.");
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-2 relative mb-2">
      <label
        htmlFor={name}
        className="flex items-center gap-2 sm:gap-4 ml-2 text-lg sm:text-2xl text-[#DFDBDB]"
      >
        {icon && (
          <Image
            src={icon}
            alt={name}
            width={30}
            height={30}
            className="mr-2 text-xs size-6 sm:size-8"
          />
        )}
        {label}
        {required && (
          <svg
            className="size-[.7em]"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.73109 7.97801L0 6.96628L0.840336 4.67889L3.44538 5.60264C4.95798 6.1305 5.79832 6.61437 6.68067 7.2302C6.42857 6.1305 6.30252 5.07478 6.30252 3.53519V0.5L8.65546 0.5V3.53519C8.65546 5.07478 8.4874 6.21847 8.27731 7.2302C9.15966 6.65836 10 6.1305 11.4706 5.60264L14.1176 4.6349L15 6.96628L12.2269 7.97801C10.8403 8.50587 9.7479 8.68182 8.78151 8.81378C9.66387 9.60557 10.2941 10.3094 11.0924 11.629L12.7311 14.0924L10.7983 15.5L9.15966 13.0806C8.27731 11.761 7.81513 10.7493 7.43698 9.82551C7.10084 10.8812 6.63866 11.893 5.79832 13.0806L4.11765 15.5L2.14286 14.0924L3.78151 11.629C4.66387 10.3094 5.37815 9.56158 6.17647 8.81378C4.91597 8.63783 3.94958 8.46188 2.73109 7.97801Z"
              fill="#FF2626"
            />
          </svg>
        )}
        {optional && <span className="text-gray-700">(Optional)</span>}
      </label>

      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={5}
          className="!outline-none focus:border-gray-dark placeholder:text-gray-700 bg-transparent border-b border-gray-700 px-12 py-4 sm:py-6 text-lg sm:text-2xl leading-none resize-none !rounded-none"
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        />
      ) : select ? (
        <select
          style={{
            backgroundImage: "url('./dropdown.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1.5rem center",
            backgroundSize: ".7em",
          }}
          name={name}
          value={value}
          onChange={onChange}
          className="appearance-none !outline-none focus:border-gray-dark bg-transparent border-b border-gray-700 px-12 py-4 sm:py-6 text-lg sm:text-2xl leading-none !rounded-none"
          required={required}
          {...props}
        >
          <option value="" disabled className="text-lg text-gray-700 bg-dark">
            {placeholder}
          </option>
          {options.map((option, idx) => (
            <option
              className="text-lg text-gray-dark bg-dark"
              key={idx}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className="!outline-none focus:border-gray-dark placeholder:text-gray-700 bg-transparent border-b border-gray-700 px-12 py-4 sm:py-6 text-lg sm:text-2xl leading-none !rounded-none"
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        />
      )}

      <small className="text-red text-base p-0.5 absolute top-full left-0 w-full text-right">
        {error && error + " *"}
      </small>
    </div>
  );
};

export default FormField;
