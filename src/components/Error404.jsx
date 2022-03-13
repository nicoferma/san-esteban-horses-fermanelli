import { useLottie } from "lottie-react";
import notFound from "../lottie/notfound.json"

const Error404 = () => {
  const style = {
    height: 700
  };

  const options = {
    animationData: notFound,
    loop: true,
    autoplay: true
  };

  const { View } = useLottie(options, style);

  return (
    <div>
      {View}
    </div>

  )
}

export default Error404