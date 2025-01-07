import TodoApp from './components/TodoApp'

function App() {

  return (
    <>
    <header className='header section is-flex is-justify-content-center'>
      <div className='title is-1'>
        Todo App
      </div>
    </header>
    <main>
      <section className='section'>
        <div className='container is-flex is-justify-content-center'>
          <TodoApp></TodoApp>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
