import "./Catalog.css";
import { Bike } from "../Bike/Bike";
import { useEffect, useState } from "react";
import * as bikeService from "../../services/bikeService";
import Button from "../Button/Button";

export const Catalog = () => {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);

  useEffect(() => {
    bikeService
      .getAll()
      .then((result) => {
        setBikes(result);
      })
      .catch(() => {
        setBikes([]);
      });

    return () => {
        setBikes([]);
    };
  }, []);

  useEffect(() => {
    bikeService
      .getAll()
      .then((result) => {
        setFilteredBikes(result);
      })
      .catch(() => {
        setFilteredBikes([]);
      });

    return () => {
        setFilteredBikes([]);
    };
  }, []);

  const onSearchHandler = (e) => {
    e.preventDefault();
    const { name, type } = Object.fromEntries(
      new FormData(e.target.parentElement)
    );
    let searchNameInput = name;
    let searchTypeInput = type;

    if (searchTypeInput === "all-bikes") {
      searchTypeInput = null;
    }

    const resultBikes = bikes.filter((bike) => {
      if (searchNameInput && !searchTypeInput) {
        return bike.name.includes(searchNameInput);
      } else if (searchTypeInput && !searchNameInput) {
        return bike.type === searchTypeInput;
      } else if (searchTypeInput && searchNameInput) {
        return (
          bike.name.includes(searchNameInput) && bike.type === searchTypeInput
        );
      } else {
        return bike;
      }
    });
    setFilteredBikes(resultBikes);
  };

  const onClearHandler = (e) => {
    e.preventDefault();
    setFilteredBikes(bikes);
    const nameInput = document.querySelector('.search-name');
    const typeInput = document.querySelector('.type-select');
    nameInput.value = '';
    typeInput.value = 'all-bikes';
  };

  return (
    <section className="catalog">
      <h1>
        <span>BIKES FOR RENT</span>
      </h1>

      <nav className="navbar navbar-light">
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="name" className="font-weight-bold-small label-name">
              Search by name:
            </label>
            <input
              className="form-control search-name"
              id="name"
              name="name"
              placeholder="Search"
              aria-label="Search"
            />
          </div>

          <div className="form-group form-group-type">
            <label htmlFor="type" className="font-weight-bold-small label-type">
              Search by type:
            </label>
            <select className="form-control type-select" id="type" name="type">
              <option value="all-bikes">All Bikes</option>
              <option value="city">City Bikes</option>
              <option value="mtb">MTB Bikes</option>
              <option value="road">Road Bikes</option>
              <option value="easy-on">Easy-on Bikes</option>
            </select>
          </div>
          <Button className="btn-go" onClick={onSearchHandler}>
            GO
          </Button>
          <Button
            className="btn-clear"
            data-testid="clear"
            onClick={onClearHandler}
          >
            CLEAR
          </Button>
        </form>
      </nav>

      <div className="row">
        {filteredBikes.length > 0 ? (
          filteredBikes?.map((bike) => {
            return (
              <div className="col-4" key={bike._id}>
                <Bike bike={bike} />
              </div>
            );
          })
        ) : (
          <div className="no-offer text-center">
            <p>There are no bikes to rent at the moment!</p>
          </div>
        )}
      </div>
    </section>
  );
};
