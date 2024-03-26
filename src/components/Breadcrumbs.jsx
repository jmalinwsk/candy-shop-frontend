import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import SectionContainer from "./SectionContainer";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <SectionContainer className="py-2">
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
      </SectionContainer>
    </>
  );
};

export default Breadcrumbs;
