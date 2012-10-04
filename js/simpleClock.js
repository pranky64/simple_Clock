var pHours=[0,5],pMins=[2,4],pSecs=[1,0];
$(function() {
  setInterval(setNewTime, 1000);
});

function setNewTime()
{
   var timeNow=getDate(5.5);
   var hours=timeNow.getHours().toString().split("");
   var mins=timeNow.getMinutes().toString().split("");
   var secs=timeNow.getSeconds().toString().split("");
   checkSeconds(secs);
   checkMinutes(mins);
   checkHours(hours);    
}
function checkForChange(id,newValue,oldValue)
{
    if(newValue!=oldValue)
    {
        updateClock(id,newValue);
        return 1;
    }
    return 0;            
}
function updateClock(id,newValue)
{
    $(id).toggleClass('halfRotation').text(newValue);
}
function getDate(offset){
  var now = new Date();
  var hour = 60*60*1000;
  var min = 60*1000;
  return new Date(now.getTime() + (now.getTimezoneOffset() * min) + (offset * hour));
}
function checkSeconds(secs)
{
   if(secs.length==1)
   {
     updateClock('#sec .digit:last-child',secs[0],pSecs[0]);   
     checkForChange('#sec .digit:first-child',0,pSecs[1]);
     pSecs[0]=secs[0];
     pSecs[1]=0;
   }else
   {
     checkForChange('#sec .digit:first-child',secs[0],pSecs[0]);   
     updateClock('#sec .digit:last-child',secs[1],pSecs[1]);
     pSecs[0]=secs[0];
     pSecs[1]=secs[1];
   }   
}
function checkMinutes(mins)
{
 
   if(mins.length==1)
   {
     checkForChange('#mins .digit:last-child',mins[0],pMins[0]);   
     checkForChange('#mins .digit:first-child',0,pMins[1]);
     pMins[0]=mins[0];
     pMins[1]=0;
   }else
   {
     checkForChange('#mins .digit:first-child',mins[0],pMins[0]);   
     checkForChange('#mins .digit:last-child',mins[1],pMins[1]);
     pMins[0]=mins[0];
     pMins[1]=mins[1];
   }   
}
function checkHours(hours)
{
 
   if(hours.length==1)
   {
     checkForChange('#hours .digit:last-child',hours[0],pHours[0]);  
     checkForChange('#hours .digit:first-child',0,pHours[1]);
     pHours[0]=hours[0];
     pHours[1]=0;
   }else
   {
     checkForChange('#hours .digit:first-child',hours[0],pHours[0]);  
     checkForChange('#hours .digit:last-child',hours[1],pHours[1]);
     pHours[0]=hours[0];
     pHours[1]=hours[1];
   }   
}

