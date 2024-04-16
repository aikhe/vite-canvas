import monochrome from "/monochrome.jpg";
import { Link } from "react-router-dom";

function landing() {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center gap-4 bg-black">
      <img className="size-[20rem]" src={monochrome} alt="monochrome" />
      <Link to="/homeschool" className="text-4xl text-white underline">
        hjkl
      </Link>
    </div>
  );
}

export default landing;
