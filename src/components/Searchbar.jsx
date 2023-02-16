import { useState } from 'react';
import { Notify } from 'notiflix';

export const Searchbar = ({ onSubmit }) => {
  const [name, setName] = useState('')

  const handleNameChange = event => {
    setName(event.currentTarget.value.toLowerCase());
  };
 const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() === '') {
      Notify.failure('Enter a query name.');
      return;
    }
   onSubmit(name);
   setName( '' );
  };
    return (
      <header className="searchbar">
        <form onSubmit={handleSubmit} className="searchForm">
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
          </button>

          <input
            className="searchForm-input"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
}
