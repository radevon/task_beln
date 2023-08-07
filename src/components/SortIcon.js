function SortIcon({sortType}){
    return  (
        <span>
             <i className="material-icons  green-text text-darken-4">{sortType===1?"arrow_upward":"arrow_downward"}</i>
        </span>
        )
}
export default SortIcon;