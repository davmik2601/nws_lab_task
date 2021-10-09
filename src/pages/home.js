import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CatComponent from '../components/CatComponent';
import { getAllCats } from '../redux/actions/catListAction';

const Home = () => {

  const dispatch = useDispatch();
  const { catList } = useSelector(state => state);
  const { name } = useParams();

  const handleSeeMore = (e) => {
    dispatch(getAllCats(catList.page+1));
  }


  useEffect(() => {
    dispatch(getAllCats());
  }, [window.location.pathname]);


  return (
    <div className="home_page">
      <h1 className="page_name">{name? name : "All Cats"}</h1>
      <div className="cats_list">
        {catList.cats.map(item => (
          <CatComponent cat={item} key={item.id} />
        ))}
      </div>
      <div className="see_more" onClick={handleSeeMore}>See More</div>
    </div>
  )
}

export default Home;
