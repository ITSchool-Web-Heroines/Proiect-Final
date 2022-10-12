import { useEffect } from "react";

export default function elementIsInView(myRef, setState) {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      setState(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);
}
