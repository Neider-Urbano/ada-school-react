import React, { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  return (
    <div className="d-flex">
      <h1 className="mb-3">Todo App</h1>
      <h1 ref={ref}> </h1>
    </div>
  );
});

//para cambiar el nombre del Component
Header.displayName = "Header";

export default Header;
