import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex  justify-center items-center">
      <div className="absolute top-5 left-5">
        <Link href="/" className={buttonVariants({ variant: "secondary" })}>
          <ArrowLeft className="size-4" />
          返回
        </Link>
      </div>
      <div className="w-full max-w-md max-auto">{children}</div>
    </div>
  );
};

export default Authlayout;
