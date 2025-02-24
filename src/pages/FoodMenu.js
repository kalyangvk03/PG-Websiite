import React from "react";
import "./food.css"; // Import the updated CSS file

const menu = [
  { day: "Monday", breakfast: "Idly with Sambar & Chutney, Milk/Tea", lunch: "White Rice with Sambar, Palya (Subji), Buttermilk", dinner: "Pulka with Brinjal Curry, Pudina Rice with Pulses Curry, White Rice with Sambar & Buttermilk" },
  { day: "Tuesday", breakfast: "Poori with Aloo Curry, Milk/Tea", lunch: "White Rice with Dhaal, Palya, Rasam & Buttermilk", dinner: "Pulka with Aloo Gobi Fry, Masala Rice with Pulses Curry, White Rice with Dhaal & Buttermilk" },
  { day: "Wednesday", breakfast: "Masala Semiya Bath, Milk/Tea", lunch: "White Rice with Sambar, Palya & Buttermilk", dinner: "Pulka with Egg Curry, Jeera Rice with Mixed Veg Curry, White Rice with Dhal & Buttermilk" },
  { day: "Thursday", breakfast: "Dosa with Chutney, Milk/Tea", lunch: "White Rice with Dhaal, Palya, Rasam & Buttermilk", dinner: "Pulka with Aloo Bhindi Fry, Tomato Rice with Rajma, Batani Curry, White Rice with Dhal & Buttermilk" },
  { day: "Friday", breakfast: "Upma with Chutney, Milk/Tea", lunch: "White Rice with Dhaal, Palya, Rasam & Buttermilk", dinner: "Pulka with Mushroom Curry, Lemon Rice with Pulses Curry, White Rice with Dhal & Buttermilk" },
  { day: "Saturday", breakfast: "Chapathi OR Aloo Paratha with Dahi, Milk/Tea", lunch: "White Rice with Aloo Soyabean Curry, Dhaal & Buttermilk", dinner: "Poori Or Chole Bhature + Curd Rice, White Rice with Dhal & Buttermilk" },
  { day: "Sunday", breakfast: "Lemon Poha, Milk/Tea", lunch: "White Rice+Chapathi with Chicken Curry and Paneer Green Peas Curry ", dinner: "Veg Biryani with Raita" },
];

const specialOccasions = [
  "Festivals & Special Occasions include traditional sweets like Gulab Jamun, Mysore Pak, Kheer, and Payasam.",
];

const FoodMenu = () => {
  return (
    <div className="food-menu-container">
      <h2 className="food-menu-title">🍽️ Crystal Rocks Suites & PG - Weekly Food Menu</h2>

      <p className="food-menu-description">
        Enjoy a delicious and nutritious meal every day at Crystal Rocks Suites & PG. 
        Our chefs prepare fresh, homely food with a variety of options to satisfy your taste buds. 
        From healthy breakfasts to fulfilling dinners, we ensure a balanced diet with the perfect mix of flavors. 
        Experience the perfect blend of taste, health, and tradition.
      </p>

      <div className="table-wrapper">
        <table className="food-menu-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                <td className="day-cell">{item.day}</td>
                <td>{item.breakfast}</td>
                <td>{item.lunch}</td>
                <td>{item.dinner}</td>
              </tr>
            ))}
            {/* Evening Tea Row (Merged across all columns) */}
            <tr className="evening-tea-row">
              <td colSpan="4" className="evening-tea">☕ Evening Tea is served every day.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Special Occasions Section */}
      <div className="special-occasions">
        <h3>🎉 Special Occasions & Festival Specials</h3>
        <ul>
          {specialOccasions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FoodMenu;