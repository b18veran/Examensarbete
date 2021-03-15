import statsmodels.stats.multicomp as multi
import pandas as pd
import matplotlib.pyplot as plt

def tuckeyTest(*data, groups):

    # Put data into dataframe
    df = pd.DataFrame()

    if len(data) == 2:
        print ("Tuckey test requires more than two data sources")
    elif len(data) == 3:
        df[ groups[0] ] = data[0]
        df[ groups[1] ] = data[1]
        df[ groups[2] ] = data[2]
    elif len(data) == 4:
        df[ groups[0] ] = data[0]
        df[ groups[1] ] = data[1]
        df[ groups[2] ] = data[2]
        df[ groups[3] ] = data[3]


    # Stack the data (and rename columns):
    stacked_data = df.stack().reset_index()
    stacked_data = stacked_data.rename(columns={'level_0': 'id',
                                            'level_1': 'treatment',
                                            0:'result'})

    # Show the stacked data:
    # print (stacked_data)

    # Show all pair-wise comparisons:

    res2 = multi.pairwise_tukeyhsd (stacked_data['result'],
                            stacked_data['treatment'])
    print(res2)

    # plot Simultaneous Confidence Intervals
    res2.plot_simultaneous()

    # if you want to scompute and show the Grand Mean line
    grandMean = stacked_data['result'].values.mean()
    plt.vlines(x=grandMean,ymin=-0.5,ymax=4.5, color="red")

    plt.show()


# Prpare data for Tuckey test

#Determine the group labels
browsers = ['Chrome','Explorer','Firefox']

#Read your data from file
file = "data.txt"
df = pd.read_csv(file, sep=",", header=None, names=['Chrome','Explorer','Firefox'])


tuckeyTest(df['Chrome'], df['Explorer'], df['Firefox'], groups = ['Chrome','Explorer','Firefox'])
