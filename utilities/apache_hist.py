#!/usr/bin/python3
# -*- coding: UTF-8 -*-

import numpy as np
import matplotlib as mpl
mpl.use('Agg')
import matplotlib.pyplot as plt
import os

def files(path='.',hidden=False,abspath=False):
   """
     Lists all the files in a folder.
       - hidden: list hidden files
       - abspath: return absolute paths
   """
   if path[-1] != '/': path += '/'
   if not os.path.isabs(path): path = os.path.abspath(path)
   else: pass   # Path is already absolute
   files = []
   #for f in os.walk(path).next()[2]:
   #TODO Recursive listing!!!
   for fs in os.walk(path):
      for f in fs[2]:
         if not hidden:
            if f[0] != '.':
               if abspath: files.append('/'.join([fs[0][0:-1],f]))
               else: files.append(f)
         else:
            if abspath:
               print('**','/'.join([fs[0][0:-1],f]))
               files.append('/'.join([fs[0][0:-1],f]))
            else: files.append(f)
   return files


fs = files('/var/log/apache2/',abspath=True)
fs = [x for x in fs if '/other_vhosts_access' in x or '/access' in x]
fs = [x for x in fs if '.gz' not in x]

access = ''
for f in fs:
   if 'other' in f:
      com = f"awk '{{print $2}}' {f} | sort | uniq -c | sort -n | cut -c 5-"
   else:
      com = f"awk '{{print $1}}' {f} | sort | uniq -c | sort -n | cut -c 5-"
   access +=  os.popen(com).read()

Y,L = [],[]
for l in access.splitlines():
   y,l = l.split()
   Y.append(int(y))
   L.append(l)

inds = np.argsort(Y)
for i in inds[:3]:
   print(Y[i],'',L[i])
print('   --------')
for i in inds[-7:]:
   print(Y[i],'',L[i])

fig, ax = plt.subplots()
ax.hist(Y,bins=len(Y))
ax.set_xlabel('# of visits')
ax.set_ylabel('# of people')
fig.savefig('web_usage.png')
#plt.show()
