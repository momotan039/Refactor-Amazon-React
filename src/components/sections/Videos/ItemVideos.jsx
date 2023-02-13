function ItemVideos(props) {
    return <>
        <div className="video">
            <i className="far fa-play-circle play-icon"></i>
            <span className="time">{props.time}</span>
            <video
                src={props.src}></video>
            <div className="text">
                <h4>{props.title}</h4>
                <span>{props.publisher}</span>
            </div>
        </div>
    </>
}

export default ItemVideos