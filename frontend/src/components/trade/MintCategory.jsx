//modules
import '../../styles/MintCategory.css'

export default function MintCategory({ category }) {
  return <div className="MintCategory__contents">{category.categoryname}</div>
}
