"use client";

export default function KineticTitle({ text, className = "" }) {
  return (
    <span className={`kinetic-title ${className}`.trim()}>
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="kchar"
          style={{ animationDelay: `${index * 26}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
