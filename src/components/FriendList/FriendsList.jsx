import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendsList.module.css";

export default function FriendsList({ friends }) {
  return (
    <ul className={styles.container}>
      {friends.map((friend) => (
        <li key={friend.name} className={styles.item}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
}
