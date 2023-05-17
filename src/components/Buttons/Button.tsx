import { PrimaryButton } from "./styles";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "warning" | "danger" | "lightGray" | "dark" | "light";
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({disabled = false, type = "button", onClick, variant = "primary", children}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return <PrimaryButton statusColor={variant} onClick={handleClick} type={type}  disabled={disabled} >{children}</PrimaryButton>;

};
