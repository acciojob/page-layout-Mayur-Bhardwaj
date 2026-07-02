import React from "react";
import PageLayout from "./PageLayout";

function App() {
  const header = <h1>Welcome to my website</h1>;

  const footer = <p>© 2023 My Website. All rights reserved.</p>;

  return (
    <PageLayout header={header} footer={footer}>
      <p>This is the content of my website.</p>
    </PageLayout>
  );
}

export default App;