import { useContext } from 'react'
import { ItemsContext } from '../context'

function Pagination() {
  const { state, dispatch } = useContext(ItemsContext)

  const filtered = state.items.filter((item) =>
    item.name.toLowerCase().includes(state.search.toLowerCase())
  )
  const totalPages = Math.ceil(filtered.length / 5) || 1

  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (
    <div className="flex justify-center gap-2 mt-4">
      <button
        disabled={state.page === 1}
        onClick={() => dispatch({ type: 'PAGE', page: state.page - 1 })}
        className="px-3 py-1 rounded border bg-white disabled:opacity-40"
      >
        Назад
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => dispatch({ type: 'PAGE', page: p })}
          className={`px-3 py-1 rounded border ${
            state.page === p ? 'bg-blue-500 text-white' : 'bg-white'
          }`}
        >
          {p}
        </button>
      ))}
      <button
        disabled={state.page >= totalPages}
        onClick={() => dispatch({ type: 'PAGE', page: state.page + 1 })}
        className="px-3 py-1 rounded border bg-white disabled:opacity-40"
      >
        Вперёд
      </button>
    </div>
  )
}

export default Pagination
