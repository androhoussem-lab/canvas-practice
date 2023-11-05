import { useState } from "react";
import Canvas from "./components/Canvas"; //Canvas component
import Form from "./components/Form"; //Form component
import Title from "./components/Title"; //Title component
import { DrawContext } from "./contexts/drawContext"; //DrawContext from contexts

const App = () => {
  //window 1 and 2 ,,, u can use useReducer
  const [width, setWidth] = useState(10); //wind 1
  const [height, setHeight] = useState(10); //wind 1
  const [width1, setWidth1] = useState(10); //wind2
  const [height1, setHeight1] = useState(10); //wind 2

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
