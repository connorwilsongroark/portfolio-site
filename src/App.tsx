import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AppLayout } from "./layout/AppLayout";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";
import { ExperienceDetailsPage } from "./pages/ExperienceDetailPage";
import { CareerPage } from "./pages/CareerPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/career' element={<CareerPage />} />
          <Route path='/career/:slug' element={<ExperienceDetailsPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/:slug' element={<ProjectDetailsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
