import "../styles/globals.css";
import Image from "next/image";
import pokeball from "../public/pokeball1.png";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="h-screen">
          <div
            className="fixed"
            style={{
              paddingLeft: "47%",
              paddingTop: "23%",
            }}
          >
            <div className="w-120 h-120">
              <Image src={pokeball} width={120} height={120} />
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
