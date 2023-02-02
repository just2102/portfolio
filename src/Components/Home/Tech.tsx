interface Props {
    tech: string
}


const Tech = ({tech}:Props) => {
  return (
    <div className="tech">
      <img src={tech} alt="" />
    </div>
  );
};

export default Tech;
