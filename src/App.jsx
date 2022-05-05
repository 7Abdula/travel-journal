import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"


function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.key}
        {...item}
      />
    )
  })

  return (
    <div className="md:h-screen flex justify-center items-center bg-slate-100">
      <div className="w-full md:w-[550px] font-inter bg-white">
        <Header />
        <section className="px-[40px] py-7">
          {cards}
        </section>
      </div>
    </div>
  )
}

export default App
