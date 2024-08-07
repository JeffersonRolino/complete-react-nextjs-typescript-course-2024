import avatar from "../../../assets/react.svg";

// eslint-disable-next-line react/prop-types
function Person({ name, nickName = "shakeAndBake", images }) {
  // eslint-disable-next-line react/prop-types
  const img = images?.[0]?.small?.url ?? avatar;

  // const img = images && images[0] && images[0].small && images[0].small.url;

  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  );
}

export default Person;
