import "../App.css";
import Navbar from "../components/Navbar";
import Carrousel from "../components/Carrousel"

const Home = () => {
  return (
    <>
      <div
        className="set_bg_home"
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        {/* <Navbar /> */}
   <Carrousel/>
      </div>
    </>
  );
};

export default Home;
