import Navbar from "@/components/web/navbar";
import React, { ReactNode } from "react";

const Sharedlayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Sharedlayout;
