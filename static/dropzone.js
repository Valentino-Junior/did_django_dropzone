var myDropzone = new Dropzone("div#myDropzone", {
  url: "{% url 'dropzone-image' %}",
  method: "post",
  addRemoveLinks: true,
  autoProcessQueue: false, //stops from uploading files until user submits form
  paramName: "image", // The name that will be used to transfer the file
  maxFilesize: 0.5, // Maximum size of file that you will allow (MB)
  clickable: true, // This allows the dropzone to select images onclick
  acceptedFiles: ".jpeg, .jpg, .png, .gif, .pptx, .ppt, .doc,.docx, .xls, .xlsx,.csv, .tsv, .ppt,.pptx,.pages,.odt,", //accepted file types
  maxFiles: 10, //Maximum number of files/images in dropzone
  parallelUploads: 10,
  addRemoveLinks: true,
  dictRemoveFile: "Remove",
  previewTemplate: '<div class="dz-preview dz-image-preview">'+
                      '<div class="dz-image">'+
                      '<img data-dz-thumbnail />'+
                      '</div>'+
                    '<div class="dz-details">'+
                      '<div class="dz-filename"><span data-dz-name></span></div>'+
                      '<div class="dz-size" data-dz-size></div>'+
                    '</div>'+
                    '<div class="dz-success-mark"><span>✔</span></div>'+
                    '<div class="dz-error-mark"><span>✘</span></div>'+
                    '<div class="dz-error-message"><span data-dz-errormessage></span></div>'+
                  '</div>',
  init: function(){
      var submitButton = document.querySelector("#image-btn")
      var url = $('#DidDropzone').attr("action")
      var comment = document.querySelector("#user-comment")
      myDropzone = this;
    submitButton.addEventListener("click", function() {
      if (!fileType.value) {
        alert("Please select a file type before submitting");
      } else {
        myDropzone.options.url = url + '?file_type=' + fileType.value + '&comment='+ comment.value;
        myDropzone.processQueue();
      }
    });
    //fire the images to url
    myDropzone.on("processing", function(file) {
      myDropzone.options.url = url;
    });

    //clear the dropzone when complete
    myDropzone.on("complete", function(file) {
        myDropzone.removeFile(file);
        myDropzone.removeAllFiles();
        comment.value = "";
    });
},
success: function(file, json){
  window.location.reload();
    // alert("Perfect! Now visit your gallery...")      
},
})
