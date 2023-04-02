import { useState, useEffect } from "react";
import ArticlesCardList from "../components/ArticlesCardList";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const ArticlesPage = ({username, userId, sessionId}) => {
 
  console.log(sessionId)

  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    axios.get('http://localhost:3000/articles', {
      headers: {
        'Authorization': `Session ${sessionId}`
      }
    })
    .then(response => {
      const data = response.data;
      const filtered = data.filter(article => article.title.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredArticles(filtered);
    })
    .catch(error => console.log(error));
  }, [searchQuery, sessionId]);
  
  
  return (
    <div className="flex p-5 ">
      <div className=" ">
        <Sidebar setCategory={setCategory} />
      </div>
      <div className="flex-grow ">
        <div className="py-4">
          <Search onSearch={handleSearch} />
        </div>
        <div className=" overflow-y-auto">
          <ArticlesCardList
            category={category}
            articles={filteredArticles}
            setArticles={setFilteredArticles}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
