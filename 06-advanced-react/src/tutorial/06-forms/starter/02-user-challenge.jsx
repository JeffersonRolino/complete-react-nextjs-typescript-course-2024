import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const addUser = (event) => {
    event.preventDefault();
    if (!name) {
      console.log("You must insert a name...");
      return;
    }
    const id = Date.now();
    setUsers([...users, { id: id, name: name }]);
    setName("");
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={(e) => addUser(e)}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h2>Users</h2>
      {users.map((user) => {
        return (
          <div
            className="user-container"
            style={{ justifyContent: "space-between" }}
            key={user.id}
          >
            <h4>{user.name}</h4>
            <button
              style={{ height: "32px", backgroundColor: "#D21942" }}
              className="btn"
              onClick={() => removeUser(user.id)}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
