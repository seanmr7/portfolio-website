import { createContext, useReducer } from "react";
import projectReducer from './ProjectReducer'

const ProjectContext = createContext()

export const ProjectProvider = ({children}) => {
  const initialState = {
    repos: [],
    loading: true,
  }
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
  
  const demosList = [
    'Loan-calculator',
    'movie-list',
  ]

  const [state, dispatch] = useReducer(projectReducer, initialState)

  // Get repos from my github
  const getRepos = async () => {
    const response = await fetch('https://api.github.com/users/seanmr7/repos?sort=pushed&per_page=100', {
      headers: {
        Authorization: `token: ${GITHUB_TOKEN}`
      }
    })

    const data = await response.json()

    // Add filepath for live projects with urls
    const dataWithImageUrl = data.map((repo) => {
      if(demosList.includes(repo.name)) {
        repo.imageUrl = `${repo.name}.png`
      } else {
        repo.imageUrl = 'placeholder.png'
      }
      return repo
    })

    dispatch({
      type: 'GET_REPOS',
      payload: dataWithImageUrl,
    })
  }

  return <ProjectContext.Provider value={{
    repos: state.repos,
    loading: state.loading,
    getRepos,
  }}>
    {children}
  </ProjectContext.Provider>
}

export default ProjectContext