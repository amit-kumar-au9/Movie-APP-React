const ReviewData = (props) => {
    return(
        <div>
            <center>
                <img src={`https://image.tmdb.org/t/p/w500${props.data.profile_path}`} width="100" height="100" className="rounded-circle"/>
                <small>{props.data.name}</small>
            </center>
        </div>
    )
}
export default ReviewData