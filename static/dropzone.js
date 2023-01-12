// Initialize the dropzone
var myDropzone = new Dropzone("#DidDropzone", {
  url: "/dropzone-image", // The url that handles the file upload
  paramName: "image", // The name that will be used to transfer the file
  maxFilesize: 0.5, // Maximum size of file that you will allow (MB)
  addRemoveLinks: true, // Allows user to remove files
  maxFiles: 10, // Maximum number of files/images in dropzone
  parallelUploads: 10,
  acceptedFiles: ".jpeg, .jpg, .png, .gif, .pptx, .ppt, .doc,.docx, .xls, .xlsx,.csv, .tsv, .ppt,.pptx,.pages,.odt,", //accepted file types

  // The template for the file previews
  previewTemplate: '<div class="dz-preview dz-image-preview">' +
      '<div class="dz-image">' +
      '<img data-dz-thumbnail />' +
      '</div>' +

      '<div class="dz-details">' +
      '<div class="dz-filename"><span data-dz-name></span></div>' +
      '<div class="dz-size" data-dz-size></div>' +
      '</div>' +

      '<div class="dz-success-mark"><span>✔</span></div>' +
      '<div class="dz-error-mark"><span>✘</span></div>' +
      '<div class="dz-error-message"><span data-dz-errormessage></span></div>' +
      '</div>',

  // Event listeners
  init: function() {
      var submitButton = document.querySelector("#image-btn");
      myDropzone = this;

      // Process the queued images on click
      submitButton.addEventListener("click", function(e) {
          e.preventDefault(); // prevents the form from submitting normally
          var instructions = document.querySelector("#id_instructions").value;
          // Append the instructions input to the form
          var hiddenInput = document.createElement("input");
          hiddenInput.setAttribute("type", "hidden");
          hiddenInput.setAttribute("name", "instructions");
          hiddenInput.setAttribute("value", instructions);
          myDropzone.hiddenFileInput.parentNode.appendChild(hiddenInput);
          myDropzone.processQueue();
      });

      // Clear the dropzone when complete
      myDropzone.on("complete", function(file) {
          myDropzone.removeFile(file);
      });
  },

  // Callback for successful upload
  success: function(file, json) {
      alert("Perfect! Now visit your gallery...");
  },
});