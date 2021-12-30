function fetchCategories() {
	// fetch("http://192.168.100:1337/categories", {
	// return fetch("http://127.0.0.1:1337/categories", {
	return fetch("http://10.0.2.2:1337/api/categories", {
		// return fetch("http://10.135.49.50.245:1337/categories", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
}

async function getCategories() {
	try {
		const categories = []
		const response = await fetchCategories()
		const data = await response.json()
		// console.log(data, "from categories module")
		categories.push({
			id: 0,
			category: "All",
		})

		data["data"].forEach((item) => {
			categories.push({
				id: item.id,
				category: item.attributes.category,
			})
		})
		// console.log(categories, "from module")
		return categories
	} catch (error) {
		console.warn("cant load categories from server", error)
	}
}

export default getCategories
