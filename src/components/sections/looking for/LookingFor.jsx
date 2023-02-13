import './LookingFor.css'

function LookingFor(){
return <>
<section className="looking-for container">
    <h1>Looking for specific info?</h1>
   <div className="input-contianer">
    <input placeholder="Search in reviews, Q&A..." type="text"/>
    <i className="fas fa-search"></i>
   </div>
    <div className="text">
        Typical questions asked about products:
        <ul>
            <li>Is the item durable?</li>
            <li>Is this item easy to use?</li>
            <li>What are the dimensions of this item?</li>
        </ul>
    </div>
</section>
</>
}

export default LookingFor