(function ($) {
  "use strict";
  /*---custom select*/
  $(function () {
    var $element = $('.dropdown__select');
    var $selectList = $('.dropdown__list');

    $('.dropdown-wrapper').find('.dropdown__selected').on('click', function (e) {
      e.preventDefault();
      $(this).parent().find('.dropdown__list').toggleClass('visible');
      $(this).toggleClass('dropdown__arrow--down');
    });
    $('.dropdown__list-item').on('click', function (e) {
      e.preventDefault();
      var $option = $(this);
      var newValue = $option.html();
      var lastValue = $element.html();
      $element.html(newValue);

      if (newValue != lastValue) {
        $element.trigger('change');
      }
      $option.parent().removeClass('visible');
      $element.removeClass('dropdown__arrow--down');

      var achievementGroupId = $option.data('id');
      var $achievementGroups = $('.achievements_groups_container > article');
      if (!achievementGroupId) {
        $achievementGroups.removeClass('hide');
        return;
      }
      $achievementGroups.addClass('hide');
      $('.achievement_group_' + achievementGroupId).removeClass('hide');
    });
    $(document).on('mouseup', function (e) {
      if (!$selectList.is(e.target) && !$element.is(e.target) && $selectList.has(e.target).length === 0) {
        $selectList.removeClass('visible');
        $element.removeClass('dropdown__arrow--down');
      }
    });
  });


  /*search*/
  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });

      cb(matches);
    };
  };

  var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  $('#the-basics .typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'states',
      source: substringMatcher(states)
    });

})(jQuery);