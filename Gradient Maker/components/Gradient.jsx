import getGradientCSSValue from "../utils/GetGradientCSSValue";
import { useSelector } from "react-redux";

export default function Gradient() {
    const gradientValues = useSelector(state => state.gradient)
  return (
    <div
      style={{backgroundImage: getGradientCSSValue(gradientValues).slice(0, -1)}}
      className="w-1/2 border-2 border-slate-200 rounded-md"
    ></div>
  );
}
