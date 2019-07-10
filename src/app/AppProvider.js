import React, { Component } from "react";

export const AppContext = React.createContext();

export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Dashboard",
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavourties: this.confirmFavourties
    };
  }
  setPage = page => {
    this.setState({ page });
  };

  savedSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) {
      return { page: "Settings", firstVisit: true };
    }
    return {};
  };

  confirmFavourties = () => {
    this.setState({ firstVisit: false, page: "Dashboard" });
    localStorage.setItem("cryptoDash", JSON.stringify({ test: "hello" }));
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
