'use client';

import { useEffect, useState } from 'react';

interface Produit { 
  id: number;
  name: string;
  price: number;
}

export default function ListeProduits() {
  const [produits, setProduits] = useState<Produit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduits = async () => {
      const res = await fetch('http://localhost:3000/api/produitsApi');
      const data = await res.json();
      setProduits(data);
      setLoading(false);
    };

    fetchProduits();
  }, []);

  if (loading) {
    return <div className="text-center">Chargement...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Liste des Produits</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <table className="min-w-full table-auto">
          <thead className="border-b">
            <tr>
              <th className="px-4 py-2 text-left">Nom du produit</th>
              <th className="px-4 py-2 text-left">Prix</th>
            </tr>
          </thead>
          <tbody>
            {produits.map((produit) => (
              <tr key={produit.id} className="border-b">
                <td className="px-4 py-2">{produit.name}</td>
                <td className="px-4 py-2">{produit.price}€</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
