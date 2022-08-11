import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Example001  from 'components/PageNotFound/Example001';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/components/pageNotFound/001' element={<Example001 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;