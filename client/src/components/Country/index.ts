import { connect } from "react-redux";
import { IState } from "../../redux/reducer";
import { _Country } from "./Country";

const mapStateToProps = (state: IState) => {
  return {
    country: state.country,
    isLoading: state.isLoading,
  };
};

export const Country = connect(mapStateToProps)(_Country);
