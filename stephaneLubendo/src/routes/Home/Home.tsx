import { useParams } from "react-router-dom"


export default function Home() {
  const params = useParams()

  return (
    <div>
        {params? JSON.stringify(params): "Home"}
    </div>
    )
}