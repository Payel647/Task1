import { useEffect, useState } from "react";
import axios from "axios";
import LeaderboardCard from "./components/LeaderboardCard";
import AddUserForm from "./components/AddUserForm";
import TopThree from "./components/TopThree";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  // Fetch users from backend
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://leaderboard-backend-2xdh.onrender.com/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  // Handle claim points
  const handleClaim = async () => {
    if (!selectedId) return alert("Please select a user!");
    try {
      await axios.post(`https://leaderboard-backend-2xdh.onrender.com/api/claim/${selectedId}`);
      fetchUsers();
    } catch (err) {
      console.error("Error claiming points:", err);
    }
  };

  // Handle add user
  const handleAddUser = async (name) => {
    if (!name.trim()) return;
    try {
      await axios.post("https://leaderboard-backend-2xdh.onrender.com/api/users", { name });
      fetchUsers();
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  // Sort users by points descending
  const sortedUsers = [...users].sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          🎉 Weekly Leaderboard
        </h1>

        <TopThree users={sortedUsers} />

        {/* Claim Points Form */}
        <div className="bg-gray-50 p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-2">🎯 Claim Points</h2>
          <select
            onChange={(e) => setSelectedId(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select a user</option>
            {users.map((u) => (
              <option key={u._id} value={u._id}>
                {u.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleClaim}
            className="bg-indigo-600 hover:bg-indigo-700 text-white w-full rounded py-2 transition"
          >
            Claim Points
          </button>
        </div>

        {/* Add User */}
        <div className="bg-gray-50 p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-2">➕ Add New User</h2>
          <AddUserForm onAdd={handleAddUser} />
        </div>

        {/* Leaderboard Cards */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-3">📋 All Participants</h2>
          {sortedUsers.map((u, idx) => (
            <LeaderboardCard key={u._id} user={u} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
