import { useContext, useState } from 'react'
import { ItemsContext } from '../context'

function List() {
  const { state, dispatch } = useContext(ItemsContext)
  const [editText, setEditText] = useState('')

  const filtered = state.items.filter((item) =>
    item.name.toLowerCase().includes(state.search.toLowerCase())
  )
  const start = (state.page - 1) * 5
  const pageItems = filtered.slice(start, start + 5)

  if (pageItems.length === 0) {
    return <p className="text-center text-gray-500 py-4">Ничего не найдено</p>
  }

  return (
    <ul className="space-y-2">
      {pageItems.map((item) => (
        <li
          key={item.id}
          className={`flex items-center gap-3 p-3 rounded-lg border ${
            item.selected ? 'bg-blue-100 border-blue-400' : 'bg-white border-gray-200'
          }`}
        >
          <input
            type="checkbox"
            checked={item.selected}
            onChange={() => dispatch({ type: 'TOGGLE', id: item.id })}
            className="w-4 h-4"
          />
          {state.editId === item.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 border border-gray-300 rounded px-2 py-1"
              />
              <button
                onClick={() => {
                  if (editText.trim() === '') return
                  dispatch({ type: 'EDIT', id: item.id, name: editText })
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
              >
                Сохранить
              </button>
              <button
                onClick={() => dispatch({ type: 'SET_EDIT', id: null })}
                className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
              >
                Отмена
              </button>
            </>
          ) : (
            <>
              <span className="flex-1">{item.name}</span>
              <button
                onClick={() => {
                  setEditText(item.name)
                  dispatch({ type: 'SET_EDIT', id: item.id })
                }}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Изменить
              </button>
              <button
                onClick={() => dispatch({ type: 'DELETE', id: item.id })}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Удалить
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default List
