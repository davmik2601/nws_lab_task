import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../../redux/actions/categoryAction';

const Category_Bar = () => {
  
  const dispatch = useDispatch();
  const { category } = useSelector(state => state);

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  

  return (
    <div className="category_bar">
      <div className="category_list">
        {
          category.categories.map(ctg => (
            <Link to={`/category/${ctg.name}/${ctg.id}`} key={ctg.id}>
              <div className="category_item">
                {ctg.name}
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Category_Bar;
