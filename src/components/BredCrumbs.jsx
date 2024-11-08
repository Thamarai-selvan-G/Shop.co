import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const BredCrumbs = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter(Boolean);
  return (
    <>
      {pathSegments.map((segment, index) => {
        const link = "/" + pathSegments.slice(0, index + 1).join("/");
        const lable = segment.charAt(0).toLocaleUpperCase() + segment.slice(1);

        return (
          <span key={href}>
            <Link href={href}>{label}</Link>
            {index < pathSegments.length - 1 && " > "}
          </span>
        );
      })}
    </>
  );
};

export default BredCrumbs;
