import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {

    let [name,setName]=useState("")
    let [image,setImage]=useState("")
    let [calories,setCalories]=useState(1)
    let [servings,setServings]=useState(1)

    let handleNameInput = e => setName(e.target.value)
    let handleImageInput = e => setImage(e.target.value)
    let handleCaloriesInput = e => setCalories(e.target.value)
    let handleServingsInput = e => setServings(e.target.value)

    let handleSubmit=(e) =>{
        e.preventDefault();

        let newFood={
            name,
            image,
            calories,
            servings
        };

       props.addNewFood(newFood);

       setName("")
       setImage("")
       setCalories(1)
       setServings(1)
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesInput} />


      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsInput} />


      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;