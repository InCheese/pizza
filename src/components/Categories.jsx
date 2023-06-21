import React from "react";

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
]


function Categories() {
const [activeIndex, setActiveIndex] = React.useState(0);
const chooseCategory = (id) => () => setActiveIndex(id);

    return (
        <div className="categories">
        <ul>
          {
          categories.map((value, index) => (
          <li className={activeIndex===index ? "active" : ""} onClick = {chooseCategory(index)}>
            {value}
            </li>
            ))
          }
        </ul>
      </div>
    )
}

export default Categories;