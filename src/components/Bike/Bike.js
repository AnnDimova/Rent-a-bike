import "./Bike.css";
import Button from "../Button/Button";

export const Bike = ({ bike }) => {
  return (
    <div className="bike">
      <div className="row w-100 mx-0">
        <div className="col-6">
          <div className="bike-img">
            <img src={bike.image} alt=" " />
          </div>
        </div>
        <div className="col-6">
          <div className="bike-info">
            <div>
              <h6>{bike.name}</h6>
              <p>
                <span>Price per day: </span>${bike.price}
              </p>
              <p>
                <span>Type of bike: </span>
                {bike.type}
              </p>
            </div>
            <div>
              <Button to={`/details/${bike._id}`}>DETAILS</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
