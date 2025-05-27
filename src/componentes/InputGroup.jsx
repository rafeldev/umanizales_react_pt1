// components/InputGroup.jsx
const InputGroup = ({
  label,
  type = "text",
  placeholder,
  onChange,
  onFocus,
  onBlur,
  onDoubleClick,
  onMouseEnter,
  onMouseLeave,
  accept,
}) => {
  const Tag = type === "textarea" ? "textarea" : "input";

  return (
    <div className="mt-6">
      <label className="block text-sm font-medium text-white">{label}</label>
      <Tag
        type={type !== "textarea" ? type : undefined}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onDoubleClick={onDoubleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        accept={accept}
        className="px-4 py-2 border rounded-md w-full"
      />
    </div>
  );
};

export default InputGroup;
