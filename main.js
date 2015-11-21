$(document).bind("mobileinit", function(ev){
  //alert("mobileinit event");
  //when jqm has loaded and we can set default settings
});



$(document).bind("ready", function(ev){
  //jquery, jqm, and the DOM are ready
  //we can now attach listeners to page elements
  //alert("ready event ");
  
  $("#fred").bind("pageinit", function(ev){
    alert("pageinit event");
    //when each page loads for the first time.
  });
});
  
  
   
  
  
  
});

 $("#test").on("click", function(ev){
     ev.preventDefault();
     
     $.mobile,pageContainer.pagecontainer("change", "#page1", {anything:"Hello"});
 });
     
     $("#test").on("click", function(ev){
     ev.preventDefault();
     
     $.mobile,pageContainer.pagecontainer("change", "#page2", {anything:"Hello"});
     });

 
     $("#test").on("click", function(ev){
     ev.preventDefault();
     
     $.mobile,pageContainer.pagecontainer("change", "#page3", {anything:"Hello"});
     });

  $("#test").on("click", function(ev){
     ev.preventDefault();
     
     $.mobile,pageContainer.pagecontainer("change", "#page4", {anything:"Hello"});
     });

 $("#test").on("click", function(ev){
     ev.preventDefault();
     
     $.mobile,pageContainer.pagecontainer("change", "#page5", {anything:"Hello"});
     });

$("#test").on("click", function(ev){
     ev.preventDefault();
     
     $.mobile,pageContainer.pagecontainer("change", "#page6", {anything:"Hello"});
     });

$("#test").on("click", function(ev){
     ev.preventDefault();
     
     $.mobile,pageContainer.pagecontainer("change", "#page7", {anything:"Hello"});
     });


