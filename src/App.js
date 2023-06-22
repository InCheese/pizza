import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort.jsx";
import PizzaBlock from "./components/PizzaBlock";

const pizzas = [];

function App() {
  const [items, setItems] = React.useState([]);

  //запрос на бэк не проходит мгновенно
  React.useEffect(
    () =>
      fetch("https://649451790da866a95367909d.mockapi.io/items")
        .then((res) => {
          return res.json();
        })
        .then((itemsFromBack) => setItems(itemsFromBack)),
    []
  );

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
