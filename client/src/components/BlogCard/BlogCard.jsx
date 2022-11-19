import './BlogCard.css';

const BlogCard = ({recipe}) => {
 return (
    <article className='blog-card'>
        <h2 className='blog-card__h2'>{recipe.category}</h2>
        <p className='blog-card__p'>{recipe.instructions}</p>
    </article>
 )
};

export default BlogCard