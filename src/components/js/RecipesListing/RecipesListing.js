import { useState, useContext, useEffect } from "react";
import OverlayScreen from "../OverlayScreen/OverlayScreen";
import "../RecipesListing/RecipesListing.scss";
import Banner from "../Banner/Banner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CartContext } from "../Provider/CartProvider";
import Bill from "../BillDetails/Bill";

const RecipesListing = (props = {}) => {
  const { recipes = [], limit = "", total = "", itemsPerPage = 12 } = props,
    [hover, setHover] = useState(0),
    [filteredRecipes, setFilteredRecipes] = useState(recipes),
    { foodfilter } = useContext(CartContext),
    handlehover = (id) => {
      setHover(id);
    };

  useEffect(() => {
    const filteredRecipes =
      foodfilter === "All"
        ? recipes
        : recipes.filter((data) => data.mealType.includes(foodfilter));
    setFilteredRecipes(filteredRecipes);
  }, [foodfilter, recipes]);

  return (
    <div className="recipes-listing">
      <Banner />
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="recipes-container">
              <div className="row">
                {filteredRecipes.map((data) => (
                  <div
                    key={data.id}
                    className="mt-4 my-5 col-6 col-md-4 col-lg-3"
                  >
                    <div className="racipes-image">
                      <div className="overlay-container">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAQAAACRI2S5AAAAEElEQVR42mNkIAAYRxWAAQAG9gAKqv6+AwAAAABJRU5ErkJggg=="
                          style={{ width: "100%" }}
                        />
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
          <div className="col-3 p-3">
            <Bill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesListing;
