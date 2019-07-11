import React, { Component } from "react";
const cc = require("cryptocompare");

export const AppContext = React.createContext();
const MAX_FAV = 10;
export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Dashboard",
      favourties: ["BTC", "ETH", "XMR", "DOGE"],
      ...this.savedSettings(),
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      confirmFavourties: this.confirmFavourties
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
  };
  fetchCoins = async () => {
    let coins = await cc.coinList();
    this.setState({ coinList: coins.Data });
  };

  fetchPrices = async () => {
    if (this.state.firstVisit) return;
    let prices = await this.prices();
    this.setState({ prices: prices.Data });
    console.log(prices.slice(0, 10));
  };
  prices = async () => {
    let returnData = [];
    for (let crypto of this.state.favourties) {
      try {
        let price = await cc.priceFull(crypto, "USD");
        returnData.push(price);
      } catch (err) {
        console.warn("Fetch price error: ", err);
      }
    }
    return returnData;
  };

  addCoin = key => {
    let favourties = [...this.state.favourties];
    if (favourties.length < MAX_FAV) {
      if (!favourties.includes(key)) {
        favourties.push(key);
        this.setState({ favourties });
      }
    }
  };

  removeCoin = key => {
    let favourties = [...this.state.favourties];
    this.setState({
      favourties: favourties.filter(itemKey => {
        return itemKey != key;
      })
    });
  };
  setPage = page => {
    this.setState({ page });
  };

  savedSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) {
      return { page: "Settings", firstVisit: true };
    }
    let { favourties } = cryptoDashData;
    return { favourties };
  };

  confirmFavourties = () => {
    this.setState({ firstVisit: false, page: "Dashboard" }, () => {
      this.fetchPrices();
    });
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({ favourties: this.state.favourties })
    );
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
