export const Card = ({ children, bgColor, shadow }) => {
  return (
    <div
      className={`min-w-full mx-auto p-10 bg-${bgColor} rounded-lg shadow-xl shadow-${shadow} min-h-full`}
    >
      {children}
    </div>
  );
};
