import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import LeftBar from "./components/common/LeftBar";
import ProtectedRoute from "./components/common/protectedRoute";
import Article from "./components/page/Article";
import Blog from "./components/page/Blog";
import Catalog from "./components/page/Catalog";
import Category from "./components/page/Category";
import Download from "./components/page/Download";
import Downloadpj from "./components/page/Downloadpj";
import Login from "./components/page/Login";
import Main from "./components/page/Main";
import MenuPage from "./components/page/MenuPage";
import Project from "./components/page/Project";
import Registration from "./components/page/Registration";
import RulePanel from "./components/page/RulePanel";
import AppLoader from "./components/ui/hoc/appLoader";

function App() {
  return (
    <div className="main">
      <AppLoader>
        <Header />
        <div className="middle">
          <LeftBar />
          <div id="content">
            <div id="base">
              <Switch>
                <Route path="/downloadpj/:id" component={Downloadpj} />
                <Route path="/download/:id" component={Download} />
                <Route path="/download" component={Download} />
                <Route path="/project/:id" component={Project} />
                <Route path="/mpage/:name" component={MenuPage} />
                <Route path="/mpage" component={MenuPage} />
                <Route path="/article/:id" component={Article} />
                <Route path="/article" component={Article} />
                <Route path="/category/:name" component={Category} />
                <Route path="/category" component={Category} />
                <Route path="/catalog/:name" component={Catalog} />
                <Route path="/catalog" component={Catalog} />
                <Route path="/blog" component={Blog} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Registration} />
                <ProtectedRoute path="/rulepanel/:item" component={RulePanel} />
                <ProtectedRoute path="/rulepanel" component={RulePanel} />
                <Route path="/" component={Main} />
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </AppLoader>
    </div>
  );
}

export default App;
