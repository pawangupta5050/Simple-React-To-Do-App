import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectsSideBar from './components/ProjectsSideBar.jsx'
import NewProject from './components/NewProject.jsx'
import NoProjectSelected from './components/NoProjectSelected.jsx'
import SelectedProject from './components/SelectedProject.jsx'

function App() {

  const [projectState, setProjectState] = useState({
    projectStatus: undefined,
    projects: [],
    tasks: [],
  })

  const handleAddTask = (task) => {
    const newTasks = {
      task : task,
      projectId: projectState.projectStatus,
      id: Math.random()
    }
    setProjectState(prevState => {
      return {
       ...prevState,
      //  projectStatus: undefined,
       tasks: [...projectState.tasks, newTasks],
      }
   })
  }

  const handleDeleteTask = (id) => {
    setProjectState(prevState => {
      return {
       ...prevState,
      //  projectStatus: undefined,
       tasks: prevState.tasks.filter(task => task.id != id),
      }
   })    
  }

  const handleAddProject = () => {
    setProjectState(prevState => {
       return {
        ...prevState,
        projectStatus : null,
       }
    })
  }

  const handleProjectSelected = (id) => {
    setProjectState(prevState => {
      return {
       ...prevState,
       projectStatus : id,
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

  const deleteHandler = () => {
    setProjectState(prevState => {
      return {
       ...prevState,
       projectStatus: undefined,
       projects: prevState.projects.filter(project => project.id != prevState.projectStatus),
      }
   })    
  }

  console.log(projectState)

  const selectedProjectByID = projectState.projects.find(project => project.id === projectState.projectStatus)

  let content = <SelectedProject project={selectedProjectByID} onDelete={deleteHandler} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} getTasks={projectState.tasks}  />;

  if (projectState.projectStatus === undefined) {
    content = <NoProjectSelected addProjectHandler={handleAddProject} />;
  } else if (projectState.projectStatus == null) {
    content = <NewProject onAdd={getProjectDetails} onCancel={cancelHandler} />;
  }  

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSideBar addProjectHandler={handleAddProject} projectList={projectState.projects} onSelectProject={handleProjectSelected} selectedProjectByID={projectState.projectStatus}  />
      {content}      
    </main>
  )
}

export default App
