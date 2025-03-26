import { BrowserRouter, Routes, Route } from 'react-router';

import './App.css';
import Layout from './Layout';

import { loadGithubUserData } from './utils/api-loaders';

import {
  Home,
  About,
  Contact,
  Github,
  User,
  ErrorPage,
} from './components/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="github"
            element={<Github />}
            loader={loadGithubUserData}
          />
          <Route path="user/" element={<User />}>
            <Route path=":userid" element={<User />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
