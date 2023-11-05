import { useState } from "react";
import Canvas from "./components/Canvas";
import Form from "./components/Form";
import Title from "./components/Title";
import { DrawContext } from "./contexts/drawContext";

const App = () => {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [width1, setWidth1] = useState(10);
  const [height1, setHeight1] = useState(10);

  return (
    <DrawContext.Provider
      value={{
        width,
        height,
        setWidth,
        setHeight,
        width1,
        height1,
        setWidth1,
        setHeight1,
      }}
    >
      <section className="p-20 flex flex-col justify-center items-center gap-10">
        <Title title="Windows App" />
        <div className="flex justify-center items-center">
          <Form />
          <Canvas />
        </div>
      </section>
    </DrawContext.Provider>
  );
};

export default App;
