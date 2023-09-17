class Recall:
    def __init__(self):
        self.data = []

    def addNumber(self, num):
        self.data.append(num)

    def addString(self, fire):
        self.data.append(fire)

    def addDictionary(self, work):
        self.data.append(work)

    def addTuple(self, new):
        self.data.append(new)


newList = Recall()
newList.addNumber(77)
newList.addString("Firefighting is a passion of mine.")
newList.addDictionary({"profession": "Firefighter"})
newList.addTuple(("new fire", "hard work ahead"))

print(newList.data)