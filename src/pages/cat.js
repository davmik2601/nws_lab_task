import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { getCat } from '../redux/actions/catAction';

const Cat = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { cat } = useSelector(state => state);

  useEffect(() => {
    dispatch(getCat(id));
  }, [])


  return (
    <div className="cat_page">
      <h1>Cat Page (Info)</h1>
      {cat && 
        <div className="cat_info">
          <div className="left">
            <img src={cat.url} alt="" />
          </div>
          <div className="right">
            <table>
              <thead>
              </thead>
              <tbody>
                <tr>
                  <td>Cat_Id:</td>
                  <td>{cat.id}</td>
                </tr>
                <tr>
                  <td>Cat width:</td>
                  <td>{cat.width}</td>
                </tr>
                <tr>
                  <td>Cat height:</td>
                  <td>{cat.height}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      }
    </div>
  )
}

export default Cat
