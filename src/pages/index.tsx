import Profile from "./component/Profile";
import ProductsLists from "./component/ProductsList";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-row items-center justify-between font-quicksand">
        <div className=" w-full items-center justify-between text-sm">
          <Profile />
          <ProductsLists />
          <div className="bubbles">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}
