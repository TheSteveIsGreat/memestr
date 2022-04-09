import React, {useState} from 'react';
import useAxios from 'axios-hooks';
import {Form} from "antd"


const Categories = (props) => {
const [{data: posts, loading, error}] = useAxios('/api/posts');
const[filteredCats, setFilteredCats] = useState(null);

if(error) return <p>Error occurred</p>; 
if(loading) return <p>Loading...</p>; 
 
const getUniqueCats = () => {
  return posts.reduce((accum, d) => {
    if (!accum.includes(d.tags)) {
      accum.push(d.tags);
    }
return accum; 
  }, []);
}; 

const handleSelect = (event) => {
  let selectedCat = event.target.value;
  setFilteredCats(posts.filter((p) => p.tags === selectedCat))
}


const renderSelect = (tags) => {
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
    {tags.map((tag)=> (
      <option value={tag}>{tag}</option>
    ))}
    </Form.Select>
  )
}


const getSelect = () => {
  let uniqueCats = getUniqueCats();
    return renderSelect(uniqueCats);
};


const renderFilteredCatPosts = () => {
  if (!filteredCats) {
    return <p></p>;
    }


return(
<div>
{filteredCats.map((c) => (
  <p> {c.meme} </p>

))}
</div>
)
};
return (
  <div>
    <h1>Memes by Categtory</h1>
    <p>{getSelect()}</p>
    <p>{renderFilteredCatPosts()}</p>

  </div>
)

}
export default Categories;
