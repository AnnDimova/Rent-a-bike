import Button, { buttonVariants } from "../Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import * as bikeService from "../../services/bikeService";
import { sleep } from "../../utils/utils";
import { Modal } from "../Modal/Modal";

export const ModalDelete = ({ currentBike }) => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const { bikeId } = useParams();

  const deleteHandler = async () => {
    bikeService.del(bikeId, auth.accessToken);
    await sleep(250);
    navigate("/catalog");
  };
  return (
    <Modal
      modalId="deleteModal"
      modaTitle="Delete Listing"
      modalSubmitButton={
        <Button
          type="button"
          data-dismiss="modal"
          onClick={deleteHandler}
          variant={buttonVariants.red}
        >
          Delete
        </Button>
      }
    >
      <p>
        Are you sure you want to delete {currentBike.type}: {currentBike.name}
      </p>
    </Modal>
  );
};
