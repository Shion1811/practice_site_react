import { Button, Tab, Tabs, Box, Typography, css } from "@mui/material";
import { positions } from "@mui/system";
import { useState } from "react";
import { Image } from "./Image";
import { Modal } from "./Modal";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const App = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
        <Box
          sx={{
            width: "90vw",
            height: "90vh",
            overflow: "scroll",
            display: "block",
            position: "absolute",
          }}
        >
          <h1>趣味の部屋</h1>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="インコ" />
            <Tab label="apple" />
            <Tab label="SEKAI NO OWARI" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Typography sx={{ textAlign: "left" }}>1.1</Typography>
            <Image fileName="1.JPG" openHandler={setShow} />
            <Image fileName="2.JPG" openHandler={setShow} />
            <Image fileName="3.JPG" openHandler={setShow} />
            <br />
            <Image fileName="1.JPG" openHandler={setShow} />
            <Image fileName="2.JPG" openHandler={setShow} />
            <Image fileName="3.JPG" openHandler={setShow} />
            <br /> <Image fileName="1.JPG" openHandler={setShow} />
            <Image fileName="2.JPG" openHandler={setShow} />
            <Image fileName="3.JPG" openHandler={setShow} />
            <br /> <Image fileName="1.JPG" openHandler={setShow} />
            <Image fileName="2.JPG" openHandler={setShow} />
            <Image fileName="3.JPG" openHandler={setShow} />
            <br /> <Image fileName="1.JPG" openHandler={setShow} />
            <Image fileName="2.JPG" openHandler={setShow} />
            <Image fileName="3.JPG" openHandler={setShow} />
            <br /> <Image fileName="1.JPG" openHandler={setShow} />
            <Image fileName="2.JPG" openHandler={setShow} />
            <Image fileName="3.JPG" openHandler={setShow} />
            <br /> <Image fileName="1.JPG" openHandler={setShow} />
            <Image fileName="2.JPG" openHandler={setShow} />
            <Image fileName="3.JPG" openHandler={setShow} />
            <br /> <Image fileName="1.JPG" openHandler={setShow} />
            <Image fileName="2.JPG" openHandler={setShow} />
            <Image fileName="3.JPG" openHandler={setShow} />
            <br /> <Image fileName="1.JPG" openHandler={setShow} />
            <Image fileName="2.JPG" openHandler={setShow} />
            <Image fileName="3.JPG" openHandler={setShow} />
            <br /> <Image fileName="1.JPG" openHandler={setShow} />
            <Image fileName="2.JPG" openHandler={setShow} />
            <Image fileName="3.JPG" openHandler={setShow} />
            <br /> <Image fileName="1.JPG" openHandler={setShow} />
            <Image fileName="2.JPG" openHandler={setShow} />
            <Image fileName="3.JPG" openHandler={setShow} />
            <br /> <Image fileName="1.JPG" openHandler={setShow} />
            <Image fileName="2.JPG" openHandler={setShow} />
            <Image fileName="3.JPG" openHandler={setShow} />
            <br /> <Image fileName="1.JPG" openHandler={setShow} />
            <Image fileName="2.JPG" openHandler={setShow} />
            <Image fileName="3.JPG" openHandler={setShow} />
            <br /> <Image fileName="1.JPG" openHandler={setShow} />
            <Image fileName="2.JPG" openHandler={setShow} />
            <Image fileName="3.JPG" openHandler={setShow} />
            <br />
          </TabPanel>
          <TabPanel value={value} index={1}></TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </Box>
      {show && <Modal closeHandler={setShow} />}
    </>
  );
};
