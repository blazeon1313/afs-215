class Shopping:
    def __init__(self) -> None:
        pass
        self.list = []

    def addToList(self, item):
        self.list.append(item)
        return self.list
    
    def searchList(self, item):
        for items in self.list:
            if items == item:
                return True
        return False
    
    def evaluateList(self):
        return self.list
    
