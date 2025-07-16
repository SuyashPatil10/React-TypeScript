import type { Friend as FriendType } from "../App";
import Button from "./Button";

type FriendProps = {
  friend: FriendType;
  onSelection: (friend: FriendType | null) => void;
  selectedFriend: FriendType | null;
};

function Friend({ friend, onSelection, selectedFriend }: FriendProps) {
  const isSelected: boolean = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && <p>you and {friend.name} are mutual</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}

export default Friend;
