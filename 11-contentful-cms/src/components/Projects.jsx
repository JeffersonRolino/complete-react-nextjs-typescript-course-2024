import { useFetchProjects } from "../fetchProjects.jsx";

function Projects() {
  const { loading, projects } = useFetchProjects();
  console.log(loading, projects);

  return (
    <div>
      <h2>Projects</h2>
    </div>
  );
}

export default Projects;
