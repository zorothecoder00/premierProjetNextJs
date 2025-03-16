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
    <div>
      <h1>Ajouter un nouveau produit</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom du produit</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Prix</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
