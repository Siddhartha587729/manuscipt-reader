import "../Styles/model.css"
//import book from "../assets/scene.gltf"
import Model1 from "./Model1"
//import { ModelViewer } from 'react-model-viewer';

function Model() {
  return (
    <div className="top_bar font-sans">
        <div className="left_bar">
            <div className="left-bar-head">
                <h4 className="font-medium ">Create your own digital </h4>
                <h1 className=""><span className="left-bar-head-span font-medium ">Manuscript</span></h1>
                <h5 className="word_wrap">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, 
                maiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, repellat.</h5>
            </div>
        </div>
        <div className="right_bar">
          <Model1/>
            {/* <model-viewer src={book} alt="A 3D model of a book" shadow-intensity="1" camera-controls auto-rotate ar></model-viewer>
    
            <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
    
  <script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>*/}
        </div>
    </div>
  )
}

export default Model 

