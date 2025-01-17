import { useState, useContext, useEffect } from "react";
import OverlayScreen from "../OverlayScreen/OverlayScreen";
import "../RecipesListing/RecipesListing.scss";
import Banner from "../Banner/Banner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CartContext } from "../Provider/CartProvider";
import Bill from "../BillDetails/Bill";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { MdFreeBreakfast } from "react-icons/md";
import { MdLunchDining } from "react-icons/md";
import { MdDinnerDining } from "react-icons/md";

const RecipesListing = (props = {}) => {
  const { recipes = [], limit = "", total = "", itemsPerPage = 12 } = props,
    [hover, setHover] = useState(0),
    [filteredRecipes, setFilteredRecipes] = useState(recipes),
    [loading, setLoading] = useState(true),
    { foodfilter, setFoodfilter } = useContext(CartContext),
    handlehover = (id) => {
      setHover(id);
    },
    filterFood = (value) => {
      setFoodfilter(value);
    };

  useEffect(() => {
    const filteredRecipes =
      foodfilter === "All"
        ? recipes
        : recipes.filter((data) => data.mealType.includes(foodfilter));
    setFilteredRecipes(filteredRecipes);
    setLoading(false);
  }, [foodfilter, recipes]);

  return (
    <div className="recipes-listing">
      <Banner />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3 p-3">
            <Bill />
            <div className="row bill mt-5">
              <div>
                <h5>Filter</h5>
                <div>
                  <div
                    className={foodfilter === "All" ? "active" : ""}
                    onClick={() => filterFood("All")}
                  >
                    All
                  </div>
                  <div
                    className={foodfilter === "Breakfast" ? "active" : ""}
                    onClick={() => filterFood("Breakfast")}
                  >
                    Breakfast <MdFreeBreakfast />
                  </div>
                  <div
                    onClick={() => filterFood("Lunch")}
                    className={foodfilter === "Lunch" ? "active" : ""}
                  >
                    Lunch <MdLunchDining />
                  </div>
                  <div
                    className={foodfilter === "Dinner" ? "active" : ""}
                    onClick={() => filterFood("Dinner")}
                  >
                    Dinner
                    <MdDinnerDining />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <div className="recipes-container">
              <div className="row">
                {loading
                  ? Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="col-6 col-md-4 col-lg-3 mt-4 my-5"
                      >
                        <Skeleton />
                      </div>
                    ))
                  : filteredRecipes.map((data) => (
                      <div
                        key={data.id}
                        className="mt-4 my-5 col-6 col-md-4 col-lg-3"
                      >
                        <div className="racipes-image">
                          <div className="overlay-container">
                            <Skeleton count={10}>
                              <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAQAAACRI2S5AAAAEElEQVR42mNkIAAYRxWAAQAG9gAKqv6+AwAAAABJRU5ErkJggg=="
                                style={{ width: "100%" }}
                              />
                            </Skeleton>
                            <LazyLoadImage
                              src={data.image}
                              onMouseEnter={() => handlehover(data.id)}
                              className="recipes"
                              effect="blur"
                              style={{ width: "100%" }}
                            />
                            {hover === data.id && <OverlayScreen {...data} />}
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
            {/* <ReactPaginate
			  previousLabel={"Previous"}
			  nextLabel={"Next"}
			  breakLabel={"..."}
			  pageCount={pageCount}
			  marginPagesDisplayed={2}
			  pageRangeDisplayed={5}
			  onPageChange={handlePageClick}
			  containerClassName={"pagination"}
			  activeClassName={"active"}
			/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesListing;
