import Nav from './Nav';

function Title({ title }) {
  return (
    <div className="title-container">
      <h1 className="title-container-title">{title}</h1>
      <Nav />
    </div>
  );
}

export default Title;
