import { Card, Col, Button } from 'antd';


function FoodBox({food: {name, calories, image, servings}, deleteFood}) {


  const removeFood = () =>{
    deleteFood(name)
  }

  return (
    <div>
      <Col>
        <Card
          title={name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={image} height={60} alt="food" />
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>
            <b>Total Calories: {calories * servings} </b> kcal
          </p>
          <Button type="primary" onClick={removeFood}> Delete </Button>
        </Card>
      </Col>
    </div>
  );
}

export default FoodBox;
