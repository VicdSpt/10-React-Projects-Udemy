import { useDispatch } from "react-redux";
import { hidePreview } from "../features/preview";

export default function ButtonTabs({ id, toggleTab, buttonContent, imgURL }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        toggleTab(id);
        dispatch(hidePreview());
      }}
      className="flex items-center px-5 py-3 hover:bg-slate-500 focus:bg-slate-800 outline-none"
    >
      <img src={imgURL} className="w-5" alt="" />
      <span className="ml-3 text-slate-100 text-md">{buttonContent}</span>
    </button>
  );
}5