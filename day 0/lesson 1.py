from turtle import *


#we want to point a house


#step 1 : draw a square
width(7) 
color("purple")
forward(200) 
left(90)

forward(200)
left(90)

forward(200)
left(90)
      
forward(200)
left(90) 
#end of square

#drawing a door
penup()
forward(70)
pendown()
color ("yellow")
begin_fill()
left(90)
forward(120) #helght of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()
penup()
goto(200, 200)
pendown()
color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
#draw a square
width(7)
color("blue")
begin_fill()
left(30)

penup()
goto(140, 140)
pendown()
forward(40) 
left(90)


forward(40)
left(90)


forward(40)
left(90)


forward(40)
left(90)
end_fill()
#draw a square
width(7)
color("orange")
begin_fill()


penup()
goto(80,80)
pendown()



forward(40)
left(90)


forward(40)
left(90)


forward(40)
left(90)


forward(40)
left(90)
end_fill()
#draw a square
width(7)
color("blue")
begin_fill()
penup()
goto(30,140)
pendown()
 
forward(40)
left(90)

forward(40)
left(90)

forward(40)
left(90)


forward(40)
left(90)
end_fill()
exitonclick()
