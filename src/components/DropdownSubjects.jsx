
import { Menu } from 'semantic-ui-react'

function DropdownSubjects({fetchBookScience, fetchBookFiction, fetchBookFantasy, fetchBookScienceFiction, fetchBookHistoricalFiction, fetchBookMilitaryFiction, fetchBookPoetry, fetchBookMath, fetchBookHumor, fetchBookHorror, fetchBookMystery}) {
  function onClickFetchBookScience() {
    fetchBookScience()
  }

  function onClickFetchBookFantasy() {
    fetchBookFantasy()
  }

  function onClickFetchBookScienceFiction() {
    fetchBookScienceFiction()
  }

  function onClickFetchBookHistoricalFiction() {
    fetchBookHistoricalFiction()
  }

  function onClickFetchBookMilitaryFiction() {
    fetchBookMilitaryFiction()
  }

  function onClickFetchBookFiction() {
    fetchBookFiction()
  }

  function onClickFetchBookMystery() {
    fetchBookMystery()
  }

  function onClickFetchBookHorror() {
    fetchBookHorror()
  }

  function onClickFetchBookHumor() {
    fetchBookHumor()
  }

  function onClickFetchBookMath() {
    fetchBookMath()
  }

  function onClickFetchBookPoetry() {
    fetchBookPoetry()
  }
  
      return (
        <div className="menu">
          <Menu className="menu">
            <Menu.Item className="menuItems" onClick={onClickFetchBookFiction} >
              Fiction
            </Menu.Item>
            <Menu.Item className="menuItems" onClick={onClickFetchBookFantasy} >
              Fantasy
            </Menu.Item>
            <Menu.Item className="menuItems" onClick={onClickFetchBookScienceFiction} >
              Science Fiction
            </Menu.Item>
            <Menu.Item className="menuItems" onClick={onClickFetchBookMystery} >
              Mystery
            </Menu.Item>
            <Menu.Item className="menuItems" onClick={onClickFetchBookHistoricalFiction} >
              Historial Fiction
            </Menu.Item>
            <Menu.Item className="menuItems" onClick={onClickFetchBookMilitaryFiction} >
              Military Fiction
            </Menu.Item>
            <Menu.Item className="menuItems" onClick={onClickFetchBookHorror} >
              Horror
            </Menu.Item>
            <Menu.Item className="menuItems" onClick={onClickFetchBookHumor} >
              Humor
            </Menu.Item>
            <Menu.Item className="menuItems" onClick={onClickFetchBookScience} >
              Science
            </Menu.Item>
            <Menu.Item className="menuItems" onClick={onClickFetchBookMath} >
              Math
            </Menu.Item>
            <Menu.Item className="menuItems" onClick={onClickFetchBookPoetry} >
              Poetry
            </Menu.Item>
          </Menu>
        </div>
      );
    }


export default DropdownSubjects;