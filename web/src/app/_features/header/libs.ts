import { usePathname, useRouter } from "next/navigation";

export const useHeader = () => {
  const currentPathname = usePathname();

  const router = useRouter();

  const headerItems = [
    {
      name: "Welcome to the Ay.",
      hint: "",
      logo: "",
      href: "/",
    },
  ]

  const goNextPage = (href: string) => router.push(href);

  return {
    currentPathname,
    headerItems,
    goNextPage,
  };
};
