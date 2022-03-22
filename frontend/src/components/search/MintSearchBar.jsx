//modules
import '../../styles/MintSearchBar.css'

export default function MintSearchBar({ bright }) {
  return (
    <div className="MintSearchBar">
      <input className={`searchBar ${bright}`} type="text" />
    </div>
  )
}
