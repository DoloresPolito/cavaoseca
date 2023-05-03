import "../App.css";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div
        className="set_bg_home"
        style={{
          // backgroundImage: "url('photo3.jpg')",
          width: "100%",
          height: "100vh",
        }}
      >
        <Navbar />
      </div>
    </>
  );
};

export default Home;
