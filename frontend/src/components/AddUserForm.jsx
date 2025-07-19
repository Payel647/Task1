import { useState } from "react";

const AddUserForm = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onAdd(name);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        className="border px-2 py-1 rounded"
        placeholder="New user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-3 py-1 rounded">Add</button>
    </form>
  );
};

export default AddUserForm;
