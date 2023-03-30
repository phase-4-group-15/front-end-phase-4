import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArticlesCardList from "../components/ArticlesCardList";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";

const ArticlesPage = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    fetch("http://localhost:3004/articles")
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter((article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredArticles(filtered);
      })
      .catch((error) => console.log(error));
  }, [searchQuery]);

  return (
    <div className="flex p-5 ">
      <div className="w-1/4 h-screen">
        <Sidebar setCategory={setCategory} />
      </div>
      <div className="flex-grow">
        <div className="py-4">
          <Search onSearch={handleSearch} />
        </div>
        <div className="3/4 overflow-y-auto">
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
