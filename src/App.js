import { Row, Divider, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodListToShow, setFoodListToShow] = useState(foods);
  const [ formIsShowing, setFormIsShowing ] = useState(false)

  const addFood = (food) => {
    const foodListCopy = structuredClone(foodList)
    foodListCopy.push(food)
    setFoodList(foodListCopy)

    const foodListCopyToShow = structuredClone(foodListToShow)
    foodListCopyToShow.push(food)
    setFoodListToShow(foodListCopyToShow)
  }

  const filterSearch = (query) =>{
    const searchResult = foodList.filter((eachFood) => {
      return eachFood.name.toLowerCase().startsWith(query.toLowerCase())
    })
    setFoodListToShow(searchResult)
  }

  const deleteFood = (foodToDeleteName) => {
    const foodListCopy = structuredClone(foodList)
    const afterDeleteList = foodListCopy.filter((eachFood)=>{
      return eachFood.name === foodToDeleteName ? false : true
    })
    setFoodList(afterDeleteList)
    setFoodListToShow(afterDeleteList)
  } 

  const toggleForm = () => {
    formIsShowing ? setFormIsShowing(false) : setFormIsShowing(true)
  }

  return (
    <div className="App">
    {formIsShowing && <AddFoodForm addFood={addFood}/>}
    <Button onClick={toggleForm}> Hide Form / Add New Food </Button>
    <Search filterSearch={filterSearch}/>
    <Divider>Food List</Divider>
    {foodListToShow.length !== 0 ?<Row style={{ width: '100%', justifyContent: 'center' }}>
      {foodListToShow.map((eachFood, index) => {
        return (
          <FoodBox key={eachFood.name + index} food={eachFood} deleteFood={deleteFood}/>
        );
      })}
      </Row> : <Divider><h4>No items to show</h4> <img src="https://media.tenor.com/5aE5T7edBz4AAAAM/the-simpsons-homer-simpson.gif" alt="" /> </Divider>}
      
    </div>
  );
}

export default App;
