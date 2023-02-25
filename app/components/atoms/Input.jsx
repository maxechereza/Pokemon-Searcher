export const Input = ({ handleInputChange, value, className, placeholder }) => {
  return (
    <input
      className={className}
      type="text"
      id="id"
      name="name"
      onChange={(e) => handleInputChange(e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  );
};
