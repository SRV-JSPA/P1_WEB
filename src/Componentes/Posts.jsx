import React from 'react';
import Post from './Post';
import PropTypes from "prop-types";

function Posts({ post }) {
    return (
      <section className="posts">
        { post.length > 0 ? <div className="contenedor contenedor-posts">
          {post.map(
            ({ id, title, content, created_at, car_name, company }) => (
              <Post
                key={id}
                id={id}
                title={title}
                content={content}
                created_at={created_at}
                car_name={car_name}
                company={company}
              />
            )
          )}
        </div> : <h2 className='centro' >No se encontraron publicaciones</h2>}
      </section>
    );
}

Posts.propTypes = {
    post: PropTypes.array.isRequired,
};

export default Posts