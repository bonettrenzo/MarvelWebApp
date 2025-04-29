import { useState, useEffect } from "react"
import { Table, Input, Typography, Spin, message, Button } from "antd"
import { SearchOutlined, LogoutOutlined } from "@ant-design/icons"
import { Link, useNavigate } from "react-router-dom"
import "../styles/CharactersList.css"
import { fetchMarvelCharacters } from "../service/marvel.service"

const { Title } = Typography

const Dashboard = () => {
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchText, setSearchText] = useState("")
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  })

  const handleLogout = () => {
    localStorage.removeItem('token')
    message.success('Sesión cerrada exitosamente')
    navigate('/login')
  }

  const loadCharacters = async (page = 1, nameStartsWith = "") => {
    setLoading(true)
    try {
      const offset = (page - 1) * pagination.pageSize
      const response = await fetchMarvelCharacters(offset, pagination.pageSize, nameStartsWith)
      
      if(nameStartsWith){
        setCharacters(response.data.results.filter(character => character.name.toLowerCase().includes(nameStartsWith.toLowerCase())))
      }else{
        setCharacters(response.data.results)
      }
      
      setPagination({
        ...pagination,
        current: page,
        total: response.data.total,
      })
    } catch (error) {
      console.error("Error fetching characters:", error)
      message.error("Error al cargar los personajes de Marvel")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCharacters()
    
  }, [])

  const handleTableChange = (pagination) => {
    loadCharacters(pagination.current, searchText)
  }

  const handleSearch = (value) => {
    setSearchText(value)
    loadCharacters(1, value)
  }

  const columns = [
    {
      title: "Imagen",
      dataIndex: "thumbnail",
      key: "thumbnail",
      width: 100,
      render: (thumbnail) => (
        <img
          src={`${thumbnail.path}`}
          alt="Character"
          className="marvel-character-thumbnail"
        />
      ),
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Link to={`/character/${record.id}`} className="marvel-character-name-link">
          {text}
        </Link>
      ),
    },
    {
      title: "Descripción",
      dataIndex: "description",
      key: "description",
      render: (text) => text || "Sin descripción disponible",
    },
    {
      title: "Comics",
      dataIndex: "comics",
      key: "comics",
      render: (comics) => comics.available,
    },
    {
      title: "Series",
      dataIndex: "series",
      key: "series",
      render: (series) => series.available,
    },
  ]

  return (
    <div className="marvel-characters-list-container">
      <div className="marvel-characters-list-header">
        <Title level={2} className="marvel-characters-title">
          Personajes de Marvel
        </Title>
        <div className="marvel-characters-actions">
          <Input
            placeholder="Buscar personaje"
            prefix={<SearchOutlined />}
            onChange={(e) => handleSearch(e.target.value)}
            className="marvel-characters-search-input"
            allowClear
          />
          <Button 
            type="primary" 
            danger 
            icon={<LogoutOutlined />} 
            onClick={handleLogout}
            className="marvel-logout-button"
          >
            Cerrar Sesión
          </Button>
        </div>
      </div>

      <Spin spinning={loading} tip="Cargando personajes...">
        <Table
          dataSource={characters}
          columns={columns}
          rowKey="id"
          pagination={pagination}
          onChange={handleTableChange}
          className="marvel-characters-table"
        />
      </Spin>
    </div>
  )
}

export default Dashboard
