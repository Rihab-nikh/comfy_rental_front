const TypeList=(()=>{

   let typeList=[
    {idT:"House",img:"/Icon/HOUSE.png",title:"House"},
    {idT:"Villa",img:"/Icon/VILLA.png",title:"Villa"},
    {idT:"Appartement",img:"/Icon/APPARTEMENT.png",title:"Appar."},
    {idT:"Room",img:"/Icon/ROOM.png",title:"Room"}]
   const typeLister=typeList.map((e)=>{
      return(<Type idT={e.idT} img={e.img} title={e.title}/>)
   })
   return(
       <div className="row mt-5 container-fluid">
      {typeLister}
   </div>);
})
const Type=(({idT,img,title})=>{
   return(
       <a href={`/${idT}`} className="col-1 text-decoration-none text-black text-center ">
          <img  style={{width: 2 + 'em', height: 2+ 'em'}}  src={img} alt="..."/>
          <p >{title}</p>
       </a>
   );
})
export default TypeList;