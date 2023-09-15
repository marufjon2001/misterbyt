import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import navbar from "../assets/Navbar/Navbar.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { Select, Space } from "antd";
import Button from "../Navbar/button"

function NavScrollExample() {
  // ctrl alt t menu
  return (
    <Navbar expand="lg" className="px-[6.94vw] py-[1.38vw]">
      <Container fluid>
        <Navbar.Brand className="cursor-pointer w-[8.33vw] h-[2.43vw] flex items-center">
          <img className="w-[8.33vw] h-[2.43vw]" src={navbar} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="pl-[2.56vw] flex items-center gap-[4.28vw] md:flex-col">
            <div className="flex gap-[2.77vw] items-center md:flex-col">
              <h4 className="flex gap-[10px] text-black text-Proxima text-[1.25vw] font-[500] items-center cursor-pointer">
                <MenuIcon className="text-cyan-500 w-[2.77vw] h-[2.77vw]" />{" "}
                Цены на услуги
              </h4>
              <h4 className="text-black text-Proxima text-[1.25vw] font-[500] cursor-pointer">
                О компании
              </h4>
              <h4 className="text-black text-Proxima text-[1.25vw] font-[500] cursor-pointer">
                Отзывы
              </h4>
              <h4 className="text-black text-Proxima text-[1.25vw] font-[500] cursor-pointer">
                Контакты
              </h4>
            </div>
            <div className="flex items-center gap-[1vw] md:flex-col cursor-pointer">
              <Button/>
              <h1 className="text-black text-[1.94vw] font-[700] cursor-pointer">
                8 (495){" "}
                <span className="text-nav text-[1.94vw] font-[700]">
                  {" "}
                  106-52-16
                </span>
              </h1>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
