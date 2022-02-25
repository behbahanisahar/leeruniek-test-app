import { Grid } from "@material-ui/core";
import Container from "features/container/container";
import { Sidebar } from "features/sidebar/sidebar";
import "./App.css";

function App() {
  return (
    <Grid container spacing={2}>
     
      <Grid item xs={3}>
        <Sidebar open={true}></Sidebar>
      </Grid>
      <Grid item xs={9}>
        <Container />
      </Grid>
    </Grid>
  );
}

export default App;
