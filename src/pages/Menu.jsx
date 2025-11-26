  import React, { useState } from "react";
import "./Menu.css";

function Menu() {
  const [activeDropdown, setActiveDropdown] = useState("soups");

  const [soupsType, setSoupsType] = useState("veg"); 
  const [soupsSub, setSoupsSub] = useState(null);


  const [startersType, setStartersType] = useState("veg");
  const [vegType, setVegType] = useState(null);
  const [nonVegType, setNonVegType] = useState(null);

  const [mainType, setMainType] = useState("veg"); // veg / nonveg
const [mainSub, setMainSub] = useState(null);   // only one open at a time

  const [chineseType, setChineseType] = useState("veg"); // veg / nonveg
const [chineseSub, setChineseSub] = useState(null);   // single open accordion


  const [drinksActive, setDrinksActive] = useState(null);     // one open at a time
const [dessertsActive, setDessertsActive] = useState(null); // one open at a time

    // =====================================================================
    // ⭐ SINGLE JSON FILE (NESTED STRUCTURE) — ENTIRE MENU DATA
    // =====================================================================

    const menuData = [
      {
        category: "Soups",
        subcategories: [
          {
            name: "Veg Soups",
            items: [
              { name: "Veg Hot & Sour Soup", price: 120 },
              { name: "Veg Manchow Soup", price: 130 }
            ]
          },
          {
            name: "Non-Veg Soups",
            items: [
              { name: "Chicken Hot & Sour Soup", price: 150 },
              { name: "Chicken Manchow Soup", price: 160 }
            ]
          }
        ]
      },

      {
        category: "Starters",
        subcategories: [
          {
            name: "Veg Starters",
            subcategories: [
              {
                name: "Regular",
                items: [
                  { name: "Veg Spring Rolls", price: 140 },
                  { name: "Paneer Chilli Dry", price: 180 }
                ]
              },
              {
                name: "Tandoori",
                items: [
                  { name: "Paneer Tikka", price: 220 },
                  { name: "Tandoori Mushroom", price: 210 }
                ]
              }
            ]
          },

          {
            name: "Non-Veg Starters",
            subcategories: [
              {
                name: "Chicken",
                items: [
                  { name: "Chicken 65", price: 200 },
                  { name: "Chicken Lollipop", price: 230 }
                ]
              },
              {
                name: "Fish",
                items: [
                  { name: "Fish Fry", price: 260 },
                  { name: "Fish Fingers", price: 250 }
                ]
              },
              {
                name: "Prawns",
                items: [
                  { name: "Prawns Pepper Fry", price: 280 },
                  { name: "Prawns Chilli", price: 290 }
                ]
              },
              {
                name: "Tandoori",
                items: [
                  { name: "Tandoori Chicken (Half)", price: 300 },
                  { name: "Chicken Tikka", price: 260 }
                ]
              }
            ]
          }
        ]
      },

      {
        category: "Main Course",
        subcategories: [
          {
            name: "Veg Main Course",
            subcategories: [
              {
                name: "Noodles",
                items: [
                  { name: "Veg Hakka Noodles", price: 150 },
                  { name: "Schezwan Veg Noodles", price: 160 }
                ]
              },
              {
                name: "Roti",
                items: [
                  { name: "Tandoori Roti", price: 20 },
                  { name: "Butter Naan", price: 40 }
                ]
              },
              {
                name: "Curry",
                items: [
                  { name: "Paneer Butter Masala", price: 200 },
                  { name: "Veg Korma", price: 180 }
                ]
              },
              {
  name: "Biryani",
  items: [
    {
      name: "Veg Dum Biryani",
      packs: [
        { name: "Single Pack", price: 180 },
        { name: "Full Pack", price: 300 },
        { name: "Family Pack", price: 450 }
      ]
    },
    {
      name: "Paneer Biryani",
      packs: [
        { name: "Single Pack", price: 220 },
        { name: "Full Pack", price: 360 },
        { name: "Family Pack", price: 520 }
      ]
    }
  ]
},
              {
                name: "Fried Rice",
                items: [
                  { name: "Veg Fried Rice", price: 150 },
                  { name: "Schezwan Veg Rice", price: 160 }
                ]
              },
              {
                name: "Pulao",
                items: [
                  { name: "Veg Pulao", price: 160 },
                  { name: "Jeera Rice", price: 130 }
                ]
              }
            ]
          },

          {
            name: "Non-Veg Main Course",
            subcategories: [
              {
                name: "Noodles",
                items: [
                  { name: "Chicken Noodles", price: 170 },
                  { name: "Schezwan Chicken Noodles", price: 180 }
                ]
              },
              {
                name: "Roti",
                items: [
                  { name: "Butter Naan", price: 40 },
                  { name: "Garlic Naan", price: 50 }
                ]
              },
              {
                name: "Curry",
                items: [
                  { name: "Butter Chicken", price: 260 },
                  { name: "Chicken Curry", price: 240 }
                ]
              },
             {
  name: "Biryani",
  items: [
    {
      name: "Chicken Dum Biryani",
      packs: [
        { name: "Single Pack", price: 240 },
        { name: "Full Pack", price: 380 },
        { name: "Family Pack", price: 550 }
      ]
    },
    {
      name: "Mutton Biryani",
      packs: [
        { name: "Single Pack", price: 300 },
        { name: "Full Pack", price: 480 },
        { name: "Family Pack", price: 680 }
      ]
    }
  ]
},

              {
                name: "Fried Rice",
                items: [
                  { name: "Chicken Fried Rice", price: 170 },
                  { name: "Egg Fried Rice", price: 150 }
                ]
              }
            ]
          }
        ]
      },

      {
        category: "Chinese",
        subcategories: [
          {
            name: "Veg Chinese",
            subcategories: [
              {
                name: "Noodles",
                items: [
                  { name: "Veg Hakka Noodles", price: 150 },
                  { name: "Chilli Garlic Noodles", price: 160 }
                ]
              },
              {
                name: "Fried Rice",
                items: [
                  { name: "Veg Fried Rice", price: 150 },
                  { name: "Schezwan Veg Rice", price: 160 }
                ]
              },
              {
                name: "Starters",
                items: [
                  { name: "Gobi Manchurian", price: 140 },
                  { name: "Paneer Chilli", price: 180 }
                ]
              }
            ]
          },

          {
            name: "Non-Veg Chinese",
            subcategories: [
              {
                name: "Noodles",
                items: [
                  { name: "Chicken Noodles", price: 170 },
                  { name: "Schezwan Chicken Noodles", price: 180 }
                ]
              },
              {
                name: "Fried Rice",
                items: [
                  { name: "Chicken Fried Rice", price: 170 },
                  { name: "Egg Fried Rice", price: 150 }
                ]
              },
              {
                name: "Starters",
                items: [
                  { name: "Chicken Manchurian", price: 190 },
                  { name: "Prawns Manchurian", price: 240 }
                ]
              }
            ]
          }
        ]
      },

      {
        category: "Drinks",
        subcategories: [
          {
            name: "Mocktails",
            items: [
              { name: "Virgin Mojito", price: 130 },
              { name: "Blue Lagoon", price: 150 }
            ]
          },
          {
            name: "Smoothies",
            items: [
              { name: "Mango Smoothie", price: 160 },
              { name: "Strawberry Smoothie", price: 170 }
            ]
          },
          {
            name: "Milkshakes",
            items: [
              { name: "Chocolate Shake", price: 140 },
              { name: "Vanilla Shake", price: 130 },
              { name: "Oreo Shake", price: 160 }
            ]
          }
        ]
      },

      {
        category: "Desserts",
        subcategories: [
          {
            name: "Puddings",
            items: [
              { name: "Rice Kheer", price: 120 },
              { name: "Phirni", price: 130 },
              { name: "Bread Pudding", price: 140 }
            ]
          },
          {
            name: "Fried Sweets",
            items: [
              { name: "Gulab Jamun", price: 80 },
              { name: "Jalebi", price: 90 },
              { name: "Malpua", price: 110 }
            ]
          },
          {
            name: "Ice Creams",
            items: [
              { name: "Vanilla Ice Cream", price: 60 },
              { name: "Butterscotch Ice Cream", price: 70 },
              { name: "Kulfi", price: 90 }
            ]
          }
        ]
      }
    ];
          return (
      <div className="menu-page">

        {/* TOP BUTTONS */}
        <div className="menu-buttons">
          <button className="menu-btn" onClick={() => setActiveDropdown("soups")}>Soups</button>
          <button className="menu-btn" onClick={() => setActiveDropdown("starters")}>Starters</button>
          <button className="menu-btn" onClick={() => setActiveDropdown("maincourse")}>Main Course</button>
          <button className="menu-btn" onClick={() => setActiveDropdown("chinese")}>Chinese</button>
          <button className="menu-btn" onClick={() => setActiveDropdown("drinks")}>Drinks</button>
          <button className="menu-btn" onClick={() => setActiveDropdown("desserts")}>Desserts</button>
        </div>


{/*-------Soups---------*/}
 {activeDropdown === "soups" && (
  <div className="dropdown">
    <h3 className="category-title">Soups</h3>

    <div className="flex gap-4 mb-6">
      <button
        className={`tab-btn ${soupsType === "veg" ? "active-tab" : ""}`}
        onClick={() => {
          setSoupsType("veg");
          setSoupsSub(null);
        }}
      >
        🟩 Veg
      </button>

      <button
        className={`tab-btn ${soupsType === "nonveg" ? "active-tab" : ""}`}
        onClick={() => {
          setSoupsType("nonveg");
          setSoupsSub(null);
        }}
      >
        🍗 Non-Veg
      </button>
    </div>

    {menuData[0].subcategories
      .filter(sub =>
        soupsType === "veg"
          ? sub.name.startsWith("Veg")
          : sub.name.startsWith("Non")
      )
      .map((sub) => (
        <div key={sub.name}>
          <h4
            className="inner-title arrow-title"
            onClick={() =>
              setSoupsSub(soupsSub === sub.name ? null : sub.name)
            }
          >
            {sub.name}
            <span className={`arrow ${soupsSub === sub.name ? "rotate" : ""}`}>
              ▾
            </span>
          </h4>

          {soupsSub === sub.name && (
            <ul className="price-list">
              {sub.items.map((item, i) => (
                <li key={i}>
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
  </div>
)}

    {/* ============================= STARTERS ============================= */}
  {activeDropdown === "starters" && (
    <div className="dropdown">

      <h3 className="category-title">Starters</h3>

      {/* HORIZONTAL VEG / NON-VEG */}
      <div className="flex gap-4 mb-6">
        <button
          className={`tab-btn ${startersType === "veg" ? "active-tab" : ""}`}
          onClick={() => {
            setStartersType("veg");
            setVegType(null);
          }}
        >
          🟩 Veg
        </button>

        <button
          className={`tab-btn ${startersType === "nonveg" ? "active-tab" : ""}`}
          onClick={() => {
            setStartersType("nonveg");
            setNonVegType(null);
          }}
        >
          🍗 Non-Veg
        </button>
      </div>

      {/* ================= VEG SECTION ================= */}
      {startersType === "veg" && (
        <div className="dropdown-section fade-in">

          {/* REGULAR */}
          <h4
            className="inner-title arrow-title"
            onClick={() => setVegType(vegType === "regular" ? null : "regular")}
          >
            Regular
            <span className={`arrow ${vegType === "regular" ? "rotate" : ""}`}>▾</span>
          </h4>

          <div className={`animated-box ${vegType === "regular" ? "open" : ""}`}>
            <ul className="price-list">
              {menuData[1].subcategories[0].subcategories
                .find(i => i.name === "Regular")
                .items.map((item, i) => (
                  <li key={i}>
                    <span>{item.name}</span>
                    <span>₹{item.price}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* TANDOORI */}
          <h4
            className="inner-title arrow-title mt-4"
            onClick={() => setVegType(vegType === "tandoori" ? null : "tandoori")}
          >
            Tandoori
            <span className={`arrow ${vegType === "tandoori" ? "rotate" : ""}`}>▾</span>
          </h4>

          <div className={`animated-box ${vegType === "tandoori" ? "open" : ""}`}>
            <ul className="price-list">
              {menuData[1].subcategories[0].subcategories
                .find(i => i.name === "Tandoori")
                .items.map((item, i) => (
                  <li key={i}>
                    <span>{item.name}</span>
                    <span>₹{item.price}</span>
                  </li>
                ))}
            </ul>
          </div>

        </div>
      )}

      {/* ================= NON-VEG SECTION ================= */}
      {startersType === "nonveg" && (
        <div className="dropdown-section fade-in">

          {["Chicken", "Fish", "Prawns"].map((type) => (
            <div key={type}>
              <h4
                className="inner-title arrow-title"
                onClick={() =>
                  setNonVegType(nonVegType === type.toLowerCase() ? null : type.toLowerCase())
                }
              >
                {type}
                <span className={`arrow ${nonVegType === type.toLowerCase() ? "rotate" : ""}`}>▾</span>
              </h4>

              <div className={`animated-box ${nonVegType === type.toLowerCase() ? "open" : ""}`}>
                <ul className="price-list">
                  {menuData[1].subcategories[1].subcategories
                    .find(i => i.name === type)
                    .items.map((item, i) => (
                      <li key={i}>
                        <span>{item.name}</span>
                        <span>₹{item.price}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  )}
{/* ----- main course------*/}

       {activeDropdown === "maincourse" && (
  <div className="dropdown">
    <h3 className="category-title">Main Course</h3>

    {/* VEG / NON-VEG TABS */}
    <div className="flex gap-4 mb-6">
      <button
        className={`tab-btn ${mainType === "veg" ? "active-tab" : ""}`}
        onClick={() => {
          setMainType("veg");
          setMainSub(null);
        }}
      >
        🟩 Veg
      </button>

      <button
        className={`tab-btn ${mainType === "nonveg" ? "active-tab" : ""}`}
        onClick={() => {
          setMainType("nonveg");
          setMainSub(null);
        }}
      >
        🍗 Non-Veg
      </button>
    </div>

    {menuData[2].subcategories
      .filter(sub =>
        mainType === "veg"
          ? sub.name.startsWith("Veg")
          : sub.name.startsWith("Non")
      )
      .map(sub => (
        <div key={sub.name}>
          {sub.subcategories.map(inner => (
            <div key={inner.name}>
              <h4
                className="inner-title arrow-title"
                onClick={() =>
                  setMainSub(mainSub === inner.name ? null : inner.name)
                }
              >
                {inner.name}
                <span
                  className={`arrow ${
                    mainSub === inner.name ? "rotate" : ""
                  }`}
                >
                  ▾
                </span>
              </h4>

              {mainSub === inner.name && (
  <div className="inner-content open">

    {/* ✅ SPECIAL MULTI-DISH PACK LOGIC FOR BIRYANI */}
    {inner.name === "Biryani" ? (
      <div className="biryani-group">
        {inner.items.map((dish, i) => (
          <div key={i} className="biryani-dish-block">
            <h5 className="biryani-dish-title">{dish.name}</h5>
            <ul className="price-list">
              {dish.packs.map((pack, j) => (
                <li key={j}>
                  <span className="item-name">{pack.name}</span>
                  <span className="item-price">₹{pack.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ) : (

      /* ✅ NORMAL LOGIC FOR ALL OTHER MAIN COURSE ITEMS */
      <ul className="price-list">
        {inner.items.map((item, i) => (
          <li key={i}>
            <span className="item-name">{item.name}</span>
            <span className="item-price">₹{item.price}</span>
          </li>
        ))}
      </ul>

    )}
  </div>
)}



            </div>
          ))}
        </div>
      ))}
  </div>
)}


        {/* ============================= CHINESE ============================= */}
        {activeDropdown === "chinese" && (
  <div className="dropdown">
    <h3 className="category-title">Chinese Dishes</h3>

    {/* VEG / NON-VEG TABS */}
    <div className="flex gap-4 mb-6">
      <button
        className={`tab-btn ${chineseType === "veg" ? "active-tab" : ""}`}
        onClick={() => {
          setChineseType("veg");
          setChineseSub(null);
        }}
      >
        🟩 Veg
      </button>

      <button
        className={`tab-btn ${chineseType === "nonveg" ? "active-tab" : ""}`}
        onClick={() => {
          setChineseType("nonveg");
          setChineseSub(null);
        }}
      >
        🍗 Non-Veg
      </button>
    </div>

    {menuData[3].subcategories
      .filter(sub =>
        chineseType === "veg"
          ? sub.name.startsWith("Veg")
          : sub.name.startsWith("Non")
      )
      .map(sub => (
        <div key={sub.name}>
          {sub.subcategories.map(inner => (
            <div key={inner.name}>
              <h4
                className="inner-title arrow-title"
                onClick={() =>
                  setChineseSub(
                    chineseSub === inner.name ? null : inner.name
                  )
                }
              >
                {inner.name}
                <span
                  className={`arrow ${
                    chineseSub === inner.name ? "rotate" : ""
                  }`}
                >
                  ▾
                </span>
              </h4>

              {chineseSub === inner.name && (
                <div className="inner-content open">
                  <ul className="price-list">
                    {inner.items.map((item, i) => (
                      <li key={i}>
                        <span className="item-name">{item.name}</span>
                        <span className="item-price">₹{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
  </div>
)}

        {/* ============================= DRINKS ============================= */}
        {activeDropdown === "drinks" && (
  <div className="dropdown">
    <h3 className="category-title">Drinks</h3>

    {menuData[4].subcategories.map((sub) => (
      <div key={sub.name}>
        <h4
          className="inner-title arrow-title"
          onClick={() =>
            setDrinksActive(drinksActive === sub.name ? null : sub.name)
          }
        >
          {sub.name}
          <span
            className={`arrow ${drinksActive === sub.name ? "rotate" : ""}`}
          >
            ▾
          </span>
        </h4>

        {drinksActive === sub.name && (
          <div className="inner-content open">
            <ul className="price-list">
              {sub.items.map((item, i) => (
                <li key={i}>
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">₹{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
)}



        {/* ============================= DESSERTS ============================= */}
        {activeDropdown === "desserts" && (
  <div className="dropdown">
    <h3 className="category-title">Desserts</h3>

    {menuData[5].subcategories.map((sub) => (
      <div key={sub.name}>
        <h4
          className="inner-title arrow-title"
          onClick={() =>
            setDessertsActive(
              dessertsActive === sub.name ? null : sub.name
            )
          }
        >
          {sub.name}
          <span
            className={`arrow ${
              dessertsActive === sub.name ? "rotate" : ""
            }`}
          >
            ▾
          </span>
        </h4>

        {dessertsActive === sub.name && (
          <div className="inner-content open">
            <ul className="price-list">
              {sub.items.map((item, i) => (
                <li key={i}>
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">₹{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
)}

      </div>  
    );
  }

  export default Menu;
