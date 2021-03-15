import pandas as pd

def exampleDescriptiveStats():

    #Read your data from file
    file = "data"
    df = pd.read_csv(file, sep=",", header=None, names=['Bootstrap','Foundation'])

    print ("Mean values:")
    print (df.mean())

    print ("STD values:")
    print (df.std())

    print ("S.E values:")
    print (df.sem())

exampleDescriptiveStats()
