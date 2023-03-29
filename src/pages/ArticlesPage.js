import ArticlesCardList from "../components/ArticlesCardList";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import ArticleReadPage from "./ArticleReadPage";

const ArticlesPage = () => {
    return (
    <div className="flex ">
      <div className="w-1/5">
          <Sidebar />
      </div>
      <div className="flex-grow">
        <div className="py-4">
            <Search />
        </div>

           {/* <ArticleReadPage /> */}
        <div className="flex-grow overflow-y-auto">
           <ArticlesCardList />
        </div>
      </div>
    </div>
     );
}
 
export default ArticlesPage;
