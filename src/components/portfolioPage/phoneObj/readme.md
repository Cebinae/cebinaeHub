OPTIMISATION CHANGES

1. Texture changes - instead of 3 .jpg textures 15kb each i have now single .png of 7kb
   (see obj.mtl configuration file) 
   Screenshot texture was random resolution, but now 1024x1024, the most performant 
   I've thied .svg, size is +-400bytes, but somehow it behaves even worse, probably bcs of vectors calculations. Bad idea.
2. Shape changes - tried reducing polygons in photoshop, 35% looks too bad, 45% so-so, probably gonna stay at 65%
    --ok, 2056 polygons will be fine


Now behaves singnificantly better, probably this level is acceptable (still to check deployed)
--finally, much much better now, guess i finished