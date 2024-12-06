import { useState } from "react";
import "./menuStyle.css";
import dashboardIcon from "../../assets/Vector.png";
import profileManagmentIcon from "../../assets/li_users.png";
import uploadReportsIcon from "../../assets/Upload-File--Streamline-Core.png";
import generateLettersIcon from "../../assets/Text-Square--Streamline-Core.png";
import reportsIcon from "../../assets/Wave-Signal-Square--Streamline-Core.png";
import settingsIcon from "../../assets/li_settings.png";
import LogoutIcon from "../../assets/Logout 2.png";

// Item component: Represents a single menu item
function Item(props) {
  const { icon, name, isSelected, onClick, color } = props; // Destructuring props passed to the component

  return (
    <div
      className={`item ${isSelected ? "selectedItem" : ""} ${
        color ? "formatColor" : ""
      }`} // Applying conditional classes for styling based on the item state
      onClick={onClick} // Invokes the onClick function when the item is clicked
    >
      <img style={{ width: 12.54, height: 12.54 }} src={icon} alt={name} />{" "}
      {/* Icon for the menu item */}
      <p>{name}</p> {/* Name/Label of the menu item */}
    </div>
  );
}

// List of menu items (static data)
let itemList = [
  { id: 1, icon: dashboardIcon, name: "Dashboard" },
  { id: 2, icon: profileManagmentIcon, name: "Profile Management" },
  { id: 3, icon: uploadReportsIcon, name: "Upload Reports" },
  { id: 4, icon: generateLettersIcon, name: "Generate Letters" },
  { id: 5, icon: reportsIcon, name: "Report and Analytics" },
];

// Menu component: Main menu container
export default function Menu() {
  const [selectedItemId, setSelectedItemId] = useState(1); // State to track the selected menu item (default is the first item)

  return (
    <div className="menu">
      {" "}
      {/* Main container for the menu */}
      <h2>LetterCraft</h2> {/* Title of the menu */}
      <div className="items">
        {" "}
        {/* Container for the main menu items */}
        {itemList.map((item) => (
          <Item
            key={item.id} // Unique key for React rendering
            icon={item.icon} // Icon for the menu item
            name={item.name} // Name/Label for the menu item
            isSelected={selectedItemId === item.id} // Check if this item is currently selected
            onClick={() => setSelectedItemId(item.id)} // Update the selected menu item ID when clicked
          />
        ))}
      </div>
      <div className="horizontalLine"></div>{" "}
      {/* Horizontal line to separate sections */}
      <div className="settings-icon">
        {" "}
        {/* Container for the Settings item */}
        <Item
          key={itemList.length + 1} // Unique key for the Settings item
          icon={settingsIcon} // Icon for Settings
          name={"Settings"} // Name for Settings
          isSelected={selectedItemId === itemList.length + 1} // Check if the Settings item is selected
          onClick={() => setSelectedItemId(itemList.length + 1)} // Update the selected item ID to Settings when clicked
        />
      </div>
      <div className="Logout">
        {" "}
        {/* Container for the Logout item */}
        <Item
          key={itemList.length + 2} // Unique key for the Logout item
          icon={LogoutIcon} // Icon for Logout
          name={"Logout"} // Name for Logout
          isSelected={selectedItemId === itemList.length + 2} // Check if the Logout item is selected
          onClick={() => setSelectedItemId(itemList.length + 2)} // Update the selected item ID to Logout when clicked
          color={"red"} // Custom styling for the Logout item (e.g., red color)
        />
      </div>
    </div>
  );
}
