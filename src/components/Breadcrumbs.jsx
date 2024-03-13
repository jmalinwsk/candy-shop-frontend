import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <div className="container-xxl py-2">
        <div className="row">
          <div className="col-12">
            <nav className="breadcrumb d-flex align-items-center">
              {breadcrumbs.map(({ match, breadcrumb }) => (
                <NavLink
                  key={match.pathname}
                  to={match.pathname}
                  className="breadcrumb-item"
                >
                  {breadcrumb}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
