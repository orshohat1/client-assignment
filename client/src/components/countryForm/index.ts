import { connect } from "react-redux";
import { getNameAndCodeAction, getRegionAction, getCityAction } from "../../actions";
import { _CountryForm } from "./countryForm";

const mapDispatchToProps = (dispatch: any) => ({
    getNameAndCode: (body: any) => dispatch(getNameAndCodeAction(body)),
    getRegion:(body: any) =>  dispatch(getRegionAction(body)),
    getCity:(body: any) => dispatch(getCityAction(body)) ,
});

export const CountryForm = connect(null, mapDispatchToProps)(_CountryForm);
