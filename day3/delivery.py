coords = {
    '^': 1,
    '>': 2,
    'v': 3,
    '<': 4,
}


def setCoords(char):
    if coords[char] == 1:
        return {"y": 1}
    if coords[char] == 2:
        return {"x": 1}
    if coords[char] == 3:
        return {"y": -1}
    if coords[char] == 4:
        return {"x": -1}


class Delivery():
    def __init__(self, name):
        self.x_position = 0
        self.y_position = 0
        self.matrix = {}
        self.name = name

    def move_position(self, char):
        pos = setCoords(char)
        if 'x' in pos:
            self.x_position += pos['x']
            self.update_matrix(self.x_position, self.y_position)
        if 'y' in pos:
            self.y_position += pos['y']
            self.update_matrix(self.x_position, self.y_position)

    def update_matrix(self, x, y):
        position = self.get_position_string(x, y)
        self.matrix[position] = position

    def get_position_string(self, x, y):
        return 'x:' + str(x) + ' - y:' + str(y)
