import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (stock) => {},
  closeBuyWindow: () => {},
  openSellWindow: (stock) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleOpenBuyWindow = (stock) => {
    setIsBuyWindowOpen(true);
    setIsSellWindowOpen(false);
    setSelectedStock(stock);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStock(null);
  };

  const handleOpenSellWindow = (stock) => {
    setIsSellWindowOpen(true);
    setIsBuyWindowOpen(false);
    setSelectedStock(stock);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStock(null);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && selectedStock && <BuyActionWindow stock={selectedStock} />}
      {isSellWindowOpen && selectedStock && <SellActionWindow stock={selectedStock} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
