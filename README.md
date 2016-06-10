# ae_RemoveStrokes
An After Effects script to remove all strokes in multiple shape layers.

Wrote for a specific project in which I had hundreds of shape layer on a single timeline, and had to remove the stroke effect in each of them to apply a new one with expression-controled parameters.

##Usage
- Select the layers on the timeline panel
- Execute the script

##Known Issues
None, but has not been tested extensively. Works on AE CC 2014.

Will clear the first stroke only, as it looks for it by its name (Stroke 1). May recode in the future to make sure all strokes are cleared regardless of name.
