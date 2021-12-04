
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
          <Menu>
            <Menu.Item onClick={onClickFetchBookFiction} >
              Fiction
            </Menu.Item>
            <Menu.Item onClick={onClickFetchBookFantasy} >
              Fantasy
            </Menu.Item>
            <Menu.Item onClick={onClickFetchBookScienceFiction} >
              Science Fiction
            </Menu.Item>
            <Menu.Item onClick={onClickFetchBookMystery} >
              Mystery
            </Menu.Item>
            <Menu.Item onClick={onClickFetchBookHistoricalFiction} >
              Historial Fiction
            </Menu.Item>
            <Menu.Item onClick={onClickFetchBookMilitaryFiction} >
              Military Fiction
            </Menu.Item>
            <Menu.Item onClick={onClickFetchBookHorror} >
              Horror
            </Menu.Item>
            <Menu.Item onClick={onClickFetchBookHumor} >
              Humor
            </Menu.Item>
            <Menu.Item onClick={onClickFetchBookScience} >
              Science
            </Menu.Item>
            <Menu.Item onClick={onClickFetchBookMath} >
              Math
            </Menu.Item>
            <Menu.Item onClick={onClickFetchBookPoetry} >
              Poetry
            </Menu.Item>
          </Menu>
        </div>
      );
    }


export default DropdownSubjects;