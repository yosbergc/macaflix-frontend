function YouTubeEmbed({ embedId }) {
    function handleMove(event) {
        event.preventDefault()
        
    }
    return (
        <div className="video-responsive">
            <iframe width="100%" height="315" src={`http://www.youtube.com/embed/${embedId}?autoplay=1&controls=0&modestbranding=1`} title="YouTube video player" frameborder="0" allow="autoplay" referrerpolicy="strict-origin-when-cross-origin" onMouseMove={handleMove}></iframe>
        </div>
    )
}
export { YouTubeEmbed }