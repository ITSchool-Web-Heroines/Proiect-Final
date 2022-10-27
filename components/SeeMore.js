import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/btn.module.css";
import Link from "next/link";

export default function SeeMore() {
  const router = useRouter();

  return (
    <Link href="/about">
      <a className={styles["see-more"]}>Click here to see more</a>
    </Link>
  );
}
