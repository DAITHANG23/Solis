import { InputAdornment, TextField } from "@mui/material";
import { SearchIcon } from "lucide-react";
interface SearchFieldProps {
  className?: string;
  classNameContainer?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
export const SearchField = ({
  className,
  classNameContainer,
  placeholder,
  ...props
}: SearchFieldProps) => {
  return (
    <div className={classNameContainer} style={{ width: "100%" }}>
      <TextField
        variant="outlined"
        fullWidth
        placeholder={placeholder || "Search..."}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon style={{ width: 20, height: 20 }} />
            </InputAdornment>
          ),
        }}
        className={className}
        sx={{ "& .MuiInputBase-input": { padding: "13.5px 14px" } }}
        {...props}
      />
    </div>
  );
};
