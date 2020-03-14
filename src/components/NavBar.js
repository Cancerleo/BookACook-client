import React from "react";
import { connect } from "react-redux";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontFamily: "Source Sans Pro",
    fontStyle: "sans-serif",
    outline: "none",
    letterSpacing: "0.10em",
    fontSize: "13px",
    marginBottom: "-2px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Logo Here
          </Typography>
          <Button color="inherit" href="/signup">
            Become a cook
          </Button>
          <Button color="inherit" href="/signin">
            Login
          </Button>

          {/* <Avatar
            alt="Remy Sharp"
            src={this.props.userAvatar ? this.props.userAvatar : null}
          /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    userAvatar: reduxState.user.userProfile.imageUrl
  };
}

export default connect(mapStateToProps)(NavBar);
