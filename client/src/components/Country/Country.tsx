import React, { PureComponent } from "react";
import { Col, Card } from "react-bootstrap";

interface CountryProps {
    country: any;
    isLoading: boolean;
}

export class _Country extends PureComponent<CountryProps> {
    render() {
        const { country, isLoading } = this.props;
        return (
            <div> {country ? (
                <Col lg={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Text className="text-center">
                             <h4>{country.name}</h4>
                             Code: {country.code}
                            </Card.Text>
                            <hr />
                            Regions:
                            <Card.Text>{country.regions.map((r: any) => <p>{r.region}</p>)}</Card.Text>
                            <hr />
                            <div> {isLoading ? (
                            <p>Loading Cities...</p>

                            ) : (
                             <Card.Text>Cities:
                                 {country.cities.map((array: any) => (array.map((c: any) => (<p>{c.city}</p>)))) }</Card.Text>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ) : (
                    <p>  </p>
                )}
            </div>



        );
    }
}