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
                <div
                    key={index}
                    style={{ background: color, width: "40px", height: "5px", borderRadius: "15px" }}
                ></div>
            ))}
        </div>
    );
};
