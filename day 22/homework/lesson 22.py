#                          დავალება 1-ლი
# Write a program that calculates and prints the sum of numbers from 1 to 10 using a for loop.
#დაწერეთ პროგრამა, რომელიც გამოთვლის და დაბეჭდავს რიცხვების ჯამს 1-დან 10-მდე for loop-ის გამოყენებით.

sum = 0

for chad in range(1,11):
    sum += chad

print(" 1-დან 10-მდე for loop-ის გამოყენებით რიცხვების ჯამია:" ,sum )


#                          დავალება მე-2
# Print the squares of numbers from 1 to 15.
#ამობეჭდეთ რიცხვების კვადრატები 1-დან 15-მდე.

for chad in range(1,15):
   sum = chad*chad

print(sum)


#                         დავალება მე-3
# Write a program that calculates and prints the sum of squares of numbers from 1 to 5 using a for loop.
#დაწერეთ პროგრამა, რომელიც გამოთვლის და დაბეჭდავს რიცხვების კვადრატების ჯამს 1-დან 5-მდე for loop-ის გამოყენებით.
 
for chad in range(1,6):
    sum =+ chad*chad

print(sum)    


#                         დავალება მე-4
#Print numbers divisible by both 3 and 5 from 1 to 100 inclusive.
#დაბეჭდეთ რიცხვები, რომლებიც იყოფა 3-ზე და 5-ზე 1-დან 100-ის ჩათვლით.

for chad in range(1,101):
    chad % 3==0 and chad % 5==0

print(chad)


#                         დავალება მე-5
# Write a program that prints numbers from 10 to 1 in reverse order using a for loop.
#დაწერეთ პროგრამა, რომელიც ბეჭდავს ციფრებს 10-დან 1-მდე საპირისპირო თანმიმდევრობით for loop-ის გამოყენებით.

for chad in range(10,0,-1):
    print(chad)


#  While Loop:
  
#                         დავალება 1-ლი
# Calculate the sum of digits of a number entered by the user.
#გამოთვალეთ მომხმარებლის მიერ შეყვანილი რიცხვის ციფრების ჯამი.

wibo = int(input("Enter a number:  "))
sum=0
while(wibo > 0):
    sum = sum + wibo % 10
    wibo = wibo // 10
print("Sum of digits is: ", sum)


#                         დავალება მე-2
# Write a program that uses a while loop to print numbers from 10 down to 1.
#დაწერეთ პროგრამა, რომელიც იყენებს while ციკლს 10-დან 1-მდე რიცხვების დასაბეჭდად.

tsibo = 10
while tsibo >= 1:
    print(tsibo)
    tsibo = tsibo - 1


#                         დავალება მე-3
# Write a program that calculates and prints the sum of all integers from 1 to 100 using a while loop.
#დაწერეთ პროგრამა, რომელიც გამოთვლის და დაბეჭდავს ყველა მთელი რიცხვის ჯამს 1-დან 100-მდე while loop გამოყენებით.

chad = 1
sum = 0
while chad <= 100:
    sum = sum + chad 
    chad = chad + 1
print("sum =" , sum)


#                         დავალება მე-4
# Write a program that calculates and prints the square of numbers from 1 to 10 using a while loop.
#დაწერეთ პროგრამა, რომელიც გამოითვლის და დაბეჭდავს რიცხვების კვადრატს 1-დან 10-მდე while loop გამოყენებით.

chad = 1

while chad<= 10:
    print("square of ", chad , "is" , chad*chad )
    chad = chad + 1


#  If - Else:
 
#                         დავალება 1-ლი
# Write an if-else statement to determine if a year entered by the user is a leap year.
#დაწერეთ if-else განცხადება იმის დასადგენად, არის თუ არა მომხმარებლის მიერ შეყვანილი წელი ნახტომი წელი.

 number =int(input("Enter your date of birth:"))
if number % 2 == 0:
    print("this number is odd")
else:
    print("this number is even")       