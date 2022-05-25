import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: '/clients/[id]/[clientprojectId]',
      query: { id: 'max', clientprojectId: 'projects' }
    })
  }
  return (
    <div>
      <h1>Client Projects Page </h1>
      <button onClick={loadProjectHandler}> Click me</button>
    </div>
  )
}

export default ClientProjectsPage;