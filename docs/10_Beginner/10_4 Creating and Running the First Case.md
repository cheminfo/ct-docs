## **10-4 Creating and Running the First Case**

1. **New case**. A case needs NMR data (spectrum) and spin systems (molecules in the spectrum).  
   1. A case can be created by adding the data from scratch (hole drag and drop),  
   2. using data that is already in the data management system, or  
   3. using a previous case as a blueprint for a new case.  
      For the latter two, you can select either the spectra, spin system(s) or case and use the right arrow to move the information to the import data window:

      ![][image8]

      If a case is used, all the data in the case will be used as input for the new case, but a spin system or spectrum can be removed or added.
      * Define a speaking/meaningful case name
      * Write in the Remarks box useful information about the case, like a description
      * Save the case with the floppy disk icon (yellow circle) and it will appear in the dashboard
         * It is possible to directly run the analysis in automation using the “play” icon (pink circle) and the case will be also automatically saved in the dashboard
           ![][image9]
      * Add useful tags (keywords) to categorize and organize your cases.
      
      Name, remarks and tags are very important because the dashboard has a limited amount of elements that can be loaded at the same time so you cannot scroll until the bottom of it. Only the last 40-45 opened can be loaded. For this reason the filter bar becomes **essential** to find old cases, spectra or molecule’s spin systems.
      
      ![][image10]
      
      * Click on the view icon to open the case or on the pencil to edit/run it.

2. **First Run in Automation.** To run the case, click on the play button and confirm  
   

3. **First Result.** The overall results will be shown in the radar plot (“pentagon”) on the upper left. The pentagon is visible only in view mode (“eye”) and not in edit mode (“pencil”), the mode can be easily switched clicking on the eye/pencil icon.

   * The five vertices of the radar plot stand for the five **consistency scores**: Coupling similarity and Shift similarity (bottom two), Intensity, RMS (Root Mean Square), and Match (top three).

   *CT help* definitions of the consistency scores:

     * Match: it is an overall score which is calculated from the other 4 subscores.

     * RMS: the Root Mean Square is calculated from the difference between the experimental and the calculated spectrum and additionally weighted by the LRMS (Local RMS) which is calculated for each individual spin system.

     * Shift Similarity: it describes the consistency between the chemical shifts which is calculated from the differences between the original chemical shifts obtained from a NMR prediction or from a previous analysis (the reference) and the actual values extracted from the experimental data weighted by their respective ranges (the differences between the upper and the lower limits of each parameter).

     * Coupling Similarity: it describes the consistency for the coupling constants calculated accordingly.

     * Intensity score: it is calculated by dividing the total area under the experimental spectrum by the total area under the calculated spectrum  
       

   * Radar plot interpretation:

     * A good result will appear as a green color radar plot![A green hexagon with white linesAI-generated content may be incorrect.][image11]

     * An ambiguous result will appear as a yellow radar plot  
       ![][image12]

     * An inconsistent result will be shown as a red radar plot  
       ![][image13]

     

   * If the radar is yellow or red, there’s a need to improve the result.  
