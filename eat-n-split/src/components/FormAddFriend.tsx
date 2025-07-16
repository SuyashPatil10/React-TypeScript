import { useState, type FormEvent } from "react";
import Button from "./Button";
import type { Friend } from "../App";

type FormAddFriendProps = {
  handleAddFriend: (friend: Friend) => void;
};

function FormAddFriend({ handleAddFriend }: FormAddFriendProps) {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend: Friend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    handleAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌅Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
