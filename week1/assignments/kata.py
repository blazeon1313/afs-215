def Soda(num):

    if num == 1:
        print("1")
    elif num == 2:
        print("2")
    #elif num == 3:
        #print("Pepsi")
    #else num == 5:
        #print("Coke")
    else:
        output = ""
        if num % 3 == 0:
            output += "Pepsi"
        if num % 5 == 0:
            output += "Coke"
        print(output)

Soda(1)
Soda(2)
Soda(3)
Soda(5)
Soda(6)
Soda(10)
Soda(15)
Soda(60)
