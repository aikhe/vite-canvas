import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function School() {
  const navBar = [
    {
      Link: "About",
      Route: "/homeschool/about",
    },
    {
      Link: "Contact",
      Route: "/homeschool/contact",
    },
    {
      Link: "Setting",
      Route: "/homeschool/setting",
    },
  ];

  const [currentPage, setCurrentPage] = useState("onHome");

  const renderPage = () => {
    switch (currentPage) {
      case "onOutlet":
        return <Outlet />;
      default:
        return (
          <main className="container-util">
            <section>
              <h2 className=" text-2xl font-bold">Home Page</h2>
              <p>
                You are currently in home page. Navigate from the navigation
                above.
              </p>
            </section>
          </main>
        );
    }
  };

  function pageLink(route, page, state) {
    return (
      <li className="mr-4 inline">
        <Link to={route} onClick={() => setCurrentPage(state)}>
          {page}
        </Link>
      </li>
    );
  }

  return (
    <>
      <header className="container-util mb-4 h-[5.7rem] bg-slate-600 p-4">
        <h1 className="text-3xl font-bold">Welcome to my Website</h1>
        <nav>
          <ul>
            {pageLink("/homeschool", "Home", "onHome")}
            {navBar.map((page) => {
              return pageLink(page.Route, page.Link, "onOutlet");
            })}
          </ul>
        </nav>
      </header>

      {renderPage()}

      <footer className=" container-util fixed bottom-0 bg-red-600 p-1 text-center">
        <p>&copy;2024 Simple Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default School;
