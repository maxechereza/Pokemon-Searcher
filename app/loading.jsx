export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="spinner w-10 h-10">
        <div className="bg-gray-300 rounded-full w-3 h-3 m-1 animation-bounce delay-1s"></div>
        <div className="bg-gray-300 rounded-full w-3 h-3 m-1 animation-bounce delay-2s"></div>
        <div className="bg-gray-300 rounded-full w-3 h-3 m-1 animation-bounce delay-3s"></div>
      </div>
    </div>
  );
}
