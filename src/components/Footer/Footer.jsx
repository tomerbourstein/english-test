import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";

import TutorLogo from "../../../public/tutor_logo.svg";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.copyrights}>
        <img src={TutorLogo.src} />
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
    </section>
  );
};

export default Footer;
