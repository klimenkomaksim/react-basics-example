const List = ({ arr }) => (
    /*
        If you run this code without change, you’ll be given a warning
        that a key should be provided for list items.
        A “key” is a special string attribute you need to include when creating lists of elements.

        Keys help React identify which items have changed, are added, or are removed.
        Keys should be given to the elements inside the array to give the elements a stable identity
    */
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
