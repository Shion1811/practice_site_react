import { AppBar, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { imagePageData } from "./App";
import { ChevronLeft } from "@mui/icons-material";
//ImagePageを宣言
export const ImagePage = (props) => {
  //その他コード
  console.log(props);
  //const pageNumber = location.params["pageNumber"];
  const pageNumber = props.match.params["pageNumber"];
  //returnしてる（一関数につき一つ）
  return (
    <>
      {/*角の白枠背景 */}
      <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "white" }}>
        {/*背景*/}
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
          {/* header*/}
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
          {/*大元の本枠*/}
          <Box
            sx={{
              backgroundImage: "url(/Book.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "calc(700px * 1.6)",
              height: "calc(400px * 1.6)",
              backgroundSize: "contain",
              margin: "100px auto",
              display: "flex",
            }}
          >
            <Box
              sx={{
                flexGrow: "1",
                display: "grid",
                placeContent: "center",
              }}
            >
              左
            </Box>
            <Box
              sx={{
                flexGrow: "1",
                display: "grid",
                placeContent: "center",
              }}
            >
              右
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
