import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, SetUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const userImageStyle = {
    width: "150px",
    borderRadius: "16px",
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const json = await response.json();
        SetUser(json);
      } catch (error) {
        setIsError(true);
        throw error(`Error: ${error.message()}`);
      }
      setIsLoading(false);
    }
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  const { avatar_url, name, company, bio } = user;

  return (
    <div className="user">
      <img style={userImageStyle} src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <h4>{`Works at ${company}`}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
