var theater = theaterJS()

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'vader') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

theater
  .addActor('luke')
  .addScene('luke:I code stuff', 400)
  .addScene('luke:I build neurasl',-2,'l nets', 600)
  .addScene('luke:That\'s that!!', 400)
  .addScene('luke:oooh...', -3, '!!! ', 100)
  .addScene('luke:I also study intelligent systems', 400)
  .addScene('luke:Now thats that! Discover me below')