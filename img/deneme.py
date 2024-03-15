import cv2
from PIL import Image
import numpy

img = Image.open("img/logo.png")
img = numpy.array(img)
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
print(img)