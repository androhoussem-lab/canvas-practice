import { useContext } from "react";
import { DrawContext } from "../contexts/drawContext";
import Title from "./Title";

const Form = () => {
  const {
    width,
    width1,
    height,
    height1,
    setWidth,
    setWidth1,
    setHeight,
    setHeight1,
  } = useContext(DrawContext);
  const handleWidth = (e) => {
    setWidth(e.target.value);
  };
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleWidth1 = (e) => {
    setWidth1(e.target.value);
  };
  const handleHeight1 = (e) => {
    setHeight1(e.target.value);
  };

  return (
    <form className="w-1/2 h-screen bg-violet-600 p-20 flex flex-col justify-center items-start gap-4">
      <Title title="Window 01" />
      <label htmlFor="width" className="text-white font-bold">
        Width (cm)
      </label>
      <input
        type="number"
        name="width"
        value={width}
        onChange={handleWidth}
        placeholder="Width (cm)"
        className="w-full p-4 outline-none border-none bg-white"
      />
      <label htmlFor="height" className="text-white font-bold">
        height (cm)
      </label>
      <input
        type="number"
        name="height"
        value={height}
        onChange={handleHeight}
        placeholder="height (cm)"
        className="w-full p-4 outline-none border-none bg-white"
      />
      <Title title="Window 02" />
      <label htmlFor="width" className="text-white font-bold">
        Width (cm)
      </label>
      <input
        type="number"
        name="width1"
        value={width1}
        onChange={handleWidth1}
        placeholder="Width (cm)"
        className="w-full p-4 outline-none border-none bg-white"
      />
      <label htmlFor="height" className="text-white font-bold">
        height (cm)
      </label>
      <input
        type="number"
        name="height1"
        value={height1}
        onChange={handleHeight1}
        placeholder="height (cm)"
        className="w-full p-4 outline-none border-none bg-white"
      />
    </form>
  );
};

export default Form;
