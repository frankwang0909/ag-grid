define([], function() {

    return '\
<div>\
    <div class="ag-filter-header-container">\
        <input class="ag-filter-filter" type="text" placeholder="search..."/>\
    </div>\
    <div class="ag-filter-header-container">\
        <label>\
            <input id="selectAll" type="checkbox" class="ag-filter-checkbox"/>\
            (Select All)\
        </label>\
    </div>\
    <div class="ag-filter-list-viewport">\
        <div class="ag-filter-list-container">\
            <div id="itemForRepeat" class="ag-filter-item">\
                <label>\
                    <input type="checkbox" class="ag-filter-checkbox" filter-checkbox="true"/>\
                    <span class="ag-filter-value"></span>\
                </label>\
            </div>\
        </div>\
    </div>\
</div>\
';
});