import React from "react";

const PageLayout = ({ header, footer, children }) => {
    return (
      <div>
        {header}
        {footer}
        {children}
      </div>
    );
}
export default PageLayout;