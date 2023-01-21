import { RepoType } from './Portfolio'
import gitwhite from "../../img/github-mark-white.svg"
import livelinkwhite from "../../img/link-white.png"

const Repo = (repo:RepoType) => {
  return (
    <div className={'portfolio_project w-full rounded-t-lg'}>
      <div className="project_img">
        <img src={repo.img} alt=""/>
      </div>
      <h2 className="project_name">{repo.name}
        <div className='project_links'>
          <a href={repo.github}><img src={gitwhite} alt="" /></a>
          <a href={repo.live}><img src={livelinkwhite} alt="" /></a>
        </div>
      </h2>
      <p className="project_desc">{repo.desc}</p>

    </div>
  )
}

export default Repo