function Time()
{
    var date=new Date();
    var hour=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    var time=hour + ":" + min+ ":" +sec;

    var day=date.getDate()+ "/"+(date.getMonth()+1)+"/"+date.getFullYear();
    return(
      <div className="date-time">
        <p>The current time is: {day +" -- "+ time} </p>
      </div>
    )
}
export default Time;