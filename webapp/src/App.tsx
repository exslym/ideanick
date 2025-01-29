import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { getAllIdeasRoute, getViewIdeaRoute, viewIdeaRouteParams } from './lib/routes';
import { TRPCProvider } from './lib/trpc';
import { AllIdeasPage } from './pages/AllIdeasPage';
import { ViewIdeaPage } from './pages/ViewIdeaPage';

export const App = () => {
  return (
    <TRPCProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getAllIdeasRoute()} element={<AllIdeasPage />} />
            <Route path={getViewIdeaRoute(viewIdeaRouteParams)} element={<ViewIdeaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TRPCProvider>
  );
};
