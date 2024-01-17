import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "./nav.css";


const Navbar = () => {
  return (
    <div className="master">
      <Link to={`/`}>
        <div className="heading">
          <h1>Food.</h1>
        </div>
      </Link>

      <Link to={`/Recipe`}>
        <div className="dropdown">
          <button className="dropbtn">RECIPES</button>

          {/* <div className="dropdown-content"></div> */}
        </div>
      </Link>

      <div className="dropdown">
        <button className="dropbtn">POPULAR</button>
        <div className="dropdown-content">
          <a href="#">Trending Now</a>
          <a href="#">Chili Recipies</a>
          <a href="#">Soup Recipies</a>
          <a href="#">Bread Recipies</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">HEALTHY & DIET</button>
        <div className="dropdown-content">
          <a href="#">Keto Recipes</a>
          <a href="#">Healthy Recipes</a>
          <a href="#">Vegetarian Recipes</a>
          <a href="#">Vegan Recipes</a>
          <a href="#">Weight Watchers Recipes</a>
          <a href="#">Low-Crab Recipes</a>
          <a href="#">Gluten-Free Recipes</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">CUISINE</button>
        <div className="dropdown-content">
          <a href="#">Mexican Recipes</a>
          <a href="#">Italian Recipes</a>
          <a href="#">Indian Recipes</a>
          <a href="#">Thai Recipes</a>
          <a href="#">French Recipes</a>

          <a href="#">Chinese Recipes</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">MEAT & SEAFOOD</button>
        <div className="dropdown-content">
          <a href="#">Chicken Recipes</a>
          <a href="#">Salmon Recipes</a>
          <a href="#">Pork Chop Recipes</a>
        </div>
      </div>

      <div className="dropdown">
        <Link to={`/login`}>
          <button className="dropbtn">LOG IN</button>
        </Link>
      </div>
      <div className="icon">
        {" "}
        <VscAccount />
      </div>
      <input className="search-box" type="search" placeholder="SEARCH HERE" />
    </div>
  );
};

export default Navbar;
