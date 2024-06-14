import { Suspense} from "react"; 
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../Styles/model.css"
/* import Ancientbook from './Ancientbook' */
import Book from './Book'
import Loading from "./Loading";
const Model1 = () => {
    return ( 
        <div className="model-viewer -translate-y-20 lg:-translate-y-10 h-[80vh] lg:h-[90vh] flex justify-center items-center">
            <Suspense fallback={<Loading/>}>
            <Canvas className="canvas_h ">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1.5} />
                <directionalLight position={[-1, 4, 1]} />
                    <Book />
            </Canvas>
            </Suspense>
        </div>
    );
}
 
export default Model1;