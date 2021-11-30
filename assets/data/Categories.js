function fetchCategories() {
	// fetch("http://192.168.100:1337/categories", {
	// return fetch("http://127.0.0.1:1337/categories", {
	return fetch("http://192.168.100.245:1337/categories", {
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
		// console.log(data)
		data.forEach((item) => {
			categories.push({
				id: item.id,
				category: item.category,
			})
		})
		// console.log(categories, "from module")
		// console.log(categories, "from bottom of module")
		return categories
	} catch (error) {
		throw new Error("cant load data from server", error)
	}
}

export default getCategories

// export default [
//   { id: 0, category: "All" },
//   { id: 1, category: "electronics" },
//   { id: 2, category: "jewelery" },
//   { id: 3, category: "men's clothing" },
//   { id: 4, category: "women's clothing" },
// ];
