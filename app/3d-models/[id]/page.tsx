import Image from "next/image"
import type { ModelDetailPageProps } from "@/app/types"
import { getModelById } from "@/app/lib/models"
import Pill from "@/app/components/Pill"
import placeholderImg from "@/public/placeholder.png"
import { FaRegHeart } from "react-icons/fa6"

export default async function ModelDetailPage({ params }: ModelDetailPageProps) {
  /**
   * Challenge: 
   * Import and use the `getModelById()` function from 
   * "@/app/lib/models" and use it to get the details for
   * this specific dynamic page's 3d model.
   * 
   * Note that `getModelById()` is an async function.
   * 
   * Then display the relevant information about the model,
   * using the Figma design as a guide if you'd like.
   */

  const { id } = await params
  const model = await getModelById(id)
  console.log(model)
  return (
    <div className="container max-w-6xl px-4 py-8 mx-auto">
      <article className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Section */}
        <figure className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
          <Image src={placeholderImg} width={662} alt={`3D model of ${model.name}`} />
        </figure>
        {/* Details Section */}
        <section className="flex flex-col justify-center">
          <div className="flex text-2xl items-center text-gray-600" role="status" aria-label="Likes count">
            <FaRegHeart className="mr-2" aria-hidden="true" />
            <span className="font-light" aria-label={`${model.likes} likes`}>{model.likes}</span>
          </div>
          <h1 className="font-bold text-4xl mb-5">{model.name}</h1>
          <Pill className="mb-5 w-fit">{model.category}</Pill>
          <p className="text-2xl text-gray-700 mb-10">{model.description}</p>
          <time className="text-sm text-gray-500" dateTime={model.dateAdded}>Added on {new Date(model.dateAdded).toLocaleDateString()}</time>
        </section>
      </article>
    </div>
  )
}