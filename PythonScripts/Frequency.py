import pandas as pd
import matplotlib.pyplot as plt
import array

file = "Examen"
df = pd.read_csv(file, sep=",", header=None, names=['Bootstrap','Foundation'])

colors=["cyan", "purple"]

n, bins, patches = plt.hist(x=df, bins='auto', color=colors,
                            alpha=0.7, rwidth=20)
plt.grid(axis='y', alpha=0.75)
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Load-Times frequency distribution')


maxfreq = n.max()
plt.show()
