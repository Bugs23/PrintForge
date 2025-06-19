// Import the type definition for the expected props structure of this page
import type { CategoryPageProps } from "@/app/types"

// Import a helper function to get full category data by its slug that's used in the URL
import { getCategoryBySlug } from "@/app/lib/categories"

// Dynamic route component for pages like /categories/[categoryName]
export default async function CategoryPage({ params }: CategoryPageProps) {
  // Params is a Promise here to simulate future async setup (e.g., when using a database)
  const { categoryName } = await params

  // Get category data from local JSON based on the URL slug (will be replaced with async DB call later)
  const category = getCategoryBySlug(categoryName)
  console.log(category)

  // Display the category's human-readable name
  return <h1>{category.displayName}</h1>
}