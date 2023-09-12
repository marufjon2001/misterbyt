import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import navbar from "../assets/Navbar/Navbar.svg"
import MenuIcon from '@mui/icons-material/Menu';
import { Select, Space } from 'antd';

function NavScrollExample() {
// ctrl alt t menu 
  return (
    <Navbar expand="lg" className='px-[6.94vw] py-[1.38vw] bg-late-700'>
      <Container fluid>
        <Navbar.Brand className='cursor-pointer w-[8.33vw] h-[2.43vw] flex items-center'>
            <img src={navbar} alt="" />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         <div className='pl-[2.56vw] flex items-center gap-[6.28vw]'>
           <div className='flex gap-[2.77vw]'>
            <h4 className='flex gap-[10px]'><MenuIcon className='text-cyan-500 w-[2.77vw] h-[2.77vw]'/> Цены на услуги</h4>
            <h4>О компании</h4>
            <h4>Отзывы</h4>
            <h4>Контакты</h4>
           </div>
           <div className='flex items-center gap-[1vw]'>
           <Space  style={{boxShadow: 'none',color: 'blue'}}>
    <Select
      defaultValue="Moсква и Подмосковье"
      style={{
        width: 200,
      }}
      bordered={false}
      options={[
        {
          value: 'Moсква и Подмосковье',
          label: 'Moсква и Подмосковье',
        },
        {
          value: 'Moсква',
          label: 'Moсква',
        },
        {
          value: 'Санкт-Петербург',
          label: 'Санкт-Петербург',
        },
      ]}
    />
           </Space>
          <h1 className=''>8 (495) <span className="text-bg"> 106-52-16</span></h1>
           </div>
         </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;