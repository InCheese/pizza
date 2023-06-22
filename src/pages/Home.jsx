import React from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
  
    //запрос на бэк не проходит мгновенно и ответ также не приходит мгновенно
    //fetch - асинхронная функция
    React.useEffect(() => {
      setIsLoading(true);
      fetch("https://649451790da866a95367909d.mockapi.io/items")
        .then((res) => {
          return res.json();
        })
        .then((itemsFromBack) => {
          setItems(itemsFromBack);
          setIsLoading(false);
        });
    }, []);

  return (
    <>
     <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
    </>
  )
}

export default Home;
