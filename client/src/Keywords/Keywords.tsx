import React, { useEffect, useState } from 'react';
import { BACKEND_URL } from '../common/config';
import axios, { AxiosResponse } from 'axios';
import { KeyWord } from './keywords.model';

function Keywords() {
  const [keywords, keywordsSet] = useState<KeyWord[]>();


  useEffect(() => {
    async function loadKeywords() {
      const result: AxiosResponse<KeyWord[]> = await axios.get(BACKEND_URL + '/api/keywords');
      keywordsSet(result.data);
    }

    loadKeywords();
  }, []);

  return (
    <div>
      <h1>Keywords</h1>
      {keywords?.map((x, index) => <span key={index}>{x.keyWord} </span>)}
    </div>
  );
}

export default Keywords;