
import React, { useState, useEffect } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import List from './List';

function Book() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then(res => {
        setData(res.data.books);
        setFilteredData(res.data.books);
      });
  }, []);

  useEffect(() => {
    const filteredBooks = data.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredData(filteredBooks);
  }, [search, data]);

  return (
    <div>
      <nav>
        <p className='title'><span className='kalvium'>Kalvium</span>  Books</p>
        <div>
          <input type="text" className="searchbar" placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <button className='register'><Link to="/Form">Register</Link></button>
      </nav>
      <div className='structure'>
        {filteredData.map((item, index) => (
          <List title={item.title} img={item.imageLinks.thumbnail} rating={item.averageRating} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Book;
