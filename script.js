$(document).ready(() => {
  console.log('ready')
  

  //grabbing the description to save to local storage at that time
  $('#currentDay').text(moment().format('dddd, MMM Do'))

  //when done is clicked
  $('.saveBtn').on('click', function () {
    
    //grabs the variables within the planner
    let time = $(this).parent().attr('id')
    let value = $(this).siblings('.description').val()
    //and sets the local storage to whatever is in that variable at that time
    localStorage.setItem(time,value)
    
  })

  //getting the data from local storage
  $('#hour9 .description').val(localStorage.getItem('hour9'))
  $('#hour10 .description').val(localStorage.getItem('hour10'))
  $('#hour11 .description').val(localStorage.getItem('hour11'))
  $('#hour12 .description').val(localStorage.getItem('hour12'))
  $('#hour13 .description').val(localStorage.getItem('hour1'))
  $('#hour14 .description').val(localStorage.getItem('hour2'))
  $('#hour15 .description').val(localStorage.getItem('hour3'))
  $('#hour16 .description').val(localStorage.getItem('hour4'))
  $('#hour17 .description').val(localStorage.getItem('hour5'))

  // couldn't figure out how to put it through a loop to just grab all the ids and get the local save data to re show on the page after refresh instead of inputting everything manually
  // const getData = () =>{

  //   $('.savBtn').each(function () {
  //     //grabs the variables within the planner
  //     let time = $(this).parent().attr('id')
  //     let value = $(this).siblings('.description').val()
  //     //and sets the local storage to whatever is in that variable at that time
  //     localStorage.getItem(time, value)
 
  //   })
  // }

  //updating the color based on time
  const colorUpdater = () =>{
     let current = moment().hours()

     //function call for a for loop
     $('.time-block').each(function(){
       //grabbing the current div
       let hour = parseInt($(this).attr('id').split('r')[1])

       //if the hour at the block is less than current hour then its in past
       //if the hour at the block is equal to the current its set in the present
       //if the hour at the block is not less than or equal to the time then it is set in the future
       if(hour < current){
         $(this).addClass('past')
       }else if(hour === current){
         $(this).removeClass('past')
         $(this).addClass('present')
       }else{
         $(this).removeClass('past')
         $(this).removeClass('present')
         $(this).addClass('future')
       }

     })

  }

// getData()
colorUpdater()
})

