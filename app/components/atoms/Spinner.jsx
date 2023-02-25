export default function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //height: "100vh",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          animation: "spin 2s linear infinite",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundColor: "#FECE44",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "50%",
              borderRadius: "50%",
              position: "absolute",
              top: "25%",
              left: "25%",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                width: "25%",
                height: "25%",
                borderRadius: "50%",
                position: "absolute",
                top: "12.5%",
                left: "12.5%",
                backgroundColor: "black",
              }}
            />
          </div>
          <div
            style={{
              width: "25%",
              height: "25%",
              borderRadius: "50%",
              position: "absolute",
              top: "12.5%",
              left: "62.5%",
              backgroundColor: "black",
            }}
          />
          <div
            style={{
              width: "50%",
              height: "10%",
              position: "absolute",
              bottom: "0",
              left: "25%",
              backgroundColor: "black",
            }}
          />
        </div>
      </div>
    </div>
  );
}
