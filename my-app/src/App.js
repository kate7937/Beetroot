import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Contacts from "./components/Contacts/Contacts";
import Movies from "./components/Movies/Movies";
import SingleMovie from "./components/SingleMovie/SingleMovie";
import Ownlist from "./components/Ownlist/Ownlist";
import PageNotFound from "./components/PageNotFound/PageNotFound";
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
