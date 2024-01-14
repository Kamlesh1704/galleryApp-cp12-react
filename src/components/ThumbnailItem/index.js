// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeImage , isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const isActiveclass = isActive ? 'image' : 'img'
  const onclicking = () => {
    changeImage(id)
  }
  return (
    <li className="li">
     <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={` ${isActiveclass}`}
          onClick={onclicking}
        />
    </li>
  )
}
export default ThumbnailItem
