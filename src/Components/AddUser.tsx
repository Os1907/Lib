import { useState } from "react";
import { useAddUser } from "./Services/Api/userService";

const AddUser = () => {
  const mutation = useAddUser();
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(newUser);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        className="border p-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        className="border p-2 ml-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 ml-2">
        Add User
      </button>
    </form>
  );
};

export default AddUser;
