import { AppBar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Image } from "./Image";
import { imagePageData } from "./App";
import { Numbers } from "@mui/icons-material";
//ImagePageを宣言
export const ImagePage = (props) => {
  //その他コード
  console.log(props.match);
  const data = imagePageData[0];
  console.log(data);
  //returnしてる（一関数につき一つ）
  return (
    <>
      <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "white" }}>
        <Box
          sx={{
            width: "97vw",
            height: "97vh",
            overflow: "scroll",
            display: "block",
            position: "absolute",
            backgroundColor: "#EEE0CC",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            margin: "auto",
          }}
        >
          <AppBar sx={{ backgroundColor: "#AA7739" }}>
            <Typography
              sx={{
                color: "white",
                margin: "10px auto 4px auto",
                fontSize: "25px",
              }}
            >
              インコ
            </Typography>
          </AppBar>
        </Box>
      </Box>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          margin: "auto",
          width: "fit-content",
          height: "fit-content",
        }}
      >
        <img src="/Book.svg" alt="" style={{ width: "80vw" }} />
      </Box>
    </>
  );
};
