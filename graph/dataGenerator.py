"""
Generate data to test tsne_sigma.
"""
import random
import os

# INPUTS:
NoNodes = 2 * 100;
NoDim= 100;

# Delete file data.py
# os.remove("data.js")

# delete whats on file
open('data.txt', 'w').close()

# Create text file
myfile = open("data.txt", "a");
myfile.write("data = [");

for i in range(NoNodes):
    myfile.write("[" + str(random.uniform(0, 1)));
    for j in range(NoDim-1):
        myfile.write(", " + str(random.uniform(0, 1)));
    if i == NoNodes-1:
        myfile.write("]");
    else:
        myfile.write("], ");

myfile.write("]")
myfile.close()

# cnvert from txt file to js
os.rename("data.txt", "data.js")
