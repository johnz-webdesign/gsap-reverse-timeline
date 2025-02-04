import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ExpandedMenu({ toggle }) {
  const menu = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current.to(menu.current, {
      top: 0,
      duration: 0.7,
    });
  }, []);

  useEffect(() => {
    if (tl.current) {
      toggle ? tl.current.play() : tl.current.reverse();
    }
  }, [toggle]);

  return (
    <section
      ref={menu}
      className="fixed left-0 top-[-100vh] z-10 h-[100vh] w-full bg-black"
    ></section>
  );
}
