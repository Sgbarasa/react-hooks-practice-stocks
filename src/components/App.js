import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then(setStocks);
  }, []);

  function handleBuy(stock) {
    if (!portfolio.find((s) => s.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  }

  function handleSell(stock) {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  }

  const displayedStocks = stocks
    .filter((stock) => (filter === "All" ? true : stock.type === filter))
    .sort((a, b) => {
      if (sortBy === "Alphabetically") return a.name.localeCompare(b.name);
      if (sortBy === "Price") return a.price - b.price;
      return 0;
    });

  return (
    <div>
      <SearchBar
        sortBy={sortBy}
        onSortChange={setSortBy}
        filter={filter}
        onFilterChange={setFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={displayedStocks} onStockClick={handleBuy} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onStockClick={handleSell} />
        </div>
      </div>
    </div>
  );
}

export default App;
