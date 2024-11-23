import { useState } from "react";
import OverlayScreen from "../OverlayScreen/OverlayScreen";
import ReactPaginate from "react-paginate";
import "../RecipesListing/RecipesListing.scss";

const RecipesListing = (props = {}) => {
  const { recipes = [], limit = "", total = "", itemsPerPage = 8 } = props,
    [hover, setHover] = useState(0),
    handlehover = (id) => {
      setHover(id);
    };

  const [currentPage, setCurrentPage] = useState(0);

  // Calculate pagination
  const pageCount = Math.ceil(recipes.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentRecipes = recipes.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="recipes-listing">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="recipes-container">
              <div className="row">
                {currentRecipes.map((data) => (
                  <div
                    key={data.id}
                    className="mt-4 my-5 col-6 col-md-4 col-lg-3"
                  >
                    <div className="racipes-image">
                      <div className="overlay-container">
                        <img
                          src="https://via.placeholder.com/300x400"
                          style={{ width: "100%" }}
                        />
                        <img
                          src={data.image}
                          onMouseEnter={() => handlehover(data.id)}
                          className="recipes"
                          style={{ width: "100%" }}
                        />
                        {hover === data.id && <OverlayScreen {...data} />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesListing;
