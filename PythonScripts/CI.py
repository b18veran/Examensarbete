import scipy.stats as stats
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np



def mean_confidence_interval(data, confidence=0.95):
    a = 1.0 * np.array(data)
    n = len(a)
    m, se = np.mean(a), stats.sem(a)
    h = se * stats.t.ppf((1 + confidence) / 2., n-1)
    return -h, +h


#Read your data from file
file = "data"
df = pd.read_csv(file, sep=",", header=None, names=['Bootstrap', 'Foundation'])


print ("CIs Without Gzip: ", mean_confidence_interval(df['Bootstrap']))
print ("CIs Foundation", mean_confidence_interval(df['Foundation']))



#Read your data from file
#file = "data.txt"
#df = pd.read_csv(file, sep=",", header=None, names=['Chrome','Explorer','Firefox'])


CI_Chrome = mean_confidence_interval(df['Bootstrap'])
CI_Explorer = mean_confidence_interval(df['Foundation'])


# width of the bars
barWidth = 0.6

# Bars Data
barsData = df.mean()

# The x-position order of bars
barsOrder = range(len(df.columns))

# Std Bars Interval
#barsInterval = df.std()

# Bars for CI Intervals
df_CI = pd.DataFrame(list(zip(CI_Chrome, CI_Explorer)), columns = ['Bootstrap','Foundation'])

barsInterval = df_CI.iloc[0]


# Colours of bar charts
colors=["cyan", "purple"]

# Opacity of colours
Opacity=0.5

# Start values from bottom of the bars
minValue=df.values.min()

# Interval cap size
intervalCapsize=7

# Plot bars
plt.bar(barsOrder, barsData, color = colors , edgecolor = 'black', width = barWidth,
        yerr=barsInterval, capsize=7, alpha=Opacity, bottom=intervalCapsize)

#Put a tick on the x-axis undex each bar and label it with column name
plt.xticks(range(len(df.columns)), df.columns)

plt.ylabel('Load Time In Milliseconds')
#plt.xlabel('Browsers')
plt.title('CI Diagram')
plt.show()
