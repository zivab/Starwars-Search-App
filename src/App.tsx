import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryPage from './pages/category-page/CategoryPage';
import SearchPage from './pages/search-page/SearchPage';
import Layout from './components/Layout/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
