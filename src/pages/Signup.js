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

const Signup = () => {

    const[data,setData] = useState({
        name:"",
        email:"",
        password:"",
        about:""
    })

    const [error,setError] = useState({
        errors:{},
        isError:false
    })

    const handleChange=(event)=>{
        console.log("Name changed");
    }
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
                    <Label for="name">Enter Name</Label>
                    <Input id="name" type="text" placeholder="Name" 
                    onChange={(e)=>handleChange(e)}/>
                  </FormGroup>

                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input id="email" type="email" placeholder="Name" />
                  </FormGroup>

                  <FormGroup>
                    <Label for="password">Enter Password</Label>
                    <Input id="password" type="password" placeholder="Name" />
                  </FormGroup>

                  <FormGroup>
                    <Label for="about">Enter About you</Label>
                    <Input
                      id="about"
                      type="textarea"
                      placeholder="Name"
                      style={{ height: "200px" }}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button outline inverse="true" color="light" type="submit">
                      Register
                    </Button>
                    <Button
                      outline
                      inverse="true"
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

export default Signup;