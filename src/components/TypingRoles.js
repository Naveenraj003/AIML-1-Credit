"use client";

import { useEffect, useState } from "react";

export default function TypingRoles({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    const speed = isDeleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
        return;
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      setText((prev) =>
        isDeleting ? prev.slice(0, prev.length - 1) : fullText.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <p className="text-lg md:text-xl text-cyan-300 h-8 font-medium tracking-wide">
      {text}
      <span className="inline-block w-[1ch] animate-pulse">|</span>
    </p>
  );
}
