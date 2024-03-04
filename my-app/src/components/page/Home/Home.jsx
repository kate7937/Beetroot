import "./home.scss";
import MainSlider from "../../slider/MainSlider/MainSlider";
import SecondSlider from "../../slider/SecondSlider/SecondSlider";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Movies Anywhere | Home";
  }, []);
  return (
    <div className="main_home">
      <MainSlider />
      <SecondSlider />
    </div>
  );
}

export default Home;
