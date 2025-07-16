import { useState, type FormEvent } from "react";
import type { Friend } from "../App";
import Button from "./Button";

type FormSplitBillProps = {
  selectedFriend: Friend;
  onSplitBill: (amount: number) => void;
};

function FormSplitBill({ selectedFriend, onSplitBill }: FormSplitBillProps) {
  const [bill, setBill] = useState<string>("");
  const [piadByUser, setPiadByUser] = useState<string>("");
  const [whoIsPaying, setWhoIsPaying] = useState<string>("user");

  const paidByFriend: number | string = bill
    ? Number(bill) - Number(piadByUser)
    : "";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!bill || !piadByUser) return;

    onSplitBill(
      whoIsPaying === "user" ? Number(paidByFriend) : -Number(piadByUser)
    );

    setBill("");
    setPiadByUser("");
    setWhoIsPaying("user");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>🧍Your expense</label>
      <input
        type="number"
        value={piadByUser}
        onChange={(e) =>
          Number(setPiadByUser(e.target.value)) > Number(bill)
            ? piadByUser
            : setPiadByUser(e.target.value)
        }
      />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
