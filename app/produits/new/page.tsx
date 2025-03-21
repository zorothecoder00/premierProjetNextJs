'use client';   

import { useState } from 'react';

export default function AddProduit() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newProduit = { name, price: Number(price) };

    const res = await fetch('http://localhost:3000/api/produitsApi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduit),
    });

    if (res.ok) {
      alert('Produit ajouté avec succès');
      // Tu peux rediriger ou réinitialiser le formulaire si nécessaire
    } else {
      alert('Erreur lors de l\'ajout du produit');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ajouter un nouveau produit</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg">Nom du produit</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-lg">Prix</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Ajouter</button>
      </form>
    </div>
  );
}
