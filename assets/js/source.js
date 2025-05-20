/* 
//////////////////////////////////////////////////////
Final Author Start
//////////////////////////////////////////////////////
Final Author @ Mohammad Aminul Islam
//////////////////////////////////////////////////////
Final Author End
//////////////////////////////////////////////////////
*/
 
    
    
    //  Disable right-click context menu 
   
    document.addEventListener('contextmenu', event => event.preventDefault());
 
    // Disable F12 key and Ctrl+Shift+I combo

    document.addEventListener('keydown', event => {
        if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I") || (event.ctrlKey && event.shiftKey && event.key === "C")) {
            event.preventDefault();
        }
    });
    



    // Prevents text selection on the webpage by blocking the 'selectstart' event.
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
      });
      
      
    // Add an event listener to detect keydown events on the document
    document.addEventListener('keydown', function(event) {
    // Check if the 'Ctrl' key (on Windows) or 'Cmd' key (on macOS) is pressed along with the 's' key
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        // Prevent the default behavior of opening the "Save Page" dialog
        event.preventDefault();
        // Optional: Display an alert to inform the user that the save function is disabled
        alert('Save function is disabled on this webpage.');
    }
    });
