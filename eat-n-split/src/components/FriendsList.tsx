import type { Friend as FriendType } from "../App";
import Friend from "./Friend";

type FriendsListProps = {
  friends: FriendType[];
  onSelection: (friend: FriendType | null) => void;
  selectedFriend: FriendType | null;
};

function FriendsList({
  friends,
  onSelection,
  selectedFriend,
}: FriendsListProps) {
  console.log(friends);
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Friend
            key={friend.id}
            friend={friend}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}

export default FriendsList;
