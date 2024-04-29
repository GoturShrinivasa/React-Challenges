import React, { useState, useEffect } from 'react';

const DynamicData = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async() => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/typicode/demo/posts');
      const result = await response.json();
      setData(result);
      }
      catch {
        console.log('Error in fetching the data');
      }
    }
    fetchData();
  },[])

  return (
    <div>
      <div>Display Data Dynamically</div>
      {data.length === 0 ? (<p>No data Available</p>):
      (<ul>{data.map((item)=> (<li key={item.id}>{item.title}</li>))}</ul>)
      }
    </div>  
  );
};

export default DynamicData;