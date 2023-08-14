import { useFilterStore } from "../helpers/filter-store"
import "./Filter.scss"

const Filter = () => {
    const { verified, toggleVerified } = useFilterStore();

  return (
    <label className="label">
        <input type="checkbox" checked={verified} onChange={toggleVerified} className="input-filter"/>
        Show verified users only
      </label>

  )
}

export default Filter