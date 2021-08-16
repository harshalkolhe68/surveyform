$(document).ready(function () {
   var myMaxSelAllowed = 3;
   $('select#my_list').click(function (evt) {
      if (!evt.toElement.selected) return;
      var cmpItemSel = 0;
      $("select#my_list option").each(function (id, val) {
         cmpItemSel += +(val.selected);
      })
      if (cmpItemSel > myMaxSelAllowed) evt.toElement.selected = false;
   });
})
