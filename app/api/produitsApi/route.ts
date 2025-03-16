import { NextResponse } from 'next/server';

let produits = [
	{ id: 1, name: 'Produit 1', price: 100 },
  	{ id: 2, name: 'Produit 2', price: 200 },
  ];

// ✅ GET (Lire tous les produits)
export async function GET() {
	return NextResponse.json(produits);
}

// ✅ POST (Créer un produit)
export async function POST(req: Request) {
	const { name ,price } = await req.json();
	const newProduit = { id:Date.now() ,name ,price };
	produits.push(newProduit);
	return NextResponse.json(newProduit, { status: 201} );
}
