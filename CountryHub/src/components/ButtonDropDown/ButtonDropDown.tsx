import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import './ButtonDropDown.css'

const ButtonDropDown = () => {

  const [selectedCategory, setSelectedCategory] = useState('Name');

  const handleDropdownItemClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchClick = async () => {
    try {
      const response = await fetch(`https://your-api-url/${selectedCategory}`);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(`Search results for ${selectedCategory}:`, data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  
  return (
    <div className='dropdown-container'>
      <div className="input-group">
        <input type="text" className="form-control" aria-label="Text input with dropdown button" />
        <div className="input-group-append">
          <Dropdown style={{backgroundColor:'#149CFF',borderRadius:'0px 21px 21px 0px'}}>
            <Dropdown.Toggle style={{color:'white',border:'none'}} variant="outline-secondary" id="dropdown-basic">
              {selectedCategory}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleDropdownItemClick('Name')}>Name</Dropdown.Item>
              <Dropdown.Item onClick={() => handleDropdownItemClick('Full Name')}>Full Name</Dropdown.Item>
              <Dropdown.Item onClick={() => handleDropdownItemClick('Code')}>Code</Dropdown.Item>
              <Dropdown.Item onClick={() => handleDropdownItemClick('Language')}>Language</Dropdown.Item>
              <Dropdown.Item onClick={() => handleDropdownItemClick('Capital')}>Capital</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <button className='searchButton' onClick={handleSearchClick}>Search</button>
    </div>
  );
};
export default ButtonDropDown;