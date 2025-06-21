import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Typography, Spin, Tabs, List, Card, Button, Divider, Tag, Empty } from "antd"
import { ArrowLeftOutlined, BookOutlined, VideoCameraOutlined, GlobalOutlined } from "@ant-design/icons"
import { fetchMarvelCharacter } from "../service/marvel.service"
import "../styles/CharacterDetail.css"

const { Title, Paragraph, Text } = Typography
const { TabPane } = Tabs

const CharacterDetail = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCharacter = async () => {
      setLoading(true)
      try {
        const response = await fetchMarvelCharacter(id)
        setCharacter(response.data.results.find((character) => character.id == id))
      } catch (error) {
        console.error("Error fetching character:", error)
      } finally {
        setLoading(false)
      }
    }

    loadCharacter()
  }, [id])

  if (loading) {
    return (
      <div className="marvel-character-detail-loading">
        <Spin size="large" tip="Cargando información del personaje..." />
      </div>
    )
  }

  if (!character) {
    return (
      <div className="marvel-character-detail-error">
        <Empty description="No se pudo encontrar el personaje" image={Empty.PRESENTED_IMAGE_SIMPLE} />
        <Link to="/">
          <Button type="primary" icon={<ArrowLeftOutlined />}>
            Volver a la lista
          </Button>
        </Link>
      </div>
    )
  }

  const imageUrl = `${character.thumbnail.path/standard_medium.${character.thumbnail.extension}}`


  return (
    <div className="marvel-character-detail-container">
      <div className="marvel-character-detail-header">
        <Link to="/">
          <Button type="primary" icon={<ArrowLeftOutlined />} className="marvel-character-back-button">
            Volver a la lista
          </Button>
        </Link>
      </div>

      <div className="marvel-character-detail-content">
        <div className="marvel-character-detail-image">
          <img src={imageUrl} alt={character.name} />
        </div>

        <div className="marvel-character-detail-info">
          <Title level={2} className="marvel-character-detail-title">
            {character.name}
          </Title>

          <Divider />

          <div className="marvel-character-detail-description">
            <Title level={4}>Descripción</Title>
            <Paragraph>{character.description || "No hay descripción disponible para este personaje."}</Paragraph>
          </div>

          <div className="marvel-character-detail-stats">
            <Tag color="red" icon={<BookOutlined />}>
              {character.comics.available} Comics
            </Tag>
            <Tag color="blue" icon={<VideoCameraOutlined />}>
              {character.series.available} Series
            </Tag>
            <Tag color="green" icon={<GlobalOutlined />}>
              {character.stories.available} Historias
            </Tag>
          </div>

          <Divider />

          <Tabs defaultActiveKey="1">
            <TabPane tab="Comics" key="1">
              <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
                dataSource={character.comics.items.slice(0, 8)}
                locale={{ emptyText: "No hay comics disponibles" }}
                renderItem={(item) => (
                  <List.Item>
                    <Card size="small" title={item.name}>
                      <Text type="secondary">Comic</Text>
                    </Card>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Series" key="2">
              <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
                dataSource={character.series.items.slice(0, 8)}
                locale={{ emptyText: "No hay series disponibles" }}
                renderItem={(item) => (
                  <List.Item>
                    <Card size="small" title={item.name}>
                      <Text type="secondary">Serie</Text>
                    </Card>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Historias" key="3">
              <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
                dataSource={character.stories.items.slice(0, 8)}
                locale={{ emptyText: "No hay historias disponibles" }}
                renderItem={(item) => (
                  <List.Item>
                    <Card size="small" title={item.name}>
                      <Text type="secondary">{item.type}</Text>
                    </Card>
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail
