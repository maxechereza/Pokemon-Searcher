export const Text = ({ className, message, children }) => {
  return <p className={className}>{message ? message : children}</p>;
};
