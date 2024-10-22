import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedRole, setUpdatedRole] = useState('');

  useEffect(() => {
    axios.get('/users')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des utilisateurs:", error);
      });
  }, []);

  const handleEditUser = (user) => {
    setEditingUser(user); 
    setUpdatedName(user.name); 
    setUpdatedRole(user.role); 
  };

  const handleUpdateUser = () => {
    axios.put(`/users/${editingUser.id}`, {
      name: updatedName,
      role: updatedRole
    })
      .then(response => {
        setUsers(users.map(user => (user.id === editingUser.id ? response.data.user : user)));
        setEditingUser(null); 
      })
      .catch(error => {
        console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
      });
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div>
      <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-6">Gérer les utilisateurs</h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-xs md:text-lg">
          <thead>
            <tr>
              <th className="px-2 py-1 md:px-4 md:py-2">Nom</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Email</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Rôle</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="border px-2 py-1 md:px-4 md:py-2">
                  {editingUser && editingUser.id === user.id ? (
                    <input 
                      type="text" 
                      value={updatedName} 
                      onChange={(e) => setUpdatedName(e.target.value)}
                      className="border p-1 md:p-2 rounded"
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td className="border px-2 py-1 md:px-4 md:py-2">{user.email}</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">
                  {editingUser && editingUser.id === user.id ? (
                    <select 
                      value={updatedRole} 
                      onChange={(e) => setUpdatedRole(e.target.value)}
                      className="border p-1 md:p-2 rounded"
                    >
                      <option value="user">Utilisateur</option>
                      <option value="admin">Administrateur</option>
                    </select>
                  ) : (
                    user.role
                  )}
                </td>
                <td className="border px-2 py-1 md:px-4 md:py-2">
                  {editingUser && editingUser.id === user.id ? (
                    <>
                      <button 
                        className="bg-green-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg"
                        onClick={handleUpdateUser}
                      >
                        Enregistrer
                      </button>
                      <button 
                        className="bg-gray-500 text-white px-2 py-1 md:px-4 md:py-2 ml-2 rounded-lg"
                        onClick={handleCancelEdit}
                      >
                        Annuler
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        className="bg-gray-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg"
                        onClick={() => handleEditUser(user)}
                      >
                        Modifier
                      </button>
                      <button className="bg-red-500 text-white px-2 py-1 md:px-4 md:py-2 ml-2 rounded-lg">
                        Supprimer
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
