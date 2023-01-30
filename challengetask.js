const temp = document.getElementById("limit");

$( document ).ready(function() {
  var userinput=0;
  var count=1;
  console.log("firstcountvalue"+count)

  document.querySelector('#btn').style.display = 'none'; 
  document.querySelector('#clr').style.display = 'none'; 
  document.querySelector('#btncount').addEventListener('click',showBtn);
 
  function showBtn(e) { 
  document.querySelector('#btn').style.display = 'block'; 
  document.querySelector('#clr').style.display = 'block'; 
  e.preventDefault(); 
  } 

  $('#btncount').click(function (){
   userinput= $('#txtcount').val();
   temp.innerHTML = "<h4 style='dispaly:flex;margin-right: 30px;'>"+'Your Joke Count : '+userinput+"</h4>"
   if(userinput>0)
   {
   document.getElementById('btncount').style.display="none";

   //console.count(userinput);
   document.getElementById('txtcount').style.display="none";
   $('#btncount').prop('disabled', true);
   //console.count(userinput);
  //  alert("Count Submitted successfully..")
   }
  //  else
  //  {
  //   alert("Please enter the value");
  //  }
   console.log(count);
   $.ajax({
    

    type: 'GET',

    url: 'https://dad-jokes.p.rapidapi.com/random/joke',

    dataType: 'json',

    headers: {

                       'content-type': "application/json",

                       'X-RapidAPI-Key': 'c0664e7191msh361e3a0f59cac75p16484fjsn0dae86e9251b',

                       'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'

                    },

    success: function (data)

    {
      $('#joke1').html(count+". "+data.body[0].setup);

      console.log(data.body[0].setup);

      $('#joke2').html(data.body[0].punchline);

      console.log(data.body[0].punchline);
      console.log("indoc."+count);

    }
  });
 });

  $('#btn').click(function(){
     count=count+1;
     console.log("beforeinput"+count);

     if(count==userinput){

      $('#btn').prop('disabled', true);
      // document.querySelector('#btn').style.display = 'none'; 

      // document.getElementById('btn').style.display="none";
      document.getElementById('btn').style.visibility= 'hidden';
    }
      
   console.log("afterinput"+count);
   
    $.ajax({

    type: 'GET',

    url: 'https://dad-jokes.p.rapidapi.com/random/joke',

    dataType: 'json',

    headers: {

                       'content-type': "application/json",

                       'X-RapidAPI-Key': 'c0664e7191msh361e3a0f59cac75p16484fjsn0dae86e9251b',

                       'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'

                    },

    success: function (data)

    {
      console.log("insuccess"+count);

      $('#joke1').html(count+". "+data.body[0].setup);

      console.log(data.body[0].setup);

      $('#joke2').html(data.body[0].punchline);

      console.log(data.body[0].punchline);
      console.log("inbuttonclick"+count)
    }

  });

});

});


