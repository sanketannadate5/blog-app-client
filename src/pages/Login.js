// import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Base from "../components/Base";

const login = () => {

    

  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h6>Sign up</h6>
              </CardHeader>
              <CardBody>
                <form>
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input id="email" type="email" placeholder="Name" />
                  </FormGroup>

                  <FormGroup>
                    <Label for="password">Enter Password</Label>
                    <Input id="password" type="password" placeholder="Name" />
                  </FormGroup>

                  <Container className="text-center">
                    <Button outline inverse color="light" type="submit">
                      Login
                    </Button>
                    <Button
                      outline
                      inverse
                      color="light"
                      type="reset"
                      className="ms-2"
                    >
                      Reset
                    </Button>
                  </Container>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default login;
