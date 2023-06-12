type PropsType = {
  category: Boolean
  setCategory: React.Dispatch<React.SetStateAction<Boolean>>
}
const NavBar = ({category, setCategory}: PropsType) => {
  return (
    <div className="navBar">
        <ul>
            <li className="pageLink">
              <button value="men's clothing">men's clothing</button>
            </li>
            <li className="pageLink">
              <button value="jewelery">jewelery</button>
            </li>
            <li className="pageLink">
              <button value="electronics">electronics</button>
            </li>
        </ul>
    </div>
  )
}

export default NavBar