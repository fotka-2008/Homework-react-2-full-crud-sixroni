import { useContext } from 'react'
import { ItemsContext } from '../context'

function Search() {
  const { state, dispatch } = useContext(ItemsContext)

  return (
    <input
      value={state.search}
      onChange={(e) => dispatch({ type: 'SEARCH', text: e.target.value })}
      placeholder="Поиск..."
      className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 outline-none focus:border-blue-500"
    />
  )
}

export default Search
