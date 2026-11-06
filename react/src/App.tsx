import Form from './components/Form'
import Search from './components/Search'
import List from './components/List'
import Pagination from './components/Pagination'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-center mb-6">CRUD приложение</h1>
        <Form />
        <Search />
        <List />
        <Pagination />
      </div>
    </div>
  )
}

export default App
