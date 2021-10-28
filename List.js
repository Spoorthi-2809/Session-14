import styles from "./list.module.css";

function List({ stories, handleDeleteItem }) {
    return (
        <div>
            <ol>
            {stories.map(function(items, index)
            {
                return(
                    <>
                    <li key={index}>
                        <span className={item}>
                            <a href={items.url}>{items.title}</a>
                        </span>
                        <span className={item}>{items.author}</span>
                        <span className={item}>{items.num_Comment}</span>
                        <span className={item}>{items.points}</span>
                        <span>
                            <button 
                                className={styles.button}
                                onClick={() => handleDeleteItem(items)}
                            >
                                Delete
                            </button>
                        </span>
                    </li>
                    <hr/>
                    </>
                )
            }
            )
            }</ol>
        </div>
    );
}

export default List;