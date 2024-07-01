import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const userObject = {
    name: "Tony Stark",
    thumbnail:
      "https://i.pinimg.com/originals/77/d8/88/77d888900ee799ae324337790cf7f586.jpg",
    codename: "Iron Man",
  };

  return (
    <div className="container">
      <h1>user challenge</h1>;
      {user ? (
        <div>
          <div className="user-container">
            <img src={user.thumbnail} alt={`${user.name} Picture`} />
            <div className="user-content">
              <h3>{user.name}</h3>
              <p>{user.codename}</p>
            </div>
          </div>
          <button className="btn" onClick={() => setUser(null)}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={() => setUser(userObject)}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
