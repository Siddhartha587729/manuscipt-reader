import { Suspense } from "react"; 
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../Styles/model.css"
/* import Ancientbook from './Ancientbook' */
import Book from './Book'

const Model1 = () => {
    return ( 
        <div className="model-viewer">
            <Canvas className="canvas_h">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1.5} />
                <directionalLight position={[-1, 4, 1]} />
                <Suspense fallback={null}>
                    <Book />
                </Suspense>
            </Canvas>
        </div>
    );
}
 
export default Model1;