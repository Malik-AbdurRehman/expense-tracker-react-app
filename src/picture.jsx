const Picture=()=>{
    const imageHandler=(e)=>{e.target.style.display="none";}
    return(<img src="img.png" onClick={(e)=>imageHandler(e)}></img>);
}
export default Picture;