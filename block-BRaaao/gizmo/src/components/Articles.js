import data from "../data.json";

function Articles() {
  return (
    <>
      <h2>Articles</h2>
      <div className="article-container">
        {data.map((article) => (
          <Article {...article} key={article.publishedAt} />
        ))}
      </div>
    </>
  );
}

function Article(props) {
  return (
    <div className="wrapper">
      <img src={props.urlToImage} alt={props.title} width="200" />
      <h3>{props.author}</h3>
      <p>{props.title}</p>
    </div>
  );
}
export default Articles;