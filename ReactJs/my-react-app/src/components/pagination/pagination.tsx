import { useEffect, useState } from 'react';
import './pagination.css';


const ProductCard = ({product}) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.title}</p>
    </div>
  );
}

const pageSize = 10;
const Pagination = () => {
  const [ products, setProducts ] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const start = currentPage * pageSize;
  const end = start + pageSize;

  const getData = async () => {
    try {
    const res = await fetch("https://dummyjson.com/products?limit=500");
    const data = await res.json();
    setProducts(data.products);
    setNumberOfPages(Math.ceil(data.products.length / pageSize));
  } catch(error) {
    console.error("Error fetching products:", error);
  }
}

  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };
    fetchData();
  }, [])

  const onClickPage = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
    getData();
  }
  const onClickPrev = () => {
    setCurrentPage((prev) => prev - 1);
    getData();
  }

   const onClickNext = () => {
    setCurrentPage((prev) => prev + 1);
    getData();
  }

  return (
    <>
    <section className="pagination-problem">
      {products.length > 0 ? (
        products.slice(start, end).map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })
      ) : (
        <p>No products found.</p>
      )}
    </section>
    <div>
      <button className="page-button" onClick={onClickPrev} disabled={currentPage === 1}>prev</button>
    {Array.from({length: numberOfPages} , (_, i) => {
      return <button key={i} onClick={() => onClickPage(i)} className="page-button" style={{background: currentPage === i + 1 ? 'red' : 'transparent'}}>{i + 1}</button>;
    })}
    </div>
      <button className="page-button" onClick={onClickNext} disabled={currentPage === numberOfPages}>next</button>

    </>
  );
};

export default Pagination;
