// Import the type definition for the expected props structure of this page
import type { CategoryPageProps } from "@/app/types"
import ModelsGrid from "@/app/components/ModelsGrid"

// Import a helper function to get full category data by its slug that's used in the URL
import { getCategoryBySlug } from "@/app/lib/categories"
import { getModels } from "@/app/lib/models"

// Dynamic route component for pages like /categories/[categoryName]
export default async function CategoryPage({ params }: CategoryPageProps) {

  // Params is a Promise here to simulate future async setup (e.g., when using a database)
  const { categoryName } = await params

  // Get category data from local JSON based on the URL slug (will be replaced with async DB call later)
  const category = getCategoryBySlug(categoryName)

  // Get the models that belong to specified category name
  const models = await getModels({ category: categoryName })

  return (
    <ModelsGrid title={category.displayName} models={models} />
  )
}