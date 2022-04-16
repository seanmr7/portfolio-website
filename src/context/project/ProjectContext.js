import { createContext, useReducer } from 'react'
import projectReducer from './ProjectReducer'

const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
  const initialState = {
    repos: [],
    reposToDisplay: [],
    loading: true,
  }
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

  const demosList = [
    'blog',
    'book-library',
    'fakebook',
    'flickr-api-project',
    'flight_booker',
    'GitHub-User-Finder',
    'Loan-calculator',
    'mailchimp-signup-form',
    'members_only_project',
    'movie-list',
    'NYT-Article-Page',
    'portfolio-website',
    'Recipe_Website',
    'restaurant-page',
    'task-list',
    'tic-tac-toe_JS',
    'trakCal',
    'Weather-App',
    'youtube_video_page',
    'otp-login',
    'trakCal-FullStack',
  ]

  const [state, dispatch] = useReducer(projectReducer, initialState)

  // Get repos from my github
  const getRepos = async () => {
    const response = await fetch(
      'https://api.github.com/users/seanmr7/repos?sort=pushed&per_page=100',
      {
        method: 'GET',
        headers: new Headers({
          Authorization: `token ${GITHUB_TOKEN}`,
        }),
      }
    )

    const data = await response.json()

    // Add filepath for live projects with urls
    const dataWithImageUrl = data.map((repo) => {
      if (demosList.includes(repo.name)) {
        repo.imageUrl = `${repo.name}.png`
      } else {
        repo.imageUrl = 'placeholder.jpeg'
      }
      return repo
    })

    dispatch({
      type: 'GET_REPOS',
      payload: dataWithImageUrl,
    })
  }

  return (
    <ProjectContext.Provider
      value={{
        repos: state.repos,
        loading: state.loading,
        getRepos,
      }}>
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContext
