// Задание: используя метод map развернуть 5 компонентов userInfo, передав пропы: name, salary

// userInfo разметка:
{
  /* <div>
    <h2>name</h2>
    <p>salary</p>
</div> */
}

function UserInfo(props) {
  const { name, salary, id, deleteUserById } = props;
  return (
    <div onClick={() => deleteUserById(id)}>
      <h2>{name}</h2>
      <p>{salary}</p>
    </div>
  );
}

export default UserInfo;
