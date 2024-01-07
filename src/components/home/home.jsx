import"./home.css"
import { FaRegHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


const Home = () => {
    return (
      <div className="card-3">
        {/* <h2 className="top-head">FRESH FROM OUR COMMUNITY</h2> */}
        <div className="head-1">
          <img
            className="image"
            src="https://geniuskitchen.sndimg.com/gk/img/avatar/sushi.png"
            alt=""
          />
          <h4>Buckeyeblonde1 asked a question about Potato Casserole for 80</h4>
          <h5>
            Can this made a day ahead? And what would the directions be for bake
            time in electric roaster?
          </h5>
          <div className="bottom">
            <h5>20 Minutes Ago</h5>
            <h5>Reply</h5>
            <FaRegHeart />
          </div>
        </div>
        <div className="head-2">
          <img
            className="image"
            src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_48,ar_1:1/v1/avatars/21_medthumb_hor.gif"
            alt=""
          />
          <div className="star">
            <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
          </div>

          <h4>Camden's Mom reviewed Olive Garden Style Chicken and Gnocchi</h4>
          <h5>
            This is really a tweak, not a review. I'm giving the recipe 4 stars
            because I used most of the amounts given here successfully, but I
            made it in a different way to get the most flavor out of the recipe
            while ensuring that the soup wouldn't...
          </h5>
          <div className="bottom-2">
            <h5>20 Minutes Ago</h5>
            <h5>Reply</h5>
            <FaRegHeart />
          </div>
        </div>
        <div className="head-1">
          <img
            className="image"
            src="https://geniuskitchen.sndimg.com/gk/img/avatar/pie.png"
            alt=""
          />
          <h4>Larawithoutau added a photo to BarBecued Limb Rat (squirrel)</h4>
          <h5>
            Can this made a day ahead? And what would the directions be for bake
            time in electric roaster?
          </h5>
          <div className="bottom">
            <h5>20 Minutes Ago</h5>
            <h5>Reply</h5>
            <FaRegHeart />
          </div>
        </div>  
      </div>
    );
}
 
export default Home;
