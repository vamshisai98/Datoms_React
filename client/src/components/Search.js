import React, { useEffect, useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [user, setUser] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    setQuery(search);
  };

  const getUsers = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users`);
      const result = await response.json();
      setUser(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, [query]);

  return (
    <div className='container'>
      <div className='search'>
        <input type='text' onChange={handleChange} value={search} />
        <button type='button' onClick={handleClick}>
          Search
        </button>
      </div>

      <div className='content'>
        {user.length > 0 &&
          user.map((x, index) => (
            <div className='card' key={index}>
              <div className='id'>{x.id}</div>
              <div className='email'>{x.email}</div>
              <div className='firstName'>{x.first_name}</div>
              <div className='lastName'>{x.last_name}</div>
              <div className='image'>
                <img src={x.avatar} alt='image' />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
