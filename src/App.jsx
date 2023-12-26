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

  let content;

  if(projectState.projectStatus == undefined) {
    content = <NoProjectSelected addProjectHandler={handleAddProject} />
  }else if(projectState.projectStatus == null) {
    content = <NewProject />
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSideBar addProjectHandler={handleAddProject} />
      {content}      
    </main>
  )
}

export default App
