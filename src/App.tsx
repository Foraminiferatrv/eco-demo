import Content from './containers/Layout/Content'
import Header from './containers/Layout/Header'

function App() {
  return (
    <div className="">
      <Header />
      <Content />
      <div className="absolute left-0 top-0 -z-10   bg-leaves-1 bg-no-repeat bg-cover h-full w-full" ></div>
    </div>
  )
}

export default App