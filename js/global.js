(function ($) {
	'use strict';
	/*==================================================================
		[ Daterangepicker ]*/
	try {
		$('.js-datepicker').daterangepicker({
			"singleDatePicker": true,
			"showDropdowns": true,
			"autoUpdateInput": false,
			locale: {
				format: 'DD/MM/YYYY'
			},
		});

		var myCalendar = $('.js-datepicker');
		var isClick = 0;

		$(window).on('click', function () {
			isClick = 0;
		});

		$(myCalendar).on('apply.daterangepicker', function (ev, picker) {
			isClick = 0;
			$(this).val(picker.startDate.format('DD/MM/YYYY'));

		});

		$('.js-btn-calendar').on('click', function (e) {
			e.stopPropagation();

			if (isClick === 1) isClick = 0;
			else if (isClick === 0) isClick = 1;

			if (isClick === 1) {
				myCalendar.focus();
			}
		});

		$(myCalendar).on('click', function (e) {
			e.stopPropagation();
			isClick = 1;
		});

		$('.daterangepicker').on('click', function (e) {
			e.stopPropagation();
		});


	} catch (er) { console.log(er); }
	/*[ Select 2 Config ]
		===========================================================*/

	try {
		var selectSimple = $('.js-select-simple');

		selectSimple.each(function () {
			var that = $(this);
			var selectBox = that.find('select');
			var selectDropdown = that.find('.select-dropdown');
			selectBox.select2({
				dropdownParent: selectDropdown
			});
		});

	} catch (err) {
		console.log(err);
	}

	try {
		$('input[type="radio"]').click(function () {
			var theNumber = $(this).attr('id').slice(-1);
			$(this).siblings('label').each(function () {
				var sibNumber = $(this).attr('for').slice(-1);
				if (sibNumber <= theNumber) {
					$(this).addClass('on');
				} else {
					$(this).removeClass('on');
				}
			});
		});

	} catch (error) {
		console.log(err);

	}


})(jQuery);

function validate() {
	var selectChoose = document.getElementById('choose');
	var maxOptions = 2;
	var optionCount = 0;
	for (var i = 0; i < selectChoose.length; i++) {
		if (selectChoose[i].selected) {
			optionCount++;
			if (optionCount > maxOptions) {
				alert("validation failed, not submitting")
				return false;
			}
		}
	}
	return true;
}