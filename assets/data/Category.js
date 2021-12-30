import getProducts from "./Products"
import getCategories from "./Categories"

export default async function getCategoriesIncludingProducts() {
	try {
		const categories = await getCategories()
		const products = await getProducts()

		console.log("from category- categories: ", categories)
		console.log("from category- products: ", products)

		const Category = {}

		categories.forEach((data) => {
			Category[data.category] = products.filter(
				(p) => p.category === data.category
			)
		})

		return Category
	} catch (error) {
		console.warn("cant load category from server", error)
	}
}
