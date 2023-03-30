import ArticlesCardList from "../components/ArticlesCardList";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import ArticleReadPage from "./ArticleReadPage";
import { useState } from "react";
const ArticlesPage = () => {

  const [category, setCategory] = useState("");

    return (
    <div className="flex p-5 ">
      <div className="w-1/4 h-screen">
          <Sidebar setCategory={setCategory} />
      </div>
      <div className="flex-grow">
        <div className="py-4">
            <Search />
        </div>

           {/* <ArticleReadPage /> */}
        <div className="3/4 overflow-y-auto">
           <ArticlesCardList category={category} />
        </div>
      </div>
    </div>
     );
}
 
export default ArticlesPage;
