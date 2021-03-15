#Read your data from file
from turtle import pd

file = "data"
df = pd.read_csv(file, sep=",", header=None, names=['Chrome','Explorer','Firefox'])
