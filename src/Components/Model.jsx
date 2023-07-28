import "../Styles/model.css"
import book from "../assets/scene.gltf"
/* import { ModelViewer } from 'react-model-viewer'; */

function Model() {
  return (
    <div className="top_bar">
        <div className="left_bar">
            <div className="left-bar-head">
                <h4>Create your own digital </h4>
                <h1><span>Manuscript</span></h1>
            </div>
        </div>
        <div className="right_bar">
            {/* <model-viewer src={book} alt="A 3D model of a book" shadow-intensity="1" camera-controls auto-rotate ar></model-viewer>
    
            <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
    
            <script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script> */}
        </div>
    </div>
  )
}

export default Model