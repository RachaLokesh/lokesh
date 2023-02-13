const temp = document.getElementById("limit");

$(document).ready(function () {
  var userinput = 0;
  var count = 1;
  function getJoke() {

    console.log("beforeinput" + count);

    if (count == userinput)
    {

      $('#btn').prop('disabled', true);
           
      document.getElementById('btn').style.visibility = 'hidden';
    }

    console.log("afterinput" + count);

    $.ajax({

      type: 'GET',

      url: 'https://dad-jokes.p.rapidapi.com/random/joke',

      dataType: 'json',

      headers: {

        'content-type': "application/json",

        'X-RapidAPI-Key': 'e615b45ce6msha39ac418c2e5b92p185356jsn005f0dc4e8f9',

        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'

      },

      success: function (data) {
        console.log("insuccess" + count);
        count = count + 0;
        $('#joke1').html(count + ". " + data.body[0].setup);

        console.log(data.body[0].setup);

        $('#joke2').html(data.body[0].punchline);

        console.log(data.body[0].punchline);

        console.log("inbuttonclick" + count)
        count++;
      }

    });
  }

  console.log("firstcountvalue" + count)
  document.querySelector('#btn').style.display = 'none';

  document.querySelector('#clr').style.display = 'none';

  document.querySelector('#btncount').addEventListener('click', showBtn);

  function showBtn(e) {
    document.querySelector('#btn').style.display = 'block';
    document.querySelector('#clr').style.display = 'block';
    e.preventDefault();
  }
  $('#btncount').click(function () {
    userinput = $('#txtcount').val();
    if (userinput > 0) {
      alert("Count Successfully Submitted");
      temp.innerHTML = "<h4 style='dispaly:flex;margin-right: 30px;'>" + 'Your Joke Count : ' + userinput + "</h4>"
      console.log(userinput);
      getJoke();
      document.getElementById('btncount').style.display = "none";
      document.getElementById('txtcount').style.display = "none";
    }
    else{
       alert("Please Enter value");
       document.getElementById('btn').style.display = "none";
       document.getElementById('clr').style.display = "none";
    }
    console.log(count);
   
  });

  $('#btn').click(function () {

    getJoke();
  });
});


