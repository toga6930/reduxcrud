import "./styles.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "./User";

export default function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [newnickname, setNewNickname] = useState("");
  const [newName, setNewName] = useState("");

  return (
    <>
      <div className="user-container">
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Nickname"
          onChange={(event) => {
            setNickname(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                nickname
              })
            );
          }}
        >
          Add
        </button>
      </div>
      <div>
        {userList.map((user) => {
          return (
            <div className="display">
              <h1> {user.name}</h1>
              <h1> {user.nickname}</h1>
              <input
                type="text"
                placeholder="New Name"
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="New Nickname"
                onChange={(event) => {
                  setNewNickname(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUser({
                      id: user.id,
                      name: newName,
                      nickname: newnickname
                    })
                  );
                }}
              >
                Update
              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
