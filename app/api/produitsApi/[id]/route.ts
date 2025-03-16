import { NextResponse } from 'next/server';

let produits = [
  { id: 1, name: 'Produit 1', price: 100 },
  { id: 2, name: 'Produit 2', price: 200 },
];

// ✅ PUT (Mettre à jour un produit spécifique)
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { name, price } = await req.json();
  const produitId = Number(params.id); // Récupération de l'ID du produit à partir des paramètres d'URL
  const produitIndex = produits.findIndex((p) => p.id === produitId);

  if (produitIndex === -1) {
    return NextResponse.json({ error: 'Produit non trouvé' }, { status: 404 });
  }

  produits[produitIndex] = { id: produitId, name, price };
  return NextResponse.json(produits[produitIndex]);
}

// ✅ DELETE (Supprimer un produit spécifique)
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const produitId = Number(params.id); // Récupération de l'ID du produit à partir des paramètres d'URL
  const produitIndex = produits.findIndex((p) => p.id === produitId);

  if (produitIndex === -1) {
    return NextResponse.json({ error: 'Produit non trouvé' }, { status: 404 });
  }

  produits = produits.filter((p) => p.id !== produitId);
  return NextResponse.json({ message: 'Produit supprimé' });
}
