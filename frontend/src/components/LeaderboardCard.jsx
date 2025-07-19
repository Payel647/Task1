export default function LeaderboardCard({ user, index }) {
  const badgeColors = ["bg-yellow-400", "bg-gray-400", "bg-orange-400"];
  return (
    <div className="bg-white shadow flex items-center justify-between px-4 py-3 rounded-lg">
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${
            badgeColors[index] || "bg-indigo-500"
          }`}
        >
          {index + 1}
        </div>
        <span className="font-medium text-gray-700">{user.name}</span>
      </div>
      <span className="text-indigo-600 font-semibold">{user.totalPoints} pts</span>
    </div>
  );
}
