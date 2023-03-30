import ArticlesCardList from "../components/ArticlesCardList";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import ArticleReadPage from "./ArticleReadPage";

const ArticlesPage = () => {
    return (
    <div className="flex p-5 ">
      <div className="w-1/4 h-screen">
          <Sidebar />
      </div>
      <div className="flex-grow">
        <div className="py-4">
            <Search />
        </div>

           {/* <ArticleReadPage /> */}
        <div className="3/4 overflow-y-auto">
           <ArticlesCardList />
        </div>
      </div>
    </div>
     );
}
 
export default ArticlesPage;
