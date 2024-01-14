// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const onclicking = () => {
    changeImage(id)
  }
  return (
    <li className="li">
      <button onClick={onclicking}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className="img" />
      </button>
    </li>
  )
}
export default ThumbnailItem
