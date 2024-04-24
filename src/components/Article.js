import React from "react";

function Article() {
  return <div>Please pass this text</div>;
}

screen.debug();
expect(screen.queryByText("please pass this test")).toBeInTheDocument();

export default Article;
