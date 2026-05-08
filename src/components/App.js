
import React from "react";
import './../styles/App.css';

 const PageLayout({ header, footer, children }) => {
    return (
      <div>
    {header}
    {footer}
    {children}
      </div>
    );
  };  
    </div>
  )
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
     <PageLayout
        header={<h1>Header</h1>}
        footer={<h3>Footer</h3>}
      >
        <p>Main Content</p>
      </PageLayout>
          </div>
  );
}

export default App
