import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AppLayout } from "./layout/AppLayout";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";
import { ExperienceDetailsPage } from "./pages/ExperienceDetailPage";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/projects/:slug' element={<ProjectDetailsPage />} />
        <Route path='/experience' element={<ExperiencePage />} />
        <Route path='/experience/:slug' element={<ExperienceDetailsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
