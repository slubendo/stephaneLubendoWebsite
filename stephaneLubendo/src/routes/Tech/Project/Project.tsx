import { useParams } from "react-router-dom"

export default function Project() {

  const { projectName } = useParams();
  console.log("Rendering Project.tsx", projectName); // Debug log

    return (
    <div>
        {projectName? JSON.stringify(projectName): "Home"}
    </div>    
    )
}