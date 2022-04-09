import React, {useState} from 'react';
import useAxios from 'axios-hooks';
import {Form, Table} from 'react-bootstrap'
 

const Categories = (props) => {
const [{data: posts, loading, error}] = useAxios('/api/posts');
const[filteredCats, setFilteredCats] = useState(null);
console.log(posts)
if(error) return <p>Error occurred</p>; 
if(loading) return <p>Loading...</p>; 
 
const getUniqueCats = () => {
  return posts.reduce((accum, d) => {
    if (!accum.includes(d.category)) {
      accum.push(d.category);
      console.log(accum)
    }
return accum; 
  }, []);
}; 

const handleSelect = (event) => {
  let selectedCat = event.target.value;
  setFilteredCats(posts.filter((p) => p.category === selectedCat))
}


const renderSelect = (categories) => {
  console.log(categories)
  return (
    <Form.Select 
    defaultValue={'DEFAULT'}
    label='Select'
    onChange={handleSelect}
    aria-label="Select Category">
    <option 
    value="DEFAULT"
    disabled 
    hidden
    >Choose a category</option>
    {categories.map((category)=>{
    
    console.log(category)
      return <option value={category}>{category}</option>
    })}
    </Form.Select>
  )
}


const getSelect = () => {
  let uniqueCats = getUniqueCats();
    return renderSelect(uniqueCats);
};


const renderFilteredCatPosts = () => {
  if (!filteredCats) {
    return <p>YO YO! </p>;
    }



return (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Meme</th>

      </tr>
    </thead>
    <tbody>
      {filteredCats.map((c) =>(
        <tr key={c.id}>
          <td>{c.title}</td>
          <td>{c.meme}</td>
      
        </tr>
      ))}
    </tbody>
  </Table>
      );
   };



return (
  <div>
    <h1>Memes by Category</h1>
    
    
    {getSelect()}
  
    {renderFilteredCatPosts()}
  

  </div>
)

}
export default Categories;
