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
		price: 129.99,
	},
	{
		name: "Option 2",
		image:
			"https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg",
		id: "02",
		price: 159.99,
	},
	{
		name: "OptionOptionOptionOptionOptionOptionOptionOptionOptionOptionOptionOptionOptionOptionOption",
		image:
			"https://plus.unsplash.com/premium_photo-1664267832588-650cc54fcea6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuaW5hJTIwZGElMjBtb2RhfGVufDB8fDB8fHww",
		id: "03",
		price: 142.99,
	},
	{
		name: "Option 4",
		image:
			"https://static.vecteezy.com/ti/fotos-gratis/p2/5208925-close-up-face-mulher-moda-feminino-close-up-em-roupas-da-moda-isolado-em-fundo-branco-verao-divertido-tempo-e-verao-acessorios-menina-engracada-gratis-foto.jpg",
		id: "04",
		price: 110.99,
	},
	{
		name: "Option 5",
		image:
			"https://img.freepik.com/fotos-gratis/moda-mulher-a-passear-la-fora_23-2148448832.jpg?w=2000",
		id: "05",
		price: 241.99,
	},
	{
		name: "Option 6",
		image:
			"https://static.vecteezy.com/ti/fotos-gratis/p2/36176035-ai-gerado-retrato-do-jovem-a-moda-menina-modelo-dentro-casual-verao-roupas-dentro-castanho-chapeu-com-natural-maquiagem-dentro-oculos-isolar-gratis-foto.jpg",
		id: "06",
		price: 220.99,
	},
	{
		name: "Option 7",
		image:
			"https://fernandaramosstore.com.br/wp-content/uploads/2023/11/fernandaramosstore_com_br-vestido-feminino-curto-laise-com-amarracao-nas-costas-verde-3-580x700.jpg",
		id: "07",
		price: 129.99,
	},
	{
		name: "Option 8",
		image:
			"https://menside.com.br/cdn/shop/files/Camiseta-de-manga-comprida-Oxford-masculina-lazer-juvenil-slim-fit-moda-coreana-camisas-elegantes-de-luxo.jpg_3bf782cf-065c-4637-a555-ecd47cc0984f_1200x1200.webp?v=1693691913",
		id: "08",
		price: 159.99,
	},
	{
		name: "Option 9",
		image:
			"https://calmaatelier.com.br/cdn/shop/products/1_e5b7b67e-185a-4d11-b693-f6bc155f76e5.png?v=1660226107",
		id: "09",
		price: 142.99,
	},
	{
		name: "Option 10",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8_KMVeqZXwgwDpdV4EqJOYPsOcnrD_Tk2xh29pP73w&s",
		id: "10",
		price: 110.99,
	},
	{
		name: "Option 11",
		image:
			"https://static.stealthelook.com.br/wp-content/uploads/2023/05/puffer3-20230516185225.jpg",
		id: "11",
		price: 241.99,
	},
	{
		name: "Option 12",
		image:
			"https://viaandrea.com.br/wp-content/uploads/2022/08/viaandrea-terno-ingles-slim-fit-maquinetado-1.jpg",
		id: "12",
		price: 220.99,
	},
	{
		name: "Option 13",
		image:
			"https://viaandrea.com.br/wp-content/uploads/2022/08/viaandrea-terno-ingles-slim-fit-poliviscose-1.jpeg",
		id: "13",
		price: 129.99,
	},
	{
		name: "Option 14",
		image:
			"https://images.tcdn.com.br/img/img_prod/668951/camisa_manga_longa_para_motociclista_em_elastano_1833_1_996808c1ea9ebd1f9525c79132101414.jpg",
		id: "14",
		price: 159.99,
	},
	{
		name: "Option 15",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZL-ynYLdwinMpaKQa4us3oA2z22eN3K9WwmK4l7joqw&s",
		id: "15",
		price: 142.99,
	},
];

const prouctsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
});

export const products = prouctsSlice.reducer;
export const useProducts = (state: any) => state.products as Products[];
