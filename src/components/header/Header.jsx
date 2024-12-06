import "./header.css";

function Greetings({ name }) {
  return (
    <div className="greetings">
      <h4 style={{ fontSize: 12, fontWeight: 500, paddingBottom: 10 }}>
        Welcome Back,
      </h4>
      <h1 style={{ fontSize: 24, fontWeight: 500 }}>{name}!</h1>
    </div>
  );
}

function Header({ setIsMenuOpen }) {
  return (
    <div className="header">
      <Greetings name={"RAGHDA BAKOS"} />
      <p
        onClick={() => {
          setIsMenuOpen(true);
        }}
      >
        View score history
      </p>
    </div>
  );
}

export default Header;
