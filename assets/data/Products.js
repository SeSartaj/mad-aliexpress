const HOST = "http://10.0.2.2:1337"

function fetchProducts() {
	// return fetch("http://127.0.0.1:1337/products", {
	// return fetch("http://10.135.49.50.245:1337/products", {

	return fetch(HOST + "/api/products?populate=category,image", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
}

async function getProducts() {
	const products = []
	try {
		const response = await fetchProducts()
		// console.log(response)
		const data = await response.json()

		data["data"].forEach((product) => {
			console.log(product, "in each foreach")
			products.push({
				id: product.id,
				title: product.attributes.title,
				price: product.attributes.price,
				description: product.attributes.description,
				image: HOST + product.attributes.image.data.attributes.url,
				// imageSm:
				// 	HOST + product.attributes.image.data.attributes.formats.small.url,
				thumbnail:
					HOST + product.attributes.image.data.attributes.formats.thumbnail.url,
				rating: product.attributes.rating,
				category: product.attributes.category.data.attributes.category,
			})
			console.log(products, "after push")
		})

		return products
	} catch (error) {
		console.warn("cant load products from server", error)
	}
}

export default getProducts