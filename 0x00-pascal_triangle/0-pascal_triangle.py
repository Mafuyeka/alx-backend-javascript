#!/usr/bin/python3
'''Module to find Pascal's Triangle integers'''

def pascal_triangle(n):
    '''
    Function to find Pascal's Triangle integers

        Parameters:
            n (int): The number of rows of Pascal's triangle

        Returns:
            triangle (list): List of lists representing Pascal's triangle
    '''
    if n <= 0:
        return []

    triangle = [[1]]

    for x in range(1, n):
        row = [1]
        for y in range(1, x):
            row.append(triangle[x-1][y-1] + triangle[x-1][y])
        row.append(1)
        triangle.append(row)

    return triangle

def print_triangle(triangle):
    """
    Print the triangle
    """
    for row in triangle:
        print("[{}]".format(",".join([str(x) for x in row])))

if __name__ == "__main__":
    print_triangle(pascal_triangle(5))
