import { useInView } from "react-intersection-observer";
import { Box } from "@mui/system";

export const Image = ({ width = 200, height = 200, fileName, openHandler }) => {
  const { ref, inView } = useInView();

  let css;

  if (inView) {
    css = { display: "inline-block", transition: "all .3s ease-out" };
  } else {
    css = {
      display: "inline-block",
      transition: "all .3s ease-out",
      transform: "scale(0.7)",
    };
  }
  return (
    <Box sx={css}>
      <img
        src={window.location.origin + "/" + fileName}
        alt="contents"
        width={width}
        height={height}
        onClick={() => openHandler(true)}
        ref={ref}
      />
    </Box>
  );
};
const DummyImage = () => {
  const { ref, inView } = useInView();

  let css;

  if (inView) {
    css = { display: "inline-block", transition: "all .3s ease-out" };
  } else {
    css = {
      display: "inline-block",
      transition: "all .3s ease-out",
      transform: "scale(0.7)",
    };
  }
  return (
    <Box sx={css}>
      <img
        ref={ref}
        alt="dummy"
        src="https://placehold.jp/3d4070/ffffff/300x300.png"
      />
    </Box>
  );
};
