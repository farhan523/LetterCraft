import "./navbar.css";
import dashboardIcon from "../../assets/Vector.png";
import notificationIcon from "../../assets/li_bell.png";
import profilePic from "../../assets/Ellipse 3493.png";

// Path Component: Displays the navigation path (breadcrumb) in the navbar
function Path(props) {
  const { icon, basePath, currentRoute } = props; // Destructuring props for the component

  return (
    <div className="path">
      {" "}
      {/* Container for the breadcrumb path */}
      <img src={icon} style={{ width: 14, height: 14 }}></img>{" "}
      {/* Icon for the base path */}
      {basePath} / <div className="currentRoute">{currentRoute}</div>{" "}
      {/* Base path and the current route */}
    </div>
  );
}

// Profile Component: Displays the user's profile with an image and name
function Profile(props) {
  const { image, name } = props; // Destructuring props for the component

  return (
    <div className="profile">
      {" "}
      {/* Container for the profile information */}
      <img src={image} style={{ width: 40, height: 40 }} />{" "}
      {/* Profile picture */}
      <p>{name}</p> {/* Profile name */}
    </div>
  );
}

// Navbar Component: Combines the Path and Profile components to create the navbar
function Navbar() {
  return (
    <div className="navbar">
      {" "}
      {/* Main container for the navbar */}
      <Path
        icon={dashboardIcon} // Icon representing the base path
        basePath={"Dashboard"} // Base path name
        currentRoute={"Overview"} // Current active route
      />
      <div
        style={{
          display: "flex", // Layout as a flex container
          alignItems: "center", // Vertically center align items
          width: 200, // Width of the container for notification and profile
          justifyContent: "space-around", // Distribute space between items
        }}
      >
        <img src={notificationIcon} style={{ width: 20, height: 20 }} />{" "}
        {/* Notification bell icon */}
        <Profile image={profilePic} name={"John Miles"} />{" "}
        {/* Profile section with image and name */}
      </div>
    </div>
  );
}

export default Navbar;
