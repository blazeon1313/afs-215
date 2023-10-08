from fizzbuzz import pepsicoke


# can Call on PepsiCoke()
# get "1" when passed a 1
def test_one():
    soda = pepsicoke(1)
    print(soda)
    assert soda == 1


# get "2" when passed a 2
def test_two():
    soda = pepsicoke(2)
    print(soda)
    assert soda == 2


# get Pepsi to print when passed a 3
def test_three():
    soda = pepsicoke(3)
    print(soda)
    assert soda == 'Pepsi'


# get Coke to print whem passed a 5
def test_four():
    soda = pepsicoke(5)
    print(soda)
    assert soda == 'Coke'


# get Pepsi when passed a 6(a multiple of 3)
def test_five():
    soda = pepsicoke(6)
    print(soda)
    assert soda == 'Pepsi'


# get Coke when passed a 10(multiple of 5)
def test_six():
    soda = pepsicoke(10)
    print(soda)
    assert soda == 'Coke'


# get PepsiCoke when passed a 15(multiple of 3 and 5)
def test_seven():
    soda = pepsicoke(15)
    print(soda)
    assert soda == 'PepsiCoke'

# show failed test
def test_fail():
    soda = pepsicoke(8)
    print(soda)
    assert soda == 'failed'