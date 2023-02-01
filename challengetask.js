



const temp = document.getElementById("limit");

$(document).ready(function () {
  var userinput = 0;
  var count = 1;
  function getJoke() {

    console.log("beforeinput" + count);

    if (count == userinput) {

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

        'X-RapidAPI-Key': '69f5629098msh2937e5cf4b4a80ep1f6681jsn8d964b518220',

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
    temp.innerHTML = "<h4 style='dispaly:flex;margin-right: 30px;'>" + 'Your Joke Count : ' + userinput + "</h4>"
    if (userinput > 0) {
      document.getElementById('btncount').style.display = "none";
      document.getElementById('txtcount').style.display = "none";
    }
    console.log(count);
    getJoke();
  });

  $('#btn').click(function () {

    getJoke();
  });
});





