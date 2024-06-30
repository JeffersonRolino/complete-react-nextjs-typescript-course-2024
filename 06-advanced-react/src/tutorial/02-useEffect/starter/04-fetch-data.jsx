import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setUsers(json);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

  console.log(users);

  return (
    <div>
      <h1>fetch data example</h1>
      <h3 className="subtitle">Github Users</h3>
      {users.map((user) => {
        return (
          <div key={user.id} className="user-container">
            <img src={user.avatar_url} alt={user.login} />
            <div className="user-content">
              <h3>{user.login}</h3>
              <a href={user.html_url} target="_blank">
                Profile
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FetchData;
