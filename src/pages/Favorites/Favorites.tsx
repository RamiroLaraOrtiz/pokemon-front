import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CardBadgeType } from '../../styled-components/Card/CardBadgeType';
import { Type,Sprites } from "../../models/Pokemon";
import { removePokemonFromFavorite } from '../../reducers/favoriteSlice';
interface DataType {
  id: number;
  name: string;
  base_experience: string;
  sprites: Sprites;
  types: Type[];
}




function Favorites () {
  const navigate = useNavigate()
  const {pokemonsList} = useSelector(state => state.favorite)

  const dispatch = useDispatch()
  const removePokemon = (pokemonId:number)=>{ dispatch(removePokemonFromFavorite(pokemonId))}
  const columns: ColumnsType<DataType> = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width:'1%'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Sprite',
      key: 'sprite',
      dataIndex: 'sprite',
      render: (_,{ sprites }) => (
        <Space size="middle">
          <img src={sprites.front_default} alt={sprites.front_default}  />
          </Space>
      ),
    },
    {
      title: 'Base Experience',
      dataIndex: 'base_experience',
      key: 'base_experience',
    },
    {
      title: 'types',
      key: 'types',
      dataIndex: 'types',
      render: (_, { types }) => (
        <>
          {types.map((type,index) => {
              return (
                <Space size="large">
                <CardBadgeType type={type.type.name} key={index*4}> {type.type.name}</CardBadgeType>
                </Space>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: ({ id }) => (
        <Space size="middle">
          <button  onClick={()=>removePokemon(id)}>Remove Pokemon</button>
          </Space>
      ),
    },
  ];
	return(<Table columns={columns} dataSource={pokemonsList} />)
}

export default Favorites;
