let input = document.getElementById('input');
let button = document.getElementById('btn');
let joke = document.getElementById('joke');
let result = document.getElementById('result');
let date;
let alldays;
let day;
let jokes = ['Let me see the calendar...just kidding',
   'Can I see the calendar ?', 'I am busy for this !!!' , 'give me money first...just joking','why do you want to see that ??','check the result after a few years' , 'I am working do not bother me please','can you check it yourself ?','I am tired right now','Is it really important ???'
]
button.onclick = function getday(){
   date = new Date(input.value);
   alldays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
   day = date.getDay();
   if(input.value = '' || alldays[day] === undefined){
      alert('please enter a valid date')
   }else{
      joke.innerHTML = jokes[Math.floor(Math.random() * 10)]
      result.innerHTML = `${input.value} is ${alldays[day]}`
      input.value = '';
      input.onfocus = function(){
      location.reload()
   }}
}
