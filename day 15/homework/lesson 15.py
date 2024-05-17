# რომელ ბიბლიოთეკას ვიყენებთ პითონში გეომეტრიული ფიგურების ასაგებად?
#      ა)builder         ბ)math         გ)Random          დ)Turtle 
#                      სწორი პასუხია:Turtle 
from turtle import*
exitonclick() #ასე იწერება Turtle-ის გასაშვები კოდი 

# რომელ პუნქციას ვიყენებთ, როდესაც გვინდა, რომ terminal-ში მოვახდინოთ დაბეჭვდა?
#      ა)return          ბ)append       გ)print           დ)console.log
#                      სწორი პასუხია:print
name="giorgi" 
print(name)  #ასე ვახდენთ terminal-ში დაბეჭდვას

# პითონის გამოყენებით შეუძლებელია ალგორითმის შექმნა.
#               ა)true     ბ)false 
#                      სწორი პასუხია:false 

# ათწილადებზე სამუშაოდ რომელ მონაცემთა ტიპს ვიყენებთ?
#      ა)decimal          ბ)whole number       გ)integer           დ)float
#                      სწორი პასუხია:float
num14=5/4
print(type(num14))  #ათწილადებზე სამუშაოდ მონაცემთა ტიპს float-ს მართლადაც რომ ვიყენებთ

# რომელია პითონისთვის სწორი კომენტარი?
#      ა) (comment)          ბ) //comment       გ) <!--comment-->           დ) #comment
#                       სწორი პასუხია: #comment
#-დიახ ამ ნიშნით იწერება კომენტარი

# რომელ ფუნქციას ვიყენებთ მომხმარებლისგან terminal-იდან ტექსტის მისაგებლად?
#      ა)output          ბ)list       გ)function           დ)input
#                      სწორი პასუხია:input
age=print(input("enter your age:")) #input ფუნქციის მეშვეობით terminal-ში 

#input-დან მიგებული ინფორმაცია ინახება string-ის სახით.
#               ა)true     ბ)false 
#                      სწორი პასუხია:true

# როგორ ვამოწმებთ მონაცემთა ტიპს?
#      ა)date_type(x)          ბ)type(x)       გ)is_string(x)           დ)varible(x)
#                      სწორი პასუხია:type(x)
name="giorgi"
print(type(name)) #დიახ ჩვენ მონაცემთა ტიპს  type-ით ვამოწმებთ

# რომელი ცვლადი ინახავს ათწილადს?
#      ა)x=7          ბ)x=10       გ)x=4           დ)x=10/2
#                      სწორი პასუხია:x=10/2          
number1=10/2
print(type(number1)) #მართლაც ტერმინალში float დაიწერა რომელსაც ქართულად ათწილადი ეწოდება

# რომელ ვარიანტშია პითონის ცვლადი სწორად შექმნილი?
#      ა)declare x          ბ)var newVarible = int("5")       გ)const x = 8           დ)x=12
#                     სწორი პასუხია:x=12
age=12
print(age) #მართლაც პითონის ცვლადი ასე იქმნება

# რას გამოიტანს კოდი?
name="Goal"
surname="orientadze"
age=100
print(name + surname + age)
#      ა)Goal orientadze          ბ)100       გ)Goal orientadze 100           დ) Error
#                     სწორი პასუხია:Error

# რას გამოიტანს კოდი?
num1=10
num2=20
print(str(num1) + str(num2))

#      ა)10+20          ბ)1020       გ)30       გ)"30"
#                     სწორი პასუხია:1020

# რას გამოიტანს კოდი,როდესაც მომხმხმარებელი შეიტანს 7-ს ?
num11 = float(input("enter number: "))
print(type(num11))  