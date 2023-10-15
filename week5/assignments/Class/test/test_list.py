import pytest
from lib.list import Shopping


def testCanCallShopping():
    Shopping()

@pytest.fixture()
def list():
    list = Shopping()
    list.addToList('Bacon')
    list.addToList('Eggs')
    list.addToList('Sausage')
    return list

# Place a string into a list
def testAddToList(list):
    #list = Shopping()
    #list.addToList('Bacon')
    #list.addToList('Eggs')
    list.addToList('Hashbrowns')
    assert list.evaluateList() == ['Bacon', 'Eggs', 'Sausage', 'Hashbrowns']

# Search the list for a single instance of a string
def testSearchList(list):
    #list = Shopping()
    #list.addToList('Sausage')
    assert list.searchList('Sausage') == True
    assert list.searchList('Coffee') == False

# Evaluate all items in the list
def testEvaluateList(list):
    #list = Shopping()
    #list.addToList('Bacon')
    #list.addToList('Eggs')
    #list.addToList('Hashbrowns')
    assert len(list.list) != 0 