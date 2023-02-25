export const Fallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <button onClick={resetErrorBoundary}>Reset</button>
      <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
    </div>
  );
};
