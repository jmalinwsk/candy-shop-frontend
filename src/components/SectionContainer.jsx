import React from "react";

const SectionContainer = (props) => {
  return (
    <section className={props.className}>
      <div className="container-xxl">
        <div className="row">{props.children}</div>
      </div>
    </section>
  );
};

export default SectionContainer;
