import React, { useEffect, useState } from 'react';
import { ExpierenceModel } from './experience.model';

function Expierences() {
  const [experiences, setExperiences] = useState<ExpierenceModel[]>();


  useEffect(() => {
    // async function loadKeywords() {
    //   const result: AxiosResponse<KeyWord[]> = await axios.get(BACKEND_URL + '/api/keywords');
    //   keywordsSet(result.data);
    // }
    // loadKeywords();

    // really dumb from me it's the back end that should resolve this we just pass a parameter the language
    const myExperiences: ExpierenceModel[] = [
      { description: 'working', company: 'Boondoggle', translations: [ {language: 'nl', translationMap: new Map([['description', 'werken'], ['company', 'boondoggle']])}] },
      { description: 'sweating', company: 'Materialise Dental', translations: [] }];

    setExperiences(myExperiences);
  }, []);

  return (
    <div>
      <h1 style={{margin:'10px', border: '1px solid green'}}>Expierence</h1>
      <div>
        {experiences?.map((x, index) => <div key={index}>
          {doSomeShadyStuff(x.description, x)} for {x.company}
        </div>)}
      </div>
    </div>
  );
}


export default Expierences;

function doSomeShadyStuff<T>(description: string, element: T): string {
  return 'shady ' + description;
}
