import { Button } from "@mui/material";
import clsx from "clsx";

interface ButtonLoadingProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
  onHandleSubmit?: () => void;
  type?: "button" | "submit";
}
export const ButtonLoading = ({
  children,
  disabled,
  className,
  isLoading,
  type = "button",
  onHandleSubmit,
}: ButtonLoadingProps) => {
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (onHandleSubmit) {
      onHandleSubmit();
    }
  };
  return (
    <Button
      type={type}
      color="primary"
      variant="contained"
      className={clsx("", className)}
      disabled={disabled}
      loading={isLoading}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};
