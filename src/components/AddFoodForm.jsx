import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);

  const addFoodForm = (event) => {
    event.preventDefault()
    const newFood = {
        name: nameInput,
        image: imageInput,
        calories: caloriesInput,
        servings: servingsInput
    }
    props.addFood(newFood)
  }

  const handleChangeName = (event) =>{
    setNameInput(event.target.value)
  }

  const handleChangeImage = (event) =>{
    setImageInput(event.target.value)
  }

  const handleChangeCalories = (event) =>{
    setCaloriesInput(event.target.value)
  }

  const handleChangeServings = (event) =>{
    setServingsInput(event.target.value)
  }


  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input value={nameInput} type="text" name="name" onChange={handleChangeName} />

      <label htmlFor="image">Image</label>
      <Input value={imageInput} type="text" name="image" onChange={handleChangeImage} />

      <label htmlFor="calories">Calories</label>
      <Input value={caloriesInput} type="number" name="calories" onChange={handleChangeCalories} />

      <label htmlFor="servings">Servings</label>
      <Input value={servingsInput} type="number" name="servings" onChange={handleChangeServings} />

      <button onClick={addFoodForm}>Create</button>
    </form>
  );
}

export default AddFoodForm;
