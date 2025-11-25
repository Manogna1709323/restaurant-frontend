import React, { useState } from "react";
import "./Menu.css";

function Menu() {

  // ACTIVE DROPDOWN (soups open by default)
  const [activeDropdown, setActiveDropdown] = useState("soups");

  // STATES FOR DROPDOWNS (unchanged logic)
  const [showVegSoups, setShowVegSoups] = useState(true);
  const [showNonVegSoups, setShowNonVegSoups] = useState(true);

  const [vegStarters, setVegStarters] = useState(false);
  const [nonVegStarters, setNonVegStarters] = useState(false);
  const [vegRegular, setVegRegular] = useState(false);
  const [vegTandoori, setVegTandoori] = useState(false);
  const [chickenStarters, setChickenStarters] = useState(false);
  const [fishStarters, setFishStarters] = useState(false);
  const [prawnsStarters, setPrawnsStarters] = useState(false);
  const [tandooriNonVeg, setTandooriNonVeg] = useState(false);

  const [vegMain, setVegMain] = useState(false);
  const [nonVegMain, setNonVegMain] = useState(false);
  const [vegNoodles, setVegNoodles] = useState(false);
  const [vegRoti, setVegRoti] = useState(false);
  const [vegCurry, setVegCurry] = useState(false);
  const [vegBiryani, setVegBiryani] = useState(false);
  const [vegFriedRice, setVegFriedRice] = useState(false);
  const [vegPulao, setVegPulao] = useState(false);

  const [nonVegNoodles, setNonVegNoodles] = useState(false);
  const [nonVegRoti, setNonVegRoti] = useState(false);
  const [nonVegCurry, setNonVegCurry] = useState(false);
  const [nonVegBiryani, setNonVegBiryani] = useState(false);
  const [nonVegFriedRice, setNonVegFriedRice] = useState(false);

  const [showVegChinese, setShowVegChinese] = useState(false);
  const [showNonVegChinese, setShowNonVegChinese] = useState(false);
  const [activeVegSub, setActiveVegSub] = useState("");
  const [activeNonVegSub, setActiveNonVegSub] = useState("");

  const [drinksSub, setDrinksSub] = useState(null);
  const [dessertsSub, setDessertsSub] = useState(null);

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
                { name: "Veg Dum Biryani", price: 180 },
                { name: "Paneer Biryani", price: 220 }
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
                { name: "Chicken Dum Biryani", price: 240 },
                { name: "Mutton Biryani", price: 300 }
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


      {/* ============================= SOUPS ============================= */}
      {activeDropdown === "soups" && (
        <div className="dropdown">
          <h3 className="category-title">Soups</h3>

          {menuData[0].subcategories.map((sub, index) => (
            <div className="dropdown-section" key={index}>
              <h4
                className="dropdown-title"
                onClick={() =>
                  sub.name.includes("Veg")
                    ? setShowVegSoups(!showVegSoups)
                    : setShowNonVegSoups(!showNonVegSoups)
                }
              >
                {sub.name.includes("Veg") ? "🟩 " : "🍗 "}
                {sub.name}{" "}
                {sub.name.includes("Veg")
                  ? showVegSoups ? "▾" : "▸"
                  : showNonVegSoups ? "▾" : "▸"}
              </h4>

              {(sub.name.includes("Veg") ? showVegSoups : showNonVegSoups) && (
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



      {/* ============================= STARTERS ============================= */}
      {activeDropdown === "starters" && (
        <div className="dropdown">
          <h3 className="category-title">Starters</h3>

          {menuData[1].subcategories.map((sub, idx) => (
            <div className="dropdown-section" key={idx}>
              <h4
                className="dropdown-title"
                onClick={() =>
                  sub.name.includes("Veg")
                    ? setVegStarters(!vegStarters)
                    : setNonVegStarters(!nonVegStarters)
                }
              >
                {sub.name.includes("Veg") ? "🟩 " : "🍗 "}
                {sub.name}{" "}
                {sub.name.includes("Veg")
                  ? vegStarters ? "▾" : "▸"
                  : nonVegStarters ? "▾" : "▸"}
              </h4>

              {(sub.name.includes("Veg") ? vegStarters : nonVegStarters) && (
                <div className="accordion-container">
                  {sub.subcategories.map((inner, i2) => (
                    <div key={i2}>
                      <h5
                        className="inner-title"
                        onClick={() => {
                          if (inner.name === "Regular") setVegRegular(!vegRegular);
                          if (inner.name === "Tandoori") setVegTandoori(!vegTandoori);
                          if (inner.name === "Chicken") setChickenStarters(!chickenStarters);
                          if (inner.name === "Fish") setFishStarters(!fishStarters);
                          if (inner.name === "Prawns") setPrawnsStarters(!prawnsStarters);
                          if (inner.name === "Tandoori" && !sub.name.includes("Veg"))
                            setTandooriNonVeg(!tandooriNonVeg);
                        }}
                      >
                        {inner.name}{" "}
                        {(() => {
                          switch (inner.name) {
                            case "Regular": return vegRegular ? "▾" : "▸";
                            case "Tandoori": return sub.name.includes("Veg")
                              ? vegTandoori ? "▾" : "▸"
                              : tandooriNonVeg ? "▾" : "▸";
                            case "Chicken": return chickenStarters ? "▾" : "▸";
                            case "Fish": return fishStarters ? "▾" : "▸";
                            case "Prawns": return prawnsStarters ? "▾" : "▸";
                            default: return "▸";
                          }
                        })()}
                      </h5>

                      {/* SHOW ITEMS BASED ON STATE */}
                      {((inner.name === "Regular" && vegRegular) ||
                        (inner.name === "Tandoori" && sub.name.includes("Veg") && vegTandoori) ||
                        (inner.name === "Tandoori" && !sub.name.includes("Veg") && tandooriNonVeg) ||
                        (inner.name === "Chicken" && chickenStarters) ||
                        (inner.name === "Fish" && fishStarters) ||
                        (inner.name === "Prawns" && prawnsStarters)) && (
                        <div className="inner-content open">
                          <ul className="price-list">
                            {inner.items.map((item, i3) => (
                              <li key={i3}>
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
          ))}
        </div>
      )}
      {/* ============================= MAIN COURSE ============================= */}
      {activeDropdown === "maincourse" && (
        <div className="dropdown">
          <h3 className="category-title">Main Course</h3>

          {menuData[2].subcategories.map((sub, idx) => (
            <div className="dropdown-section" key={idx}>
              <h4
                className="dropdown-title"
                onClick={() =>
                  sub.name.includes("Veg")
                    ? setVegMain(!vegMain)
                    : setNonVegMain(!nonVegMain)
                }
              >
                {sub.name.includes("Veg") ? "🟩 " : "🍗 "}
                {sub.name}{" "}
                {sub.name.includes("Veg")
                  ? vegMain ? "▾" : "▸"
                  : nonVegMain ? "▾" : "▸"}
              </h4>

              {(sub.name.includes("Veg") ? vegMain : nonVegMain) && (
                <div className="accordion-container">
                  {sub.subcategories.map((inner, i2) => (
                    <div key={i2}>
                      <h5
                        className="inner-title"
                        onClick={() => {
                          if (inner.name === "Noodles")
                            sub.name.includes("Veg")
                              ? setVegNoodles(!vegNoodles)
                              : setNonVegNoodles(!nonVegNoodles);

                          if (inner.name === "Roti")
                            sub.name.includes("Veg")
                              ? setVegRoti(!vegRoti)
                              : setNonVegRoti(!nonVegRoti);

                          if (inner.name === "Curry")
                            sub.name.includes("Veg")
                              ? setVegCurry(!vegCurry)
                              : setNonVegCurry(!nonVegCurry);

                          if (inner.name === "Biryani")
                            sub.name.includes("Veg")
                              ? setVegBiryani(!vegBiryani)
                              : setNonVegBiryani(!nonVegBiryani);

                          if (inner.name === "Fried Rice")
                            sub.name.includes("Veg")
                              ? setVegFriedRice(!vegFriedRice)
                              : setNonVegFriedRice(!nonVegFriedRice);

                          if (inner.name === "Pulao")
                            setVegPulao(!vegPulao);
                        }}
                      >
                        {inner.name}{" "}
                        {(() => {
                          switch (inner.name) {
                            case "Noodles":
                              return sub.name.includes("Veg")
                                ? vegNoodles ? "▾" : "▸"
                                : nonVegNoodles ? "▾" : "▸";
                            case "Roti":
                              return sub.name.includes("Veg")
                                ? vegRoti ? "▾" : "▸"
                                : nonVegRoti ? "▾" : "▸";
                            case "Curry":
                              return sub.name.includes("Veg")
                                ? vegCurry ? "▾" : "▸"
                                : nonVegCurry ? "▾" : "▸";
                            case "Biryani":
                              return sub.name.includes("Veg")
                                ? vegBiryani ? "▾" : "▸"
                                : nonVegBiryani ? "▾" : "▸";
                            case "Fried Rice":
                              return sub.name.includes("Veg")
                                ? vegFriedRice ? "▾" : "▸"
                                : nonVegFriedRice ? "▾" : "▸";
                            case "Pulao":
                              return vegPulao ? "▾" : "▸";
                            default:
                              return "▸";
                          }
                        })()}
                      </h5>

                      {/* Show items */}
                      {((inner.name === "Noodles" &&
                        (sub.name.includes("Veg") ? vegNoodles : nonVegNoodles)) ||
                        (inner.name === "Roti" &&
                          (sub.name.includes("Veg") ? vegRoti : nonVegRoti)) ||
                        (inner.name === "Curry" &&
                          (sub.name.includes("Veg") ? vegCurry : nonVegCurry)) ||
                        (inner.name === "Biryani" &&
                          (sub.name.includes("Veg") ? vegBiryani : nonVegBiryani)) ||
                        (inner.name === "Fried Rice" &&
                          (sub.name.includes("Veg")
                            ? vegFriedRice
                            : nonVegFriedRice)) ||
                        (inner.name === "Pulao" && vegPulao)) && (
                        <div className="inner-content open">
                          <ul className="price-list">
                            {inner.items.map((item, i3) => (
                              <li key={i3}>
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
          ))}
        </div>
      )}





      {/* ============================= CHINESE ============================= */}
      {activeDropdown === "chinese" && (
        <div className="dropdown">
          <h3 className="category-title">Chinese Dishes</h3>

          {menuData[3].subcategories.map((sub, idx) => (
            <div className="dropdown-section" key={idx}>
              <h4
                className="dropdown-title"
                onClick={() =>
                  sub.name.includes("Veg")
                    ? setShowVegChinese(!showVegChinese)
                    : setShowNonVegChinese(!showNonVegChinese)
                }
              >
                {sub.name.includes("Veg") ? "🟩 " : "🍗 "}
                {sub.name}{" "}
                {sub.name.includes("Veg")
                  ? showVegChinese ? "▾" : "▸"
                  : showNonVegChinese ? "▾" : "▸"}
              </h4>

              {(sub.name.includes("Veg") ? showVegChinese : showNonVegChinese) && (
                <div className="accordion-container">
                  {sub.subcategories.map((inner, i2) => (
                    <div key={i2}>
                      <h5
                        className="inner-title"
                        onClick={() => {
                          if (sub.name.includes("Veg")) {
                            setActiveVegSub(
                              activeVegSub === inner.name.toLowerCase() ? "" : inner.name.toLowerCase()
                            );
                          } else {
                            setActiveNonVegSub(
                              activeNonVegSub === inner.name.toLowerCase()
                                ? ""
                                : inner.name.toLowerCase()
                            );
                          }
                        }}
                      >
                        {inner.name}{" "}
                        {sub.name.includes("Veg")
                          ? activeVegSub === inner.name.toLowerCase() ? "▾" : "▸"
                          : activeNonVegSub === inner.name.toLowerCase() ? "▾" : "▸"}
                      </h5>

                      {/* ITEMS */}
                      {(sub.name.includes("Veg")
                        ? activeVegSub === inner.name.toLowerCase()
                        : activeNonVegSub === inner.name.toLowerCase()) && (
                        <div className="inner-content open">
                          <ul className="price-list">
                            {inner.items.map((item, i3) => (
                              <li key={i3}>
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
          ))}
        </div>
      )}
            {/* ============================= MAIN COURSE ============================= */}
      {activeDropdown === "maincourse" && (
        <div className="dropdown">
          <h3 className="category-title">Main Course</h3>

          {menuData[2].subcategories.map((sub, idx) => (
            <div className="dropdown-section" key={idx}>
              <h4
                className="dropdown-title"
                onClick={() =>
                  sub.name.includes("Veg")
                    ? setVegMain(!vegMain)
                    : setNonVegMain(!nonVegMain)
                }
              >
                {sub.name.includes("Veg") ? "🟩 " : "🍗 "}
                {sub.name}{" "}
                {sub.name.includes("Veg")
                  ? vegMain ? "▾" : "▸"
                  : nonVegMain ? "▾" : "▸"}
              </h4>

              {(sub.name.includes("Veg") ? vegMain : nonVegMain) && (
                <div className="accordion-container">
                  {sub.subcategories.map((inner, i2) => (
                    <div key={i2}>
                      <h5
                        className="inner-title"
                        onClick={() => {
                          if (inner.name === "Noodles")
                            sub.name.includes("Veg")
                              ? setVegNoodles(!vegNoodles)
                              : setNonVegNoodles(!nonVegNoodles);

                          if (inner.name === "Roti")
                            sub.name.includes("Veg")
                              ? setVegRoti(!vegRoti)
                              : setNonVegRoti(!nonVegRoti);

                          if (inner.name === "Curry")
                            sub.name.includes("Veg")
                              ? setVegCurry(!vegCurry)
                              : setNonVegCurry(!nonVegCurry);

                          if (inner.name === "Biryani")
                            sub.name.includes("Veg")
                              ? setVegBiryani(!vegBiryani)
                              : setNonVegBiryani(!nonVegBiryani);

                          if (inner.name === "Fried Rice")
                            sub.name.includes("Veg")
                              ? setVegFriedRice(!vegFriedRice)
                              : setNonVegFriedRice(!nonVegFriedRice);

                          if (inner.name === "Pulao")
                            setVegPulao(!vegPulao);
                        }}
                      >
                        {inner.name}{" "}
                        {(() => {
                          switch (inner.name) {
                            case "Noodles":
                              return sub.name.includes("Veg")
                                ? vegNoodles ? "▾" : "▸"
                                : nonVegNoodles ? "▾" : "▸";
                            case "Roti":
                              return sub.name.includes("Veg")
                                ? vegRoti ? "▾" : "▸"
                                : nonVegRoti ? "▾" : "▸";
                            case "Curry":
                              return sub.name.includes("Veg")
                                ? vegCurry ? "▾" : "▸"
                                : nonVegCurry ? "▾" : "▸";
                            case "Biryani":
                              return sub.name.includes("Veg")
                                ? vegBiryani ? "▾" : "▸"
                                : nonVegBiryani ? "▾" : "▸";
                            case "Fried Rice":
                              return sub.name.includes("Veg")
                                ? vegFriedRice ? "▾" : "▸"
                                : nonVegFriedRice ? "▾" : "▸";
                            case "Pulao":
                              return vegPulao ? "▾" : "▸";
                            default:
                              return "▸";
                          }
                        })()}
                      </h5>

                      {/* Show items */}
                      {((inner.name === "Noodles" &&
                        (sub.name.includes("Veg") ? vegNoodles : nonVegNoodles)) ||
                        (inner.name === "Roti" &&
                          (sub.name.includes("Veg") ? vegRoti : nonVegRoti)) ||
                        (inner.name === "Curry" &&
                          (sub.name.includes("Veg") ? vegCurry : nonVegCurry)) ||
                        (inner.name === "Biryani" &&
                          (sub.name.includes("Veg") ? vegBiryani : nonVegBiryani)) ||
                        (inner.name === "Fried Rice" &&
                          (sub.name.includes("Veg")
                            ? vegFriedRice
                            : nonVegFriedRice)) ||
                        (inner.name === "Pulao" && vegPulao)) && (
                        <div className="inner-content open">
                          <ul className="price-list">
                            {inner.items.map((item, i3) => (
                              <li key={i3}>
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
          ))}
        </div>
      )}





      {/* ============================= CHINESE ============================= */}
      {activeDropdown === "chinese" && (
        <div className="dropdown">
          <h3 className="category-title">Chinese Dishes</h3>

          {menuData[3].subcategories.map((sub, idx) => (
            <div className="dropdown-section" key={idx}>
              <h4
                className="dropdown-title"
                onClick={() =>
                  sub.name.includes("Veg")
                    ? setShowVegChinese(!showVegChinese)
                    : setShowNonVegChinese(!showNonVegChinese)
                }
              >
                {sub.name.includes("Veg") ? "🟩 " : "🍗 "}
                {sub.name}{" "}
                {sub.name.includes("Veg")
                  ? showVegChinese ? "▾" : "▸"
                  : showNonVegChinese ? "▾" : "▸"}
              </h4>

              {(sub.name.includes("Veg") ? showVegChinese : showNonVegChinese) && (
                <div className="accordion-container">
                  {sub.subcategories.map((inner, i2) => (
                    <div key={i2}>
                      <h5
                        className="inner-title"
                        onClick={() => {
                          if (sub.name.includes("Veg")) {
                            setActiveVegSub(
                              activeVegSub === inner.name.toLowerCase() ? "" : inner.name.toLowerCase()
                            );
                          } else {
                            setActiveNonVegSub(
                              activeNonVegSub === inner.name.toLowerCase()
                                ? ""
                                : inner.name.toLowerCase()
                            );
                          }
                        }}
                      >
                        {inner.name}{" "}
                        {sub.name.includes("Veg")
                          ? activeVegSub === inner.name.toLowerCase() ? "▾" : "▸"
                          : activeNonVegSub === inner.name.toLowerCase() ? "▾" : "▸"}
                      </h5>

                      {/* ITEMS */}
                      {(sub.name.includes("Veg")
                        ? activeVegSub === inner.name.toLowerCase()
                        : activeNonVegSub === inner.name.toLowerCase()) && (
                        <div className="inner-content open">
                          <ul className="price-list">
                            {inner.items.map((item, i3) => (
                              <li key={i3}>
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
          ))}
        </div>
      )}
      {/* ============================= DRINKS ============================= */}
      {activeDropdown === "drinks" && (
        <div className="dropdown">
          <h3 className="category-title">Drinks</h3>

          {menuData[4].subcategories.map((sub, idx) => (
            <div className="dropdown-section" key={idx}>
              <h4
                className="dropdown-title"
                onClick={() => setDrinksSub(drinksSub === sub.name ? null : sub.name)}
              >
                {sub.name} {drinksSub === sub.name ? "▾" : "▸"}
              </h4>

              {drinksSub === sub.name && (
                <ul className="price-list">
                  {sub.items.map((item, i2) => (
                    <li key={i2}>
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">₹{item.price}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}




      {/* ============================= DESSERTS ============================= */}
      {activeDropdown === "desserts" && (
        <div className="dropdown">
          <h3 className="category-title">Desserts</h3>

          {menuData[5].subcategories.map((sub, idx) => (
            <div className="dropdown-section" key={idx}>
              <h4
                className="dropdown-title"
                onClick={() =>
                  setDessertsSub(dessertsSub === sub.name ? null : sub.name)
                }
              >
                {sub.name} {dessertsSub === sub.name ? "▾" : "▸"}
              </h4>

              {dessertsSub === sub.name && (
                <ul className="price-list">
                  {sub.items.map((item, i2) => (
                    <li key={i2}>
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">₹{item.price}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

    </div>  {/* END OF PAGE WRAPPER */}
  );
}

export default Menu;
