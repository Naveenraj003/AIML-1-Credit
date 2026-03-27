export default function BrandMark({ compact = false }) {
  if (compact) {
    return (
      <span className="brand-mini" aria-hidden="true">
        <span>N</span>
        <span>R</span>
      </span>
    );
  }

  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-mark-grid" />
      <span className="brand-mark-text">NR</span>
    </span>
  );
}
