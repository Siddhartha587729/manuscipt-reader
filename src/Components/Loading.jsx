import Lottie from "react-lottie";
import loading from '../images/loading.json'
const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
    };
    return ( 
        <div>
            <Lottie
                options={defaultOptions}
                height={300}
                width={300}
            >   
            </Lottie>
            <p> Just a moment we&apos;re loading your content...
            </p>
        </div>
    );
}
 
export default Loading;