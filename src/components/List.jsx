const List = ({ arr }) => (
    <ul>
        {arr.map(
            ({ id, title }) => (
                // <li key={id}>
                <li>
                    {title}
                </li>
            )
        )}
    </ul>
);

export default List;
