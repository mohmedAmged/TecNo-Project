import { Button } from "react-bootstrap";
import './PaginationButton.css'

export default function PaginationButton({text, setCurrPage, currPage}) {
  return (
    <Button className={`pagination__button ${currPage == text ? "pink" : "normal"}`} onClick={() =>{
        scrollTo({top: 460})
        setCurrPage(+text)
      }}>
      {text}
    </Button>
  )
}