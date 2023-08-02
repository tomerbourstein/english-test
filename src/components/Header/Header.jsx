import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Typography>AI Tutor</Typography>
      <TextField
        variant="outlined"
        size="small"
        label={<StarBorderOutlinedIcon />}
        autoComplete="off"
      />
      <Fab size="small" color="secondary">
        GO
      </Fab>
    </header>
  );
};

export default Header;
