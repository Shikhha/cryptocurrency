import React, { Component } from "react";
import moment from "moment";
const cc = require("cryptocompare");
export const AppContext = React.createContext();

const MAX_FAV = 10;
const TIME_UNITS = 30;

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
      confirmFavourties: this.confirmFavourties,
      setCurrentFav: this.setCurrentFav
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
    this.fetchHistorical();
  };
  fetchCoins = async () => {
    let coins = await cc.coinList();
    this.setState({ coinList: coins.Data });
    console.log(coins.Data);
  };
  fetchHistorical = async () => {
    if (this.state.firstVisit) return;
    let result = await this.historical();
    let historical = [
      {
        name: this.state.currentfav,
        data: result.map((ticker, index) => [
          moment()
            .subtract({ months: TIME_UNITS - index })
            .valueOf(),
          ticker.USD
        ])
      }
    ];
    console.log(historical);
    this.setState({ historical });
  };
  historical = () => {
    let promises = [];
    for (let units = TIME_UNITS; units > 0; units--) {
      promises.push(
        cc.priceHistorical(
          this.state.currentfav,
          ["USD"],
          moment()
            .subtract({ months: units })
            .toDate()
        )
      );
    }

    return Promise.all(promises);
  };
  changeChartSelect = value => {
    this.setState(
      { timeInterval: value, historical: null },
      this.fetchHistorical
    );
  };
  fetchPrices = async () => {
    if (this.state.firstVisit) return;
    let p = await this.getprices();
    this.setState({ prices: p });
    console.log(p);
  };
  getprices = async () => {
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
    let { favourties, currentfav } = cryptoDashData;
    return { favourties, currentfav };
  };

  setCurrentFav = sym => {
    this.setState(
      {
        currentfav: sym,
        historical: null
      },
      this.fetchHistorical
    );

    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptoDash")),
        currentfav: sym
      })
    );
    console.log(this.state.currentfav);
  };
  confirmFavourties = () => {
    let currentfav = this.state.favourties[0];
    console.log(currentfav);
    this.setState(
      {
        firstVisit: false,
        page: "Dashboard",
        currentfav,
        prices: null,
        historical: null
      },
      () => {
        this.fetchPrices();
        this.fetchHistorical();
      }
    );
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({ favourties: this.state.favourties, currentfav })
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
