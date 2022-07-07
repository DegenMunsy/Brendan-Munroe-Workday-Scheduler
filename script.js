//display current date/time using moment.js

$(document).ready(function (){

var timeEL = document.querySelectorAll (".time");
var saveButton = $(".enterData")

    saveButton.on('click', function (event) {
        event.preventDefault()
        var timeBlockId = $(this).attr('id')
        var task = $(this).parent('.col-2').siblings('.col-9').children('.description').val()
        localStorage.setItem(timeBlockId, task)
        showTask()
        console.log(timeBlockId)
    })

    showTask()
    function showTask() {
        for (var i = 9; i < 18; i++) {
            var task = localStorage.getItem(i)
            $('#' + i + "").text(task)
        }
    }

  })
