import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Button } from "react-bootstrap";

function AlertDismissible(name) {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>localhost:3000 says</Alert.Heading>
        <p> {name} is already in contacts.</p>
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            OK
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}
export default AlertDismissible;
