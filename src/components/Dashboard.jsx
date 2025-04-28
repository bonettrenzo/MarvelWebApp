import { useState, useEffect } from "react"
import { Table, Input, Typography, Spin, message } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import "../styles/CharactersList.css"
import { fetchMarvelCharacters } from "../service/marvel.service"

const { Title } = Typography

const Dashboard = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchText, setSearchText] = useState("")
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  })

  const loadCharacters = async (page = 1, nameStartsWith = "") => {
    setLoading(true)
    try {
      const offset = (page - 1) * pagination.pageSize
      const response = await fetchMarvelCharacters(offset, pagination.pageSize, nameStartsWith)

      setCharacters(response.data.results)
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
          src={`${thumbnail.path}/standard_medium.${thumbnail.extension}`}
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
        <Input
          placeholder="Buscar personaje"
          prefix={<SearchOutlined />}
          onChange={(e) => handleSearch(e.target.value)}
          className="marvel-characters-search-input"
          allowClear
        />
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
