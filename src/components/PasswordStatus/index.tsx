import { Bar } from "./styled";

export const PasswordStrengthBar: React.FC<{ strength: string }> = ({ strength }) => {
  let bars = [];
  switch (strength) {
    case "Medium":
      bars = ["orange", "orange"];
      break;
    case "Strong":
      bars = ["green", "green", "green"];
      break;
    default:
      bars = ["red"];
  }

  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {bars.map((color, index) => (
        <Bar key={index} color={color} />
      ))}
    </div>
  );
};
