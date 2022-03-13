import { useLottie } from "lottie-react";
import loading from "../lottie/loading"

const Loading = () => {

    const options = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const { View } = useLottie(options);
    return (
        <div>
            {View}
        </div>
    )
}

export default Loading