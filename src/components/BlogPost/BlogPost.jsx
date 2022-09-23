import React, { useState } from 'react';
import './BlogPost.css';

/**
 * BlogPost Component
 * @param {post:BlogPostModel} props 
 * @returns 
 */

function BlogPost(props) {
  const [count, setCount] = useState(0);
  const [post, setPost] = useState(props.post);

  const handleIncrement = () => {
    setCount(count +1)
  }

  const checkboxChangeBack = (event) => {
    const novoValorExibirImagem = !post.exibirImagem;
    setPost({ ...post, exibirImagem: novoValorExibirImagem });
  }

  let imgTag = <div></div>;
  if (post.exibirImagem) {
    imgTag = <img src={post.imagem} alt={post.titulo} />
  }

  return (
    <article className="blogPost">
      <h2>{post.titulo}</h2>
      <div>
        <input 
          type="checkbox"
          defaultChecked={post.exibirImagem}
          onChange={checkboxChangeBack}
        />{' '}
        Exibir imagem?
      </div>
      {imgTag}
      <p>{post.texto}</p>

      <button className='share' onClick={handleIncrement}> Share </button>
      <h5> {count} </h5>
    </article>
  )
}

export default BlogPost;