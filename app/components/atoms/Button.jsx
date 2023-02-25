export const Button = (props) => {
  const { title, click, className } = { ...props };
  return (
    <button type="button" onClick={click} className={className}>
      {title}
    </button>
  );
};
