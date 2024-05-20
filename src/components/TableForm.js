import React, { useState, useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import { BiSolidEditAlt } from "react-icons/bi";
import { v4 as uuid } from "uuid";
import "./TableForm.css";

const productDict = {
  "Garden Vegetable salad": 150.99,
  "Raw papaya salad": 200,
  "Beet and potato salad": 180,
  "Chilli cheese garlic bread": 120,
  "HONEY CHILLI POTATOES": 140,
  "Indo Chinese Dry Chilli Paneer": 160,
  "Shanghai Style chilli chicken dry": 180,
  "Sweet and Sour Chicken with roasted pineapple": 200,
  "Roast Cajun spice Wings": 190,
  "Kids burger serve with sweet potato fries": 200,
  "Roasted chicken ragins sandwich": 220,
  "Pesto Grilled Vegetables cheese sandwich": 180,
  "Chicken zinger burger serve with Cajun fries": 240,
  "Paneer tikka": 250,
  "Tandoori mushroom": 220,
  "Malai chap": 230,
  "Chicken tikka": 270,
  "Mutton seek kabab": 300,
  "Daal Makhani cooked with spices, butter, and cream": 180,
  "Daal Tadka with a tempering made of ghee": 160,
  "Paneer kalimiri with freshly ground black pepper": 240,
  "Paneer Nimbu Adraki garnish with Fresh mint and coriander": 230,
  "Mushroom Masala drizzle with fresh cream": 220,
  "Makhan malai chap": 210,
  "Amgari chap": 220,
  "Chicken lajawab": 260,
  "Chicken kalimiri with freshly ground black pepper": 270,
  "Zaffrani chicken cook with Safran": 300,
  "Assorted Veg Dimsum Serve with sweet chilli dip": 180,
  "Mouthmelted Chicken dimsum with Peanut Chilli Dip": 200,
  "Home made veg spring rolls with sweet chilli sauce": 150,
  "Fresh Tomatoes Arrabbiata pasta with garlic bread": 220,
  "Home Made white sauce pasta with green olive": 230,
  "Pasta Aglio e Olio (Pasta with Garlic & olive oil)": 210,
  "Onion and mushroom pizza": 250,
  "Tandoori paneer tikki pizza": 270,
  "Chicken and pineapple Hawaiian pizza": 280,
  "Tandoori chicken tikki pizza": 300,
  "Veg Hot and sour soup": 150,
  "Chicken Hot and sour soup": 170,
  "Lemon coriander soup": 140,
  "Chicken Lemon coriander soup": 160,
  "Veg Manchow Soup": 150,
  "Chicken Manchow Soup": 170,
  "Sweet corn soup": 140,
  "Chicken Sweet corn soup": 160,
  "Tom yam soup": 160,
  "Chicken Tom yam soup": 180,
  "Veg Manchuria gravy": 200,
  "Chicken Manchuria gravy": 220,
  "Spicy Veg Hakka Noodles": 180,
  "Spicy chicken Hakka Noodles": 200,
  "Street Style Szechwan Triple fried Rice": 220,
  "Chicken Street Style Szechwan Triple fried Rice": 240,
  "Stir-Fry with Black Pepper Sauce Veg": 210,
  "Stir-Fry with Black Pepper Sauce Chicken": 230,
  "Chicken stir-fry with chili garlic sauce Veg": 210,
  "Chicken stir-fry with chili garlic sauce Chicken": 230,
  "Smokey Malai tikka Sizzler serve with kadak tandoori roti": 320,
  "Angari chicken Sizzler plate serve with butter naan": 340,
  "Paneer and mushroom Sizzler serve with lachha paratha": 310,
  "Peri peri chap Sizzler serve with butter roti": 300,
  "Regular tea": 50,
  "Lemon tea": 60,
  "Masala tea": 70,
  "Hot Chocolate with Marshmallow": 100,
  Cappuccino: 120,
  "Flat white": 130,
  "Ice tea": 80,
  "Lemon Ice tea": 90,
  "Iced coffee": 110,
  "Iced mocha": 120,
  Frappe: 130,
  Lemonade: 70,
  "Strawberry Margarita Smoothie": 150,
  "Strawberry Banana Smoothie": 140,
  "Butterscotch and Cherry Smoothie": 160,
  "Mango Oats Smoothie": 150,
  "Chocolate-Peanut Butter Swirl Smoothie": 170,
  "Blueberry-Almond Smoothie": 180,
  "Blueberry and Chia Seed Smoothie": 190,
  "Papaya-Banana Smoothie": 140,
  "Chocolate fake tini kids special": 130,
  "Green land Mocktail": 140,
  "Virgin Mango Margarita": 150,
  "Faux-jito Mocktail": 120,
  "Virgin mojito": 130,
  "Classic Shirley Temple": 110,
  "Blue Lagoon Mocktail": 150,
};

export default function TableForm({
  services,
  setServices,
  quantity,
  setQuantity,
  rate,
  setRate,
  total,
  setTotal,
  list,
  setList,
  sum,
  setSum,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTotal(quantity * rate);
  }, [quantity, rate, setTotal]);

  const handleProductChange = (e) => {
    const selectedProduct = e.target.value;
    setServices(selectedProduct);
    setRate(productDict[selectedProduct] || 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItems = {
      id: uuid(),
      services,
      quantity,
      rate,
      total,
      count: count + 1,
    };
    setServices("");
    setQuantity("");
    setRate("");
    setTotal(0); // Clear the total
    setList([...list, newItems]);
    setIsEditing(false);
    setCount(count + 1);
  };

  const Editrow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setServices(editingRow.services);
    setQuantity(editingRow.quantity);
    setRate(editingRow.rate);
    setTotal(editingRow.quantity * editingRow.rate);
  };

  const deleterow = (id) => setList(list.filter((row) => row.id !== id));

  useEffect(() => {
    const newSum = list.reduce((acc, item) => acc + item.total, 0);
    setSum(newSum);
  }, [list, setSum]);

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="flex flex-col form-input">
          <label htmlFor="services" className="form-label">
            Product
          </label>
          <select
            name="Product"
            id="services"
            value={services}
            onChange={handleProductChange}
            className="form-input-field"
          >
            <option value="">Select Product</option>
            {Object.keys(productDict).map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>
        <div className="md:grid grid-cols-3 gap-10 md:m-5">
          <div className="flex flex-col form-input">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="form-input-field"
            />
          </div>
          <div className="flex flex-col form-input">
            <label htmlFor="rate" className="form-label">
              Rate
            </label>
            <input
              type="number"
              name="rate"
              id="rate"
              placeholder="Rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="form-input-field"
              readOnly
            />
          </div>
          <div className="flex flex-col form-input">
            <label htmlFor="total" className="form-label">
              Total
            </label>
            <p className="form-total form-input-field">{total}</p>
          </div>
        </div>

        <button type="submit" className="form-button">
          {isEditing ? "Save your edit" : "Add More Item"}
        </button>
      </form>

      <section className="mb-5">
        <table width="100%">
          <thead>
            <tr className="bg-gray-100 ">
              <td width="10%">S.No</td>
              <td width="40%">Services</td>
              <td>Quantity</td>
              <td>Rate</td>
              <td>Total</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {list.map(({ id, services, quantity, rate, total, count }) => (
              <tr key={id}>
                <td>{count}</td>
                <td>{services}</td>
                <td>{quantity}</td>
                <td>{rate}</td>
                <td>{total}</td>
                <td>
                  <button onClick={() => deleterow(id)}>
                    <TiDelete className="text-red-800 font-bold" />
                  </button>
                  <button onClick={() => Editrow(id)}>
                    <BiSolidEditAlt className="text-green-800 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h2 className="flex flex-items-end justify-end m-5 text-gray-800 text-3xl">
            Rs. {sum.toLocaleString()}
          </h2>
        </div>
      </section>
    </>
  );
}
