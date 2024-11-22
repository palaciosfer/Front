export function InputT(props) {
  const { type, placeholder, value, onChange, name, className = "" } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`w-full border-b-2 border-solid text-white outline-none mt-2 bg-transparent ${className}`}
    />
  );
}
