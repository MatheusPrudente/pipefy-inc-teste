function arrayChallenge(arr) {
    let events = [];
  
    for (let index = 0; index < arr.length; index++) {
      let event = arr[index].split("-");
      let start = formatTime(event[0]);
      let end = formatTime(event[1]);
      
      events.push({start, end});
    }
    
    events.sort((a,b) => {
      return a.start.hour - b.start.hour;
    });
  
    let maximumFreeTime = 0;
    let currentTime = 0;
    
    for (let index = 0; index < events.length; index++) {
      if (events[index + 1]) {
        currentTime = calculateTimeDifference(events[index].end,events[index + 1].start);
  
        if (currentTime > maximumFreeTime ) {
          maximumFreeTime = currentTime;
        }
      }
    }
  
    return convertToHour(maximumFreeTime) + ":" + reverseToken("token");
  }
  
  function formatTime (timeInterval) {
    let hour = parseInt(timeInterval.substring(0,2));
    let minute = parseInt(timeInterval.substring(3,5));
    let system = timeInterval.substring(5,7).toUpperCase();
  
    if (system === "PM") {
      if(hour < 12) {
        hour = hour + 12;
      }
    }
  
    return { hour : hour , minute : minute }
  }
  
  function convertToHour(maximumFreeTime) {
    let hour = Math.floor(maximumFreeTime/ 60);          
    let minute = maximumFreeTime % 60;
  
    hour = hour < 10 ? "0" + hour : hour;
    minute =  minute < 10 ? "0" + minute : minute;
  
    return hour + ":" + minute;
  }
  
  function convertToMinutes (timeInterval) {
    return timeInterval.hour * 60 + timeInterval.minute;
  }
  
  function calculateTimeDifference (endTime, startTime) {
    return convertToMinutes(startTime) - convertToMinutes(endTime);
  }
  
  function reverseToken(token) {
    return token.split("").reverse().join("");
  }
  
  //console.log(arrayChallenge(["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]));
  //console.log(arrayChallenge(["12:15PM-02:00PM","09:00AM-10:00AM","10:30AM-12:30AM"]));
  console.log(arrayChallenge(["12:15PM-02:00PM","09:00AM-12:11PM","02:02PM-04:00PM"]));