export default function Icon({
  color = "#1d1d1d",
  secondary = "#1d1d1d",
  delay = 2000,
  stroke = "regular",
  src,
  size = 32,
}) {
  return (
    <lord-icon
      src={src}
      trigger="loop"
      delay={delay}
      colors={`primary:${color},secondary:${secondary}`}
      stroke={stroke}
      style={{ width: `${size}`, height: `${size}` }}
    />
  );
}
