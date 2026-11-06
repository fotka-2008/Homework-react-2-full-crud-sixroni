import { useContext, useState } from 'react'
import { ItemsContext } from '../context'

function Form() {
  const { dispatch } = useContext(ItemsContext)
  const [text, setText] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (text.trim() === '') return
    dispatch({ type: 'ADD', name: text })
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новый элемент"
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
        Добавить
      </button>
    </form>
  )
}

export default Form
