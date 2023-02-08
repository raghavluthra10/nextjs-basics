import React from "react";
import Navbar from "@/components/Navbar";
import TabLayout from "@/components/TabLayout";

const getRestLayout = function (page) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex flex-column">
        <TabLayout />
        {page}
      </div>
    </React.Fragment>
  );
};

export default getRestLayout;
