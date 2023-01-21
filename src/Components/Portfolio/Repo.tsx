import { RepoType } from './Portfolio'


const Repo = (repo:RepoType) => {
  return (
    <div className={'portfolio_project w-full border-2 rounded-t-lg'}>
      <div className="project_img"><img src={repo.img} alt=""/></div>
      <h2 className="project_name">{repo.name}</h2>
      <p className="project_desc">{repo.desc}</p>

    </div>
  )
}

export default Repo