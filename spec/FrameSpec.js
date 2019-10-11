describe("Frame", function (){
  var frame;
  beforeEach(function (){
    frame = new Frame
  })

  it('a user has 10 frames', function() {
    expect(frame.frames).toEqual(10)
  })

  it('each frame has 2 rolls', function(){
    expect(frame.currentFrame).toEqual(2)
  })

  it('there are 10 pins', function(){
    expect(frame.pins).toEqual(10)
  })

  it('each user start with 0 score', function(){
    expect(frame.score).toEqual(0)
  })

  it('adds pins to the count', function(){
    frame.firstRoll(4)
    expect(frame.currentFrame).toEqual(1)
    expect(frame.score).toEqual(4)
  })
})

