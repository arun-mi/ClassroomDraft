import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import VideoLib from "./VideoLib/VideoLib";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "white",
  },
  taber: {
    backgroundColor: "none",
  },
  stuff: {
    border: "1px solid grey",
    backgroundColor: "#4745b1",
    color: "white",
    marginRight: "20px",
    marginLeft: "2px",
    borderRadius: "7%",
  },
}));

export default function Tabber2() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        style={{ boxShadow: "none", backgroundColor: "white" }}
      >
        <Tabs
          className={classes.taber}
          value={value}
          onChange={handleChange}
          indicatorColor="none"
          //textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab className={classes.stuff} label="All" {...a11yProps(0)} />
          <Tab className={classes.stuff} label="Maths" {...a11yProps(1)} />
          <Tab className={classes.stuff} label="English" {...a11yProps(2)} />
          <Tab
            className={classes.stuff}
            label="Social Studies"
            {...a11yProps(3)}
          />
          <Tab className={classes.stuff} label="Science" {...a11yProps(4)} />
          <Tab className={classes.stuff} label="IT" {...a11yProps(5)} />
          <Tab className={classes.stuff} label="History" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        All Slides
        <VideoLib />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
        <VideoLib />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
        <VideoLib />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
        <VideoLib />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
        <VideoLib />
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
        <VideoLib />
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
        <VideoLib />
      </TabPanel>
    </div>
  );
}
