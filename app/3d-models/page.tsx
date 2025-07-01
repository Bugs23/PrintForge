import Form from "next/form"
import ModelsGrid from "@/app/components/ModelsGrid"
import { getModels } from "@/app/lib/models"
import type { ModelPageProps } from "@/app/types"

export default async function Page({ searchParams }: ModelPageProps) {
  // Fetch the models from the server
  const models = await getModels()

  // Get the query from searchParams
  const { query } = searchParams

  // If the user types a word, filter the models based on the word, display the models that contain the word in their name or description.
  // If the user doesn't type a word, display all models.
  const filteredModels = query
    ? models.filter((model) =>
      model.name.toLowerCase().includes(query.toLowerCase()) ||
      model.description.toLowerCase().includes(query.toLowerCase()))
    : models

  return (
    <div>
      <Form action="/3d-models" className="w-full px-5 md:px-0 md:max-w-xl">
        <input
          type="text"
          name="query"
          placeholder="E.g. Education, Architecture, etc."
          autoComplete="off"
          defaultValue={query}
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
        />
      </Form>
      {
        // If there are models that match the word the user searched for, display them in the models grid
        // If there are no models that match the word the user searched for, display a message
        filteredModels.length ? (
          <ModelsGrid title="3D Models" models={filteredModels} />
        ) : (
          <div className="flex items-center justify-center h-48">
            <p className="text-center text-2xl text-gray-500">There are no models that contain the term {query}.</p>
          </div>
        )
      }
    </div>
  )
}
