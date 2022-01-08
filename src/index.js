import React from 'react';
import reactDom from 'react-dom';
import './index.css';


function BookList () {
    // always return something (a single element (eg everthing in section or div element))
return (
    <section className = "booklist">
       <Book/>
       <Book/>
       </section>
);
};
const Book = () => {
    return (
          <article>
             <Image/>
             <Title/>
             <Author/>
        </article>
        );
};
const Image  = () => 
<img src="https://m.media-amazon.com/images/I/91DNhLLmUOL._AC_UY218_.jpg" alt="" />
const Title = () =>
    <h3>Atlas of the Heart
    </h3>

const Author = () => 
    <h5>Brené Brown</h5>

// from reactDom to help render what i code to root div in index.html
reactDom.render(<BookList />,document.getElementById('root'))