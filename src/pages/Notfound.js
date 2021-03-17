import { useEffect } from "react";

export default function Notfound() {
  useEffect(() => {
    document.title = "Not Found - Instagram";
  }, []);
  return (
    <div className="bg-gray-background">
      <div className="flex mx-auto max-w-screen-lg h-screen items-center justify-center">
        <p className="text-center text-2xl">404 Not Found!</p>
      </div>
    </div>
  );
}
