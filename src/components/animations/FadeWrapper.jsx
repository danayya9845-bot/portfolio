import useScrollObserver from "../../hooks/useScrollObserver";

export default function FadeWrapper({
  children,
  direction = "up", // up | down | left | right | none
  duration = "700",
  delay = "0",
}) {
  const { ref, isVisible } = useScrollObserver(); 

  const base = "transition-all ease-out";
  const timing = `duration-${duration} delay-${delay}`;

  const hidden = {
    up: "opacity-0 translate-y-10",
    down: "opacity-0 -translate-y-10",
    left: "opacity-0 -translate-x-12",
    right: "opacity-0 translate-x-12",
    none: "opacity-0",
  };

  const visible = "opacity-100 translate-x-0 translate-y-0";

  return (
    <div
      ref={ref}
      className={`${base} ${timing} ${isVisible ? visible : hidden[direction]}`}
    >
      {children}
    </div>
  );
}
