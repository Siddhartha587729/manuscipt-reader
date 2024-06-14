import "../Styles/model.css"
//import book from "../assets/scene.gltf"
import Model1 from "./Model1"
//import { ModelViewer } from 'react-model-viewer';

function Model() {
  return (
    <div className="top_bar font-sans flex-col xl:flex-row">
      <div className="left_bar">
        <div className="left-bar-head">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#15133C]">Create your own digital</span>
            <span className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-[#EC994B] md:text-8xl lg:text-8xl">Manuscript</span>
          </div>
          <h5 className="word_wrap text-base text-[#15133C]">Welcome to Manuscript Reader, your ultimate solution for digitizing and preserving manuscripts. Our innovative tool reads and stores manuscripts in digital form, ensuring easy access and safekeeping of your valuable documents. </h5>
        </div>
      </div>
      <div className="right_bar ">
        <Model1 />
        {/* <model-viewer src={book} alt="A 3D model of a book" shadow-intensity="1" camera-controls auto-rotate ar></model-viewer>
    
            <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
    
  <script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>*/}
      </div>
    </div>
  )
}

export default Model

