import "./Details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import * as bikeService from "../../services/bikeService";
import { AuthContext } from "../../contexts/AuthContext";
import Button, { buttonVariants } from "../Button/Button";
import { ModalQuote } from "../ModalQuote/ModalQuote";
import { ModalDelete } from "../ModalDelete/ModalDelete";

export const Details = () => {
  const [currentBike, setCurrentBike] = useState({});
  const { auth } = useContext(AuthContext);
  const { bikeId } = useParams();

  useEffect(() => {
    bikeService.getOne(bikeId).then((bikeData) => {
        setCurrentBike(bikeData);
    });
  }, [bikeId]);

  const isOwner = currentBike._ownerId === auth._id;

  return (
    <section className="details">
      <div className="row">
        <div className="col-6">
          <div className="boat-img">
            <img src={currentBike.image} alt=" " />
          </div>
        </div>
        <div className="col-6">
          <div className="boat-info">
            <div className="boat-text">
              <p className="detail-title font-weight-bold-title">Details</p>
              <p className="detail">
                <span className="font-weight-bold">Name: </span>
                {currentBike.name}
              </p>
              <p className="detail">
                <span className="font-weight-bold">Boat type: </span>
                {currentBike.type}
              </p>
              <p className="detail">
                <span className="font-weight-bold">Location: </span>
                {currentBike.location}
              </p>
              <p className="detail">
                <span className="font-weight-bold">Price: </span>$
                {currentBike.price}
              </p>
              <p id="description">
                <span className="font-weight-bold">
                  Additional information:
                </span>
              </p>
              <p id="description">{currentBike.description}</p>
              <div className="details-btn">
                {auth._id &&
                  (isOwner ? (
                    <div>
                      <Button
                        to={`/details/${bikeId}/edit`}
                        className="btn-edit"
                      >
                        EDIT
                      </Button>
                      <Button
                        data-toggle="modal"
                        data-target="#deleteModal"
                        variant={buttonVariants.red}
                      >
                        DELETE
                      </Button>
                    </div>
                  ) : (
                    <Button
                      type="button"
                      data-toggle="modal"
                      data-target="#quoteModal"
                    >
                      GET A QUOTE
                    </Button>
                  ))}
              </div>

              <ModalQuote currentBike={currentBike}></ModalQuote>

              <ModalDelete currentBike={currentBike}></ModalDelete>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
