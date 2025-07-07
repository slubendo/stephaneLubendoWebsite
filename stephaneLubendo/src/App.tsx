import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-red-500 flex flex-col items-center justify-center text-red-800">
      <div className="flex gap-4 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo w-16 h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react w-16 h-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-4">Vite + React</h1>
      <div className="card bg-white p-6 rounded-xl shadow-lg">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          count is {count}
        </button>
        <p className="mt-4 text-sm">
          Edit <code className="bg-gray-200 px-1 py-0.5 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-6 text-sm text-red-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
