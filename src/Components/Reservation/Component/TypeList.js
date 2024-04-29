const TypeList=(()=>{

   let typeList=[{img:"/Images/logo.png",title:"TYPE"},
                     {img:"/Images/logo.png",title:"TYPE"},
                     {img:"/Images/logo.png",title:"TYPE"},
                     {img:"/Images/logo.png",title:"TYPE"},
                     {img:"/Images/logo.png",title:"TYPE"}]
   const typeLister=typeList.map((e)=>{
      return(<Type img={e.img} title={e.title}/>)
   })
   return(
       <div className="row mt-5 container-fluid">
      {typeLister}
   </div>);
})
const Type=(({img,title})=>{
   return(
       <div className="col-1 ">
          <img  style={{width: 2 + 'em', height: 2+ 'em'}}  src={img} alt="..."/>
          <p>{title}</p>
       </div>
   );
})
export default TypeList;