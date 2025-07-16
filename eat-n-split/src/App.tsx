import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";
import Button from "./components/Button";

export type Friend = {
  id: number | string;
  name: string;
  image: string;
  balance: number;
};

const initialFriends: Friend[] = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState<Friend[]>(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  function handleShowAddFriend() {
    setShowAddFriend((prev) => !prev);
  }

  function handleAddFriend(newFriend: Friend) {
    setFriends((prev) => [...prev, newFriend]);
    handleShowAddFriend();
  }

  function onSelectFriend(friend: Friend | null) {
    setSelectedFriend((current) =>
      current?.id === friend?.id ? null : friend
    );
  }

  function onSplitBill(amount: number) {
    console.log(amount);
    const updatedFriends: Friend[] = friends.map((friend) =>
      friend.id === selectedFriend?.id
        ? { ...friend, balance: friend.balance + amount }
        : friend
    );

    setFriends(updatedFriends);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={onSelectFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend handleAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      <div>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={onSplitBill}
          />
        )}
      </div>
    </div>
  );
}

export default App;
