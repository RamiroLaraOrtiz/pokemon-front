import {
  UserOutlined,
  VideoCameraOutlined,
  BellOutlined
} from '@ant-design/icons';
import { Avatar, Badge, Layout, Menu } from 'antd';
import { Routes,Route, Link, useNavigate} from "react-router-dom"
import Home from './pages/Home/Home';
import { Random } from './pages/Random';
import './App.css';
import  {PokemonDetails}  from './pages/PokemonDetails';
import {default as pokeLogo}  from "./assets/pokemonLogo.png";
import { Favorites } from './pages/Favorites';
import { ContanerBadge } from './styled-components/Home/ContanerBadge';

import { useDispatch, useSelector } from "react-redux";

const { Header, Content, Footer } = Layout;

function App(){
  const navigate = useNavigate()
  const {totalCount} = useSelector(state => state.favorite)
return (
  <Layout className="layout">
    <Header>
    <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        onClick={({key})=>{
          navigate(key)
        }}
        items={[
          {
            key: '/',
            icon: <UserOutlined />,
            label: 'Home',
          },
          {
            key: '/random',
            icon: <VideoCameraOutlined />,
            label: 'Random',
          }
        ]}
      >
      </Menu>
    </Header>
    <Content style={{ padding: '0', height:'100'}}>
    <ContanerBadge>
				<Link to={'/favorites'}>
					<Badge count={totalCount}>
					<BellOutlined  style={{ fontSize: "34px",
color: "#9ba3ab"}}/>
					</Badge>
				</Link>
			</ContanerBadge>
      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route  path="/pokemon/:pokemonId" element={<PokemonDetails/>}  />
              <Route path="/random" element={<Random/>}/>
              <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </Content>
  </Layout>
);}

export default App;