import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
 
const App = () =>{
  const [quoteText, setquoteText] = useState("");
  const [quoteAuthor, setquoteAuthor] = useState("");
  const [quoteGen, setquoteGen] = useState("");

  const quoteAPI = async () =>{
    let arrayOfQuotes = [];
    try{
      const data = await axios.get("https://quote-garden.herokuapp.com/api/v3/quotes/random");
      arrayOfQuotes = data.data;
    }catch(error){
      console.log(error);
    }

    try{
      setquoteText(arrayOfQuotes.data[0].quoteText);
      setquoteAuthor(arrayOfQuotes.data[0].quoteAuthor);
      setquoteGen(arrayOfQuotes.data[0].quoteGenre);
    }catch(error){
        console.log(error);
    }
  };

  useEffect(() =>{
      quoteAPI();
  },[])

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="quote-area">
            <i className="fa fa-quote-left"></i>
            <p className="quote">{quoteText}</p>
            <i className="fa fa-quote-right"></i>
          </div>
          <div className="author">
            <span>__</span>
            <span className="name">{quoteAuthor}</span>
          </div>
          <div className="quotegen">
            <span className="name">{quoteGen}</span>
          </div>
        </div>
        <div className="buttons">
            <button onClick={quoteAPI}>New Quote</button>
        </div>
      </div>
    </>
    
  );
}

export default App;

