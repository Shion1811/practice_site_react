"use strict";
import { Image } from "./Image";
export const Modal = (prop) => {
  return (
    <>
      <div id="overlay">
        <div id="content">
          <Image fileName="1.JPG" width={600} height={600} />
          <p>
            <button onClick={() => prop.closeHandler(false)}>close</button>
          </p>
        </div>
      </div>
    </>
  );
};
