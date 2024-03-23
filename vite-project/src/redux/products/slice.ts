import { createSlice } from "@reduxjs/toolkit";

export interface Products {
	name: string;
	image: string;
	id: string;
	price: number;
}

// Preencher os valores com os produtos
const initialState: Products[] = [
	{
		name: "Option 1",
		image:
			"https://static.vecteezy.com/ti/fotos-gratis/p2/19085978-belos-detalhes-de-roupas-femininas-para-casual-gratis-foto.JPG",
		id: "01",
		price: 129.9,
	},
	{
		name: "Option 2",
		image:
			"https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg",
		id: "02",
		price: 159.9,
	},
	{
		name: "Option 3",
		image:
			"https://plus.unsplash.com/premium_photo-1664267832588-650cc54fcea6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuaW5hJTIwZGElMjBtb2RhfGVufDB8fDB8fHww",
		id: "03",
		price: 142.9,
	},
	{
		name: "Option 4",
		image:
			"https://static.vecteezy.com/ti/fotos-gratis/p2/5208925-close-up-face-mulher-moda-feminino-close-up-em-roupas-da-moda-isolado-em-fundo-branco-verao-divertido-tempo-e-verao-acessorios-menina-engracada-gratis-foto.jpg",
		id: "04",
		price: 110.9,
	},
	{
		name: "Option 5",
		image:
			"https://img.freepik.com/fotos-gratis/moda-mulher-a-passear-la-fora_23-2148448832.jpg?w=2000",
		id: "05",
		price: 241.9,
	},
	{
		name: "Option 6",
		image:
			"https://static.vecteezy.com/ti/fotos-gratis/p2/36176035-ai-gerado-retrato-do-jovem-a-moda-menina-modelo-dentro-casual-verao-roupas-dentro-castanho-chapeu-com-natural-maquiagem-dentro-oculos-isolar-gratis-foto.jpg",
		id: "06",
		price: 220.9,
	},
	{
		name: "Option 7",
		image:
			"https://static.vecteezy.com/ti/fotos-gratis/p2/19085978-belos-detalhes-de-roupas-femininas-para-casual-gratis-foto.JPG",
		id: "07",
		price: 129.9,
	},
	{
		name: "Option 8",
		image:
			"https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg",
		id: "08",
		price: 159.9,
	},
	{
		name: "Option 9",
		image:
			"https://plus.unsplash.com/premium_photo-1664267832588-650cc54fcea6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuaW5hJTIwZGElMjBtb2RhfGVufDB8fDB8fHww",
		id: "09",
		price: 142.9,
	},
	{
		name: "Option 10",
		image:
			"https://static.vecteezy.com/ti/fotos-gratis/p2/5208925-close-up-face-mulher-moda-feminino-close-up-em-roupas-da-moda-isolado-em-fundo-branco-verao-divertido-tempo-e-verao-acessorios-menina-engracada-gratis-foto.jpg",
		id: "10",
		price: 110.9,
	},
	{
		name: "Option 11",
		image:
			"https://img.freepik.com/fotos-gratis/moda-mulher-a-passear-la-fora_23-2148448832.jpg?w=2000",
		id: "11",
		price: 241.9,
	},
	{
		name: "Option 12",
		image:
			"https://static.vecteezy.com/ti/fotos-gratis/p2/36176035-ai-gerado-retrato-do-jovem-a-moda-menina-modelo-dentro-casual-verao-roupas-dentro-castanho-chapeu-com-natural-maquiagem-dentro-oculos-isolar-gratis-foto.jpg",
		id: "12",
		price: 220.9,
	},
	{
		name: "Option 13",
		image:
			"https://static.vecteezy.com/ti/fotos-gratis/p2/19085978-belos-detalhes-de-roupas-femininas-para-casual-gratis-foto.JPG",
		id: "13",
		price: 129.9,
	},
	{
		name: "Option 14",
		image:
			"https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg",
		id: "14",
		price: 159.9,
	},
	{
		name: "Option 15",
		image:
			"https://plus.unsplash.com/premium_photo-1664267832588-650cc54fcea6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuaW5hJTIwZGElMjBtb2RhfGVufDB8fDB8fHww",
		id: "15",
		price: 142.9,
	},
	{
		name: "Option 16",
		image:
			"https://static.vecteezy.com/ti/fotos-gratis/p2/5208925-close-up-face-mulher-moda-feminino-close-up-em-roupas-da-moda-isolado-em-fundo-branco-verao-divertido-tempo-e-verao-acessorios-menina-engracada-gratis-foto.jpg",
		id: "16",
		price: 110.9,
	},
	{
		name: "Option 17",
		image:
			"https://img.freepik.com/fotos-gratis/moda-mulher-a-passear-la-fora_23-2148448832.jpg?w=2000",
		id: "17",
		price: 241.9,
	},
	{
		name: "Option 18",
		image:
			"https://static.vecteezy.com/ti/fotos-gratis/p2/36176035-ai-gerado-retrato-do-jovem-a-moda-menina-modelo-dentro-casual-verao-roupas-dentro-castanho-chapeu-com-natural-maquiagem-dentro-oculos-isolar-gratis-foto.jpg",
		id: "18",
		price: 220.9,
	},
];

const prouctsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
});

export const products = prouctsSlice.reducer;
export const useProducts = (state: any) => state.products as Products[];
