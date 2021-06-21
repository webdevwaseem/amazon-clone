import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import SearchResult from "./SearchResult";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon_logo"
        />
      </Link>

      <div className="header_search">
        <input
          onSubmit={SearchResult}
          className="header_searchInput"
          type="text"
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login">
          <div className="header_option">
            <span className="header_optionlineone">Hello Guest</span>
            <span className="header_optionlinetwo">sign In</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionlineone">Returns</span>
          <span className="header_optionlinetwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionlineone">Your</span>
          <span className="header_optionlinetwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionlinetwo header_basketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
