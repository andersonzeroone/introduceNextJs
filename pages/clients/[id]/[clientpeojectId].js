import { useRouter } from 'next/router'

function SelectedClientProject() {


  const router = useRouter();

  console.log(router.pathname);

  console.log(router.query);

  return (
    <div>
      <h1>The project page for a specific project for a selected cliente</h1>
    </div>
  )
}

export default SelectedClientProject;