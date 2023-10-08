def pepsicoke(num):
    if ((num % 3 == 0) and (num % 5 == 0)):
        return 'PepsiCoke'
    else:
        if num == 1:
            return 1
        elif num == 2:
            return 2
        elif num % 3 == 0:
            return 'Pepsi'
        elif num % 5 == 0:
            return 'Coke'
        elif num == 8:
            return 'failed'


pepsicoke(1)
pepsicoke(2)
pepsicoke(3)
pepsicoke(5)
pepsicoke(15)
pepsicoke(8)
