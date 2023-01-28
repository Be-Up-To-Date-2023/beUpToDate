import { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Orders } from "../hooks/useContextComponent";

function BadgeComponent() {
  const { orders } = useContext(Orders);
  return (
    <Button variant="light">
      orders <Badge bg="danger">{orders.length}</Badge>
    </Button>
  );
}

export default BadgeComponent;
