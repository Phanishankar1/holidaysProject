import {useNavigate} from "react-router-dom";
function Success()
{
    const a=useNavigate()
    function get()
    {
        alert("successfully submited")
        a("/success")
    }
   
    return(
        < div id="detail2">
        <div>
<h1 id="detail">Please enter your details to make your order fix</h1>
        </div>
        <form id="detail1">
          <b id="detail4">Name :</b><input type="text" id="detail3"/><br></br>
         <b id="detail4"> email:</b><input type="email"id="detail3"/><br></br>
         <b id="detail4"> Phoneno:</b><input type="tel"id="detail3"/><br></br>
         <b id="detail4"> Day:</b><input type="date"id="detail3"/><br></br>
         <b id="detail4">time:</b><input type="time"id="detail3"/><br></br>
         <b id="detail5"></b><input type="submit"id="detail5"onClick={get}/><br></br>
        </form>
        {/* <button onClick={get}>go back</button> */}
        </div>
    )
}
export default Success;