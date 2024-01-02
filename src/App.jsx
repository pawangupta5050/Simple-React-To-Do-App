import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectsSideBar from './components/ProjectsSideBar'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'

function App() {

  const [projectState, setProjectState] = useState({
    projectStatus: undefined,
    projects: [],
  })

  const handleAddProject = () => {
    setProjectState(prevState => {
       return {
        ...prevState,
        projectStatus : null,
       }
    })
  }

  const getProjectDetails = (projectData) => {
    const newProjectData = {
      ...projectData,
      id: Math.random()
    }
    setProjectState(prevState => {
      return {
       ...prevState,
       projectStatus: undefined,
       projects: [...projectState.projects, newProjectData],
      }
   })
  }

  const cancelHandler = () => {
    setProjectState(prevState => {
      return {
       ...prevState,
       projectStatus: undefined,
      }
   })
  }

  console.log(projectState)

  let content;

  if (projectState.projectStatus === undefined) {
    content = <NoProjectSelected addProjectHandler={handleAddProject} />;
  } else if (projectState.projectStatus == null) {
    content = <NewProject onAdd={getProjectDetails} onCancel={cancelHandler} />;
  }  

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSideBar addProjectHandler={handleAddProject} projectList={projectState.projects} />
      {content}      
    </main>
  )
}

export default App
