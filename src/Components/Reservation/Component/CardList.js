import Card from "./Card";
const CardList=(()=>{
    let images=["/Image.jpg","/Image.jpg","/Image.jpg","/Image.jpg"];
    let card=[{imageList:images,title:"HOUSE NAAADIA",price:"100DH"},
        {imageList:images,title:"HOUSE NAAADIA",price:"100DH"},
        {imageList:images,title:"HOUSE NAAADIA",price:"100DH"},
        {imageList:images,title:"HOUSE NAAADIA",price:"100DH"},
        {imageList:images,title:"HOUSE NAAADIA",price:"100DH"},
        {imageList:images,title:"HOUSE NAAADIA",price:"100DH"},
        {imageList:images,title:"HOUSE NAAADIA",price:"100DH"},
        {imageList:images,title:"HOUSE NAAADIA",price:"100DH"},
        {imageList:images,title:"HOUSE NAAADIA",price:"100DH"},
        {imageList:images,title:"HOUSE NAAADIA",price:"100DH"}
    ]
    const CardLister=card.map((e,index)=>{
        return <Card localId={index} imgList={e.imageList} title={e.title} price={e.price} DateStart={"29 April"} DateEnd={"5 juin"}/>
    })
    return(
        <div className="container d-flex mb-3 row mt-2">
            {CardLister}
        </div>
    )
});
export default CardList;