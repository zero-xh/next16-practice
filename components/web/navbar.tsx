"use client";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useConvexAuth } from "convex/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { SearchInput } from "./SearchInput";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();
  return (
    <nav className="w-full py-5 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            Next<span className="text-orange-700">Pro</span>
          </h1>
        </Link>
        <div className="flex items-center gap-2">
          <Link className={buttonVariants({ variant: "ghost" })} href="/">
            首页
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="/blog">
            博客
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="/create">
            创造
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden md:block mr-2">
          <SearchInput />
        </div>
        {isLoading ? null : isAuthenticated ? (
          <Button
            onClick={() =>
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    toast.success("退出登录成功");
                    router.push("/");
                  },
                  onError: (error) => {
                    toast.error(error.error.message);
                  },
                },
              })
            }
          >
            退出登录
          </Button>
        ) : (
          <>
            <Link className={buttonVariants()} href="/auth/sign-up">
              注册
            </Link>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/auth/login"
            >
              登录
            </Link>
          </>
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
