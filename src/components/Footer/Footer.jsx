import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";

import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerItems}>
        <div className={classes.copyrights}>
          <Typography>AI </Typography>
          <Typography>Tutor</Typography>
          <Typography>Copyright © 2023 Tomer</Typography>
        </div>

        <div className={classes.socials}>
          <IconButton aria-label="facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton aria-label="twitter">
            <TwitterIcon />
          </IconButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
