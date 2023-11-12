$(document).ready(function(){
        $(".FontTapUpper").click(function(){
            $(".FontsBoxxxTap").addClass("showTap");
        });
    
    $(".dlg-close-btn").click(function(){
        $(".FontsBoxxxTap").removeClass("showTap");
    });
    
            $(".category").click(function(){
            // Add the active class to the content_Font div
            $(".content_Font").addClass("show-category");
                $(".browse-categories").addClass("show-Item");
                            // Get the text content of the clicked category
            var categoryText = $(this).text();
            
            // Update the text content of the span inside dlg-header-title
            $(".dlg-header-title span").text(categoryText);
            
        });

    
    $(".browse-categories").click(function(){
        $(this).removeClass("show-Item");
        $(".content_Font").removeClass("show-category");
        $(".dlg-header-title span").text("Choose a Category Font");
        
    });
    $(".font").click(function(){
            // Remove the selected class from all font items
            $(".font").removeClass("selected");
            // Add the selected class to the clicked font item
            $(this).addClass("selected");
        
        var fontName = $(this).find(".name").text();
            // Update the text content of the FontTapUpper button
            $(".FontTapUpper .namoffont").text(fontName);
        });
});     
