$(function () {
    $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false,
        event: "mouseover"
    }).on('mouseleave', function () {
        $(this).accordion("option", "active", false);
    });
});