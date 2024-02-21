import "./Home.scss";
import MainSlider from "../MainSlider/MainSlider";
import SecondSlider from "../SecondSlider/SecondSlider";

function Home () {
    return (
        <div className="main_home">
            <MainSlider />
            <SecondSlider />
        </div>
    )
}

export default Home;