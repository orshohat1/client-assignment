import React, { PureComponent } from "react";
import { Row, Button, Col, Form, } from "react-bootstrap";
import { Dispatch, } from 'redux'
import { IAction } from "../../redux/reducer";

interface CountryFormProps {
    getNameAndCode(body: any): Promise<void>;
    getRegion(body: any): Promise<void>;
    getCity(body: any): Promise<void>;
}
export class _CountryForm extends PureComponent<CountryFormProps> {

    state = {
        countryName: "",
    };

    render() {
        const { countryName } = this.state;

        return (
            <Row className="justify-content-center pt-5 pb-5">
                <Col lg={4}>
                    <Form onSubmit={this.handleFormSubmit}>
                        <Form.Group>
                            <Form.Control
                                as="textarea"
                                rows={12}
                                placeholder="Enter name of country..."
                                value={countryName}
                                onChange={this.handleInputChange}
                                maxLength={500}
                            ></Form.Control>
                        </Form.Group>

                        <Button type="submit" variant="success" className="form-control">
                            Get Data
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }


    handleInputChange = (event: React.ChangeEvent<any>) => {
        const countryName = event.currentTarget.value;
        this.setState({ countryName });
    };

    handleFormSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { getNameAndCode, getRegion, getCity } = this.props;
        await getNameAndCode(this.state);
        await getRegion(this.state);
        await getCity(this.state);
    };
}
