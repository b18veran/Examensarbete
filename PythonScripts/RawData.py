import pandas as pd
import matplotlib.pyplot as plt
import array

file = "data"
df = pd.read_csv(file, sep=",", header=None, names=['Bootstrap','Foundation'])

ax = plt.gca()
ax.set_ylim([0, 99])

df.plot(kind='line', y='Bootstrap', color='cyan', ax=ax)
df.plot(kind='line', y='Foundation', color='purple', ax=ax)

plt.ylabel('Load time (ms)')
plt.xlabel('Post')
plt.title('Load-Times Comparison')
plt.show()
