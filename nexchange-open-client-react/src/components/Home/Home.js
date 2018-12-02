import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCoinDetails, fetchPairs } from 'Actions';

import Hero from './Hero/Hero';
import About from './About/About';
import RecentOrders from './RecentOrders/RecentOrders';


export class Home extends Component {
  componentDidMount() {
    this.props.fetchCoinDetails();
    this.props.fetchPairs();
  }
  componentDidUpdate(prevProps, prevState) {
    // Detect coin change by link
    if(this.props.location.search !== prevProps.location.search) {
        this.props.fetchCoinDetails();
        this.props.fetchPairs();
    }
  }

  render() {
    return (
      <div>
        <Hero {...this.props} />
        <RecentOrders />
        <About />
      </div>
    );
  }
}

const mapStateToProps = ({ coinsInfo, selectedCoin }) => ({ coinsInfo, selectedCoin });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchCoinDetails, fetchPairs}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);