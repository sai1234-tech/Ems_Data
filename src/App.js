import Layout1 from './Components/Layout1'
// import Chat from './Components/Chat'
import DATA from './Components/data';
function App() {
  const {dataList} = DATA
  return (
    <div className="App">
      {/* <Layout1/> */}
     <Layout1 dataList={dataList}/>
     {/* <Chat/> */}
    </div>
  );
}

export default App;
