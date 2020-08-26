import { useState, useEffect } from "react";

export const useKeyPress = (targetKey, handleOnKeypress) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = ({ key }) => {
    if (key === targetKey)  {
      setKeyPressed(true);
    }
  };

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return function cleanup() {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  useEffect(() => {
    if (keyPressed) {
      handleOnKeypress();
    }
  }, [keyPressed, handleOnKeypress]);

};
