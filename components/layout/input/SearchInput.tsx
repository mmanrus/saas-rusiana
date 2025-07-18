import React from 'react'
import { Search } from 'lucide-react'

export default function SearchInput() {
  return (
    <form className="flex items-center max-w-sm mx-auto border-border">
      <label htmlFor="simple-search" className="sr-only">
        Search in Customers
      </label>
      <div className="relative w-full">
        <div
          className="absolute inset-y-0 start-0 flex items-center ps-3
                    pointer-events-none"
        >
          <Search className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                    w-full ps-10 p-2.5 py-1.5 px.3 dark:bg-gray-700 dark:border-gray-600
                    dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search branch name..."
          required
        />
      </div>
    </form>
  );
}
