import Feed from  '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text_center">Discover & Share</h1>
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Promts</span>
        <p className="desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, culpa modi cum beatae sit laudantium perspiciatis autem minima ad dicta iste, nemo, quas architecto accusamus.
        </p>
        <Feed />
    </section>
  )
}

export default Home
