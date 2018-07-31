// import $ from "jquery";
// window.jqry = $;
var activateTab = $currentTab => {
    $('.tabs .active').removeClass('active');
    $currentTab.addClass('active');
    var journeyType = $currentTab.attr('data-journeyType')
    $('.returnDate').toggle(journeyType !== 'oneway');
}

export default activateTab;
