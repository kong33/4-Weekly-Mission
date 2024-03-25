import { ChangeEvent, useState, FormEvent, MouseEvent } from 'react'
import toLowerCase from '../utils/toLowerCase'

const useSearch = () => {
  const [keyword, setKeyword] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setKeyword(toLowerCase(e.target.value)) 
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // onSearch(keyword);
  }
  const handleCancel = (e: MouseEvent<HTMLButtonElement>): void => {
    setKeyword('')
  }
  return { keyword, handleChange, handleSubmit, handleCancel }
}

export default useSearch
