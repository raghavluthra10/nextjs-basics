import React from "react";
import Navbar from "@/components/Navbar";
import GraphqlTabsLayout from "@/components/GraphqlTabsLayout";

const getGraphqlLayout = function (page) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex flex-column">
        <GraphqlTabsLayout />
        {page}
      </div>
    </React.Fragment>
  );
};

export default getGraphqlLayout;
