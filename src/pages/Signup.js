import { Card, CardBody, CardHeader, Container, FormGroup, Label } from "reactstrap";
import Base from "../components/Base";

const signup = () =>{
    return(
        <Base>
        <Container>
            <Card>
                <CardHeader>
                    <h6>Sign up</h6>
                </CardHeader>
                <CardBody>
                    <form>
                        <FormGroup>
                            <Label for="name">Enter Name</Label>
                            <input id="name" type="text" placeholder="Name"/>
                        </FormGroup>
                    </form>
                </CardBody>
            </Card>
        </Container>
        </Base>
    );
};

export default signup;