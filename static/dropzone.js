var Drop = Dropzone.options.DidDropzone = {

  autoProcessQueue: false, //stops from uploading files until user submits form
  paramName: "image", // The name that will be used to transfer the file
  maxFilesize: 500, // Maximum size of file that you will allow (MB)
  clickable: true, // This allows the dropzone to select images onclick
  acceptedFiles: '.jpg,.jpeg,.JPEG,.JPG,.png,.PNG', //accepted file types
  maxFiles: 10, //Maximum number of files/images in dropzone
  parallelUploads: 10,
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
      myDropzone = this;

      //process the queued images on click
      submitButton.addEventListener("click", function() {
          myDropzone.processQueue(); 
      });

      //fire the images to url
      myDropzone.on("processing", function(file) {
        myDropzone.options.url = url;
      });

      //clear the dropzone when complete
      myDropzone.on("complete", function(file) {
          myDropzone.removeFile(file);
      });
  },
  success: function(file, json){

      // alert("Perfect! Now visit your gallery...")      
      
  },
}