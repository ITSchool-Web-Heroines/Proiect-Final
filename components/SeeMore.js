import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/btn.module.css";

export default function SeeMore() {
  const router = useRouter();

  return (
    <button
      className={styles["see-more"]}
      type="button"
      onClick={() => {
        router.push({
          pathname: "/about",
        });
      }}
    >
      Click here to see more
    </button>
  );
}
