import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
      <h1 className='bg-green-400'>Tailwind test</h1>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-4">
        <img className="w-24 h-24 md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/29879483/pexels-photo-29879483/free-photo-of-festive-christmas-ornament-on-pine-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I have seen scale
              on large teams. Its easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
      <h1 className="flex flex-wrap justify-center gap-4 m-4">
        <Card />
        <h1>II</h1>
        <Card username="oom"/>
        <h1>II</h1>
        <Card username="logo"/>
        <h1>II</h1>
        <Card blo="bloin"/>
      </h1>
    </>
  )
}

export default App
