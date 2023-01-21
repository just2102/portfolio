import Repo from "./Repo"

export type RepoType = {
    id:number,
    live:string,
    github:string,
    img:string,
    name:string,
    desc:string,
}
interface PortfolioProps {
    repos: RepoType[]
}

const Portfolio = (props:PortfolioProps) => {
    let mappedRepos = props.repos.map(repo=>{
        return <Repo key={repo.id} {...repo}/>
    })

    return ( 
    <div className="portfolio_container">
        {mappedRepos}
    </div> );
}
 
export default Portfolio;
