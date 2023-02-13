import ItemVideos from './ItemVideos'
import './Videos.css'
function Videos(){
return <>
 <section className="videos container">
        <h1>Videos</h1>
        <div className="content">
            <h3>Videos for related products</h3>
            <div className="carousel">
                <div className="buttons r-btn">
                    <i className="fas fa-angle-right"></i>
                </div>
                <div className="buttons l-btn">
                    <i className="fas fa-angle-left"></i>
                </div>
                <div className="items">
                    <ItemVideos title='Anime DBZ Goku Figure with Two Heads' publisher='YOUNAI' time='2:30' src='https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/2457aac2-8c9b-43bc-a60d-6af11e7d11e0/videopreview.jobtemplate.mp4.342X192P_20HZ_350KBPS_VER_1_0.mp4' />
                    <ItemVideos title='Anime DBZ Vegeta Action Figure Toy' publisher='AMZGKY' time='1:07' src='https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/f7ee4656-eaa3-44e6-a197-55c4a677aedd/videopreview.jobtemplate.mp4.342X192P_20HZ_350KBPS_VER_1_0.mp4' />
                    <ItemVideos title='DBZ Actions Figures GK Goku Gohan Figure Statues Figurine' publisher='KELAKE' time='1.50' src='https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-us-east-1-prod/4b142eaf-0282-48fb-b9af-87930cdfecec/videopreview.jobtemplate.mp4.342X192P_20HZ_350KBPS_VER_1_0.mp4' />
                </div>
            </div>
        </div>
        <button>Upload your video</button>
        <hr/>
    </section>
</>
}

export default Videos