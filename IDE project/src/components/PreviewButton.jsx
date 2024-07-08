import showView from "../assets/view.svg"
import hideView from "../assets/hide.svg"
import { useSelector, useDispatch } from "react-redux"
import { showPreview } from "../features/preview"

export default function PreviewButton() {

    const previewData = useSelector(state => state.preview)
    const dispatch = useDispatch()

  return (
    <button
    onClick={() => dispatch(showPreview())}
    className="py-2 px-4 rounded bg-blue-700 flex mx-auto items-center text-slate-50"
    >
        <img 
        className="w-5 mr-3"
        src={previewData.preview ? hideView : showView} alt="" />
        <span>{previewData.preview ? "Hide" : "Show"} Preview</span>
    </button>
  )
}