$(function () {
  console.log('hello')

  var imgCode = window.location.hash.substr(1)

  console.log(imgCode)

  var srcBackground = 'https://i.imgur.com/' + imgCode.split('-')[0] + '.png'
  var srcA = 'https://i.imgur.com/' + imgCode.split('-')[1] + '.png'

  var heightA = 50

  var makeImage = function (id, src) {
    return $(new Image()).attr('id', id).attr('src', src)
  }

  var start = function () {
    var backgroundA = makeImage('backgroundA', srcBackground)
    var objA = makeImage('objA', srcA)

    $('#layout').append(objA,backgroundA)

    backgroundA.css('top', 150).css('left', 20)
    // backgroundB.css('top', 100).css('left', 1000)

    objA.css('top', 140).css('left', 325).css('transform', 'translate(-27%, -65%)').css('height', heightA)
    // objBA.css('top', 533).css('left', 303).css('transform', 'translate(-58%, -16%)').css('height', heightBA)
    // objBB.css('top', 533).css('left', 1103).css('transform', 'translate(-58%, -16%)').css('height', heightBB)
    // objC.css('top', 510).css('left', 1091).css('transform', 'translate(-79%, -78%)').css('height', heightC)
  }

  var adjust = function () {
    var a = $('#inputA').val()

    $('#objA').css('height', a)

    $('#current').text('Current Code: ' + a )
  }


  $('#inputA').val(heightA).on('change', adjust)

  adjust()

  start()
})
