import NavBar from "./NavBar"

type PropsType = {
  setViewCategory: React.Dispatch<React.SetStateAction<boolean>>
  isCategory: string
  setIsCategory: React.Dispatch<React.SetStateAction<string>>
}
const Header = ({setViewCategory, isCategory, setIsCategory}: PropsType) => {
  return (
    <>
      <header className="mainHeader">
        <div className="headerTop">
            <h1 className="headerTitle">Dummy shop</h1>
            <div className="signInBox">
              <button>sign In</button>
            </div>
        </div>
        <NavBar setViewCategory={setViewCategory} isCategory={isCategory} setIsCategory={setIsCategory}/>
      </header>
    </>
  )
}

export default Header
