import { useEffect, useState } from "react";
import * as bikeService from "../../services/bikeService";
import bikeSign from "../../img/bike-rental.png";
import "./Home.css";
import { Bike } from "../Bike/Bike";
import Button from "../Button/Button";

export const Home = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    bikeService
      .getAll()
      .then((result) => {
        if (result.length <= 3) {
          return setBikes(result);
        }
        const resultArray = result.slice(result.length - 3);
        setBikes(resultArray);
      })
      .catch(() => {
        setBikes([]);
      });
  }, []);

  return (
    <div className="home">
      <div className="main-sign">
        <img src={bikeSign} alt="sign" />
      </div>

      <Button to="/catalog">BOOK YOUR BIKE</Button>

      {bikes.length > 0 && (
        <>
          <h2 className="title">Latest Listings</h2>

          <div className="bike-list">
            <div className="row">
              {bikes?.map((x) => {
                return (
                  <div className="col-4" key={x._id}>
                    <Bike bike={x} />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
