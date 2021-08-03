//Ajax call
$.ajax({
        url: "https://demos.telerik.com/kendo-ui/service/products",
        dataType: "jsonp", // "jsonp" is required for cross-domain requests; use "json" for same-domain requests
        success: function(result) {
        console.log(result[1])
          // notify the data source that the request succeeded
        },
        error: function(result) {
          // notify the data source that the request failed
        }
      });  
