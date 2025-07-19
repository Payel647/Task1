const avatarImages = [
  "https://randomuser.me/api/portraits/women/45.jpg",
   "https://randomuser.me/api/portraits/women/79.jpg",
   "https://randomuser.me/api/portraits/men/32.jpg",
];


export default function TopThree({ users }) {
  const topThree = users.slice(0, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
      {topThree.map((user, idx) => (
        <div
          key={user._id}
          className="bg-white border rounded-xl p-4 text-center shadow-md hover:shadow-lg transition duration-300"
        >
          <img
            src={avatarImages[idx % avatarImages.length]}
            alt={`User ${idx + 1}`}
            className="w-20 h-20 mx-auto mb-3 rounded-full"
          />
          <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-500">Points: {user.totalPoints}</p>
        </div>
      ))}
    </div>
  );
}
