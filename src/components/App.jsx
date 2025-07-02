import "./App.css";
import Profile from "./Profile/Profile";
import userData from '../userData.json'
import friendsData from '../friends.json'
import FriendsList from "./FriendList/FriendsList";



function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendsList friends={friendsData} /> 
    </>
  );
}

export default App;
