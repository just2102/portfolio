import { RepoType } from "./PortfolioContainer"
import Repo from "./Repo"

interface PortfolioProps {
    repos: RepoType[]
}

const Portfolio = (props:PortfolioProps) => {
    const repos = props.repos;
    let mappedRepos = repos.map(repo=>{
        return <Repo key={repo.id} {...repo}/>
    })

    return ( 
    <div className="portfolio_container">
        {mappedRepos}
    </div> );
}
 
export default Portfolio;
