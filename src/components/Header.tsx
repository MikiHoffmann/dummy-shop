import NavBar from "./NavBar"

type PropsType = {
  category: Boolean
  setCategory: React.Dispatch<React.SetStateAction<Boolean>>
}
const Header = ({category, setCategory}: PropsType) => {
  return (
    <>
      <header>
        <div className="headerTitle">
            <h1>Dummy shop</h1>
        </div>
        <NavBar category={category} setCategory={setCategory} />
      </header>
    </>
  )
}

export default Header
