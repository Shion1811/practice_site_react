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
            {" "}
            {/*本の左側*/}
            <Box
              sx={{
                width: "50%",
                display: "grid",
                placeContent: "center",
              }}
            >
              {/*本の左側の画像表示*/}
              <Box
                component={"img"}
                src={imagePageData[pageNumber].left}
                /*視覚障害者向け*/
                alt=""
                sx={{
                  width: "100%",
                  height: "70%",
                  objectFit: "contain",
                  marginTop: "20%",
                }}
              />
            </Box>
            {/*本の右側*/}
            <Box
              sx={{
                width: "50%",
                display: "grid",
                placeContent: "center",
              }}
            >
              {/*本の右側の画像表示*/}
              {/*imagePageDataのrightが1つか4つか、 true:false*/}
              {imagePageData[pageNumber].length === 1 ? (
                <Box
                  component={"img"}
                  src={imagePageData[pageNumber].right[0]}
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
                  referrerPolicy="no-referrer"
                ></Box>
              ) : (
                <Box>
                  <Box
                    component={"img"}
                    src={imagePageData[pageNumber].right[0]}
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
                    referrerPolicy="no-referrer"
                  />
                  <Box
                    component={"img"}
                    src={imagePageData[pageNumber].right[1]}
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
                    referrerPolicy="no-referrer"
                  />
                  <Box
                    component={"img"}
                    src={imagePageData[pageNumber].right[2]}
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
                    referrerPolicy="no-referrer"
                  />
                  <Box
                    component={"img"}
                    src={imagePageData[pageNumber].right[3]}
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
                    referrerPolicy="no-referrer"
                  />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
