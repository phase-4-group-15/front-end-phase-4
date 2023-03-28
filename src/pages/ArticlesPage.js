import ArticlesCardList from "../components/ArticlesCardList";
import Sidebar from "../components/Sidebar";
import ArticleReadPage from "./ArticleReadPage";

const ArticlesPage = () => {
    return (
    <div>
      <h1 className="text-red-800">this is where the main artcles will go</h1>
      <Sidebar />
       <ArticleReadPage />
       <ArticlesCardList />
    </div>
     );
}
 
export default ArticlesPage;
