import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./index.css";

class PriceDisplay extends Component {
  constructor(props) {
    super(props);
    console.log("this.props: ");
    console.log(this.props);
  }

  componentDidMount() {
    this.props.getPrice();
  }

  render() {
    console.log("this.props.priceReducer");
    console.log(this.props.priceReducer);
    const { data, err, isFetching } = this.props.priceReducer;
    console.log("data: ");
    console.log(data);
    console.log("isFetching: ", isFetching);
    if (isFetching) {
      return <div>Loading...</div>;
    } else {
      if (err) {
        return <div>{err}</div>;
      } else {
        return (
          <div>
            <div class="top">1 USDT is roughly</div>
            <div class="bottom">
              <span>{data.price} </span>
              <span>CNY</span>
            </div>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    priceReducer: state.priceReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPrice: () => {
      dispatch(actions.getData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceDisplay);
