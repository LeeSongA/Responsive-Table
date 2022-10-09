import GridTable from "../components/organisms/GridTable";
import CheckableGridTable from "../components/organisms/CheckableGridTable";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1>Table</h1>
      <GridTable />
      <h1>CheckableTable</h1>
      <CheckableGridTable />
    </>
  ) 
}

export default MyApp
