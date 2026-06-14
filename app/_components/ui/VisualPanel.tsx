type VisualPanelProps = {
  variant?: "office" | "dashboard" | "phone" | "map" | "warehouse";
  label?: string;
};

export function VisualPanel({ variant = "office", label }: VisualPanelProps) {
  return (
    <div className={`visual-panel visual-${variant}`} aria-label={label ?? "Technology visual"}>
      <div className="visual-chrome">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-grid" />
      <div className="visual-glow" />
    </div>
  );
}
