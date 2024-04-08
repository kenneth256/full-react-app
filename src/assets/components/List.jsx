function List({item}) {
    return <li>Learn {item}</li>;
}
List.propTypes = {
    item: propTypes.string.isRequired,
}

export default List;