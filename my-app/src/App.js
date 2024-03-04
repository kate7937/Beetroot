import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/page/Home/Home";
import Contacts from "./components/page/Contacts/Contacts";
import Movies from "./components/page/Movies/Movies";
import SingleMovie from "./components/page/SingleMovie/SingleMovie";
import Ownlist from "./components/page/Ownlist/Ownlist";
import PageNotFound from "./components/page/PageNotFound/PageNotFound";
import 'reset-css';
import './style.scss';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
          <Route path="/ownlist" element={<Ownlist />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<PageNotFound/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
