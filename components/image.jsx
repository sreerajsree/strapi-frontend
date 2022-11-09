import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, className }) => {
  const { url, alternativeText, width, height } = image.data.attributes

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  return (
    <NextImage
      // loader={loader}
      width={width || "100%"}
      height={height || "100%"}
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
      className={className}
    />
  )
}

export default Image
