import { AppBar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Image } from "./Image";
import { imagePageData } from "./App";
import { Numbers } from "@mui/icons-material";
//ImagePageを宣言
export const ImagePage = (props) => {
  //その他コード
  console.log(props.match);
  const data = imagePageData[1];
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
          {/*left写真配置*/}
          <Box
            component={"img"}
            src={imagePageData[1].left}
            /*視覚障害者向け*/
            alt=""
            sx={{
              objectFit: "contain",
              position: "fixed",
              top: "48%",
              left: "31%",
              transform: "translate(-50%, -50%)",
              width: "30vw",
              height: "30vw",
            }}
          />
          {/*right写真配置*/}
          {/*imagePageDataの一番目のrightが配列がどうか？ true:false*/}
          {Array.isArray(imagePageData[1].right) ? (
            <Box>
              <Box
                component={"img"}
                src={imagePageData[1].right[0]}
                alt=""
                sx={{
                  objectFit: "contain",
                  position: "fixed",
                  top: "36%",
                  left: "62%",
                  transform: "translate(-50%, -50%)",
                  width: "13w",
                  height: "15vw",
                }}
              />
              <Box
                component={"img"}
                src={imagePageData[1].right[1]}
                alt=""
                sx={{
                  objectFit: "contain",
                  position: "fixed",
                  top: "36%",
                  left: "75%",
                  transform: "translate(-50%, -50%)",
                  width: "13vw",
                  height: "15vw",
                }}
              />
              <Box
                component={"img"}
                src={imagePageData[1].right[2]}
                alt=""
                sx={{
                  objectFit: "contain",
                  position: "fixed",
                  top: "61%",
                  left: "62%",
                  transform: "translate(-50%, -50%)",
                  width: "13vw",
                  height: "15vw",
                }}
              />
              <Box
                component={"img"}
                src={imagePageData[1].right[3]}
                alt=""
                sx={{
                  objectFit: "contain",
                  position: "fixed",
                  top: "61%",
                  left: "75%",
                  transform: "translate(-50%, -50%)",
                  width: "13vw",
                  height: "15vw",
                }}
              />
            </Box>
          ) : (
            <Box
              component={"img"}
              src={imagePageData[1].right}
              alt=""
              sx={{
                objectFit: "contain",
                position: "fixed",
                top: "48%",
                left: "70%",
                transform: "translate(-50%, -50%)",
                width: "30vw",
                height: "30vw",
              }}
            ></Box>
          )}
        </Box>
      </Box>
    </>
  );
};
