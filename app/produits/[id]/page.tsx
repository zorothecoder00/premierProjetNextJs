interface Produit {
	id: number;
	name: string;
	price: number;
}

export default async function ProduitDetail({ params }: { params: { id: string } }) {
	const res = await fetch('http://localhost:3000/api/produitsApi/' + params.id);
	const produits: Produit[] = await res.json();
	const produit = produits.find((p) => p.id===Number(params.id));

	if(!produit) return <p>Produit introuvable.</p>;

	return (
		<div>
			<h1>{produit.name}</h1>
			<p>Prix : {produit.price}</p>
		</div>
		);
}