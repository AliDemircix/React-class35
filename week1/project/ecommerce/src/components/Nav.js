const Nav = ({ title }) => {
  return (
    <h1 className="nav-menu-title">
      {title ? title.substring(6) : 'Products'}
    </h1>
  );
};
export default Nav;
