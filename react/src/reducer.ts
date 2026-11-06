export type Item = {
  id: number
  name: string
  selected: boolean
}

export type State = {
  items: Item[]
  search: string
  page: number
  editId: number | null
}

export type Action =
  | { type: 'ADD'; name: string }
  | { type: 'EDIT'; id: number; name: string }
  | { type: 'DELETE'; id: number }
  | { type: 'TOGGLE'; id: number }
  | { type: 'SET_EDIT'; id: number | null }
  | { type: 'SEARCH'; text: string }
  | { type: 'PAGE'; page: number }

export const initialState: State = {
  items: [
    { id: 1, name: 'Купить молоко', selected: false },
    { id: 2, name: 'Сделать домашку', selected: false },
    { id: 3, name: 'Погулять с собакой', selected: false },
    { id: 4, name: 'Прочитать книгу', selected: false },
    { id: 5, name: 'Позвонить маме', selected: false },
    { id: 6, name: 'Выучить React', selected: false },
    { id: 7, name: 'Сходить в спортзал', selected: false },
    { id: 8, name: 'Убрать комнату', selected: false },
    { id: 9, name: 'Купить хлеб', selected: false },
    { id: 10, name: 'Посмотреть фильм', selected: false },
    { id: 11, name: 'Выучить Tailwind', selected: false },
    { id: 12, name: 'Приготовить ужин', selected: false },
  ],
  search: '',
  page: 1,
  editId: null,
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        items: [...state.items, { id: Date.now(), name: action.name, selected: false }],
      }
    case 'EDIT':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.name } : item
        ),
        editId: null,
      }
    case 'DELETE': {
      const items = state.items.filter((item) => item.id !== action.id)
      const count = items.filter((item) =>
        item.name.toLowerCase().includes(state.search.toLowerCase())
      ).length
      const maxPage = Math.ceil(count / 5) || 1
      return { ...state, items, page: Math.min(state.page, maxPage) }
    }
    case 'TOGGLE':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, selected: !item.selected } : item
        ),
      }
    case 'SET_EDIT':
      return { ...state, editId: action.id }
    case 'SEARCH':
      return { ...state, search: action.text, page: 1 }
    case 'PAGE':
      return { ...state, page: action.page }
    default:
      return state
  }
}
