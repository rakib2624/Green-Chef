import "./Cover.css";
import coverImage from "../../assets/images/cover.jpg";

const Cover = () => {
  return (
    <div className="cover_parent">
      <div className="cover_img">
        <img src={coverImage} className="w-[1320px] rounded-[24px]"></img>
        <div className="cover_text">
          <h1 className="text-[52px] w-[897px] font-bold text-white">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <h3 className="font-[18px] w-[933px] text-white">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </h3>
          <button className="btn btn-success rounded-[50px] w-[187px] text-[20px] font-semibold">
            Explore Now
          </button>
          <button className="btn btn-outline rounded-[50px] w-[187px] text-white text-[20px] font-semibold">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
