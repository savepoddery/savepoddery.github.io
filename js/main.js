$(document).ready(function() {

    $.getJSON('http://anyorigin.com/get?url=http%3A//www.indiegogo.com/projects/keep-diaspora-service-at-poddery-com-live&callback=?',

      function(data) {

          var time_left = 0,
              money_raised = 0,
              money_goal = 0,
              progress_width = 0,
              meter = $('#meter');
          try {
            var extracted_content = $(data.contents).find('.targets'),
                regex = '([0-9.]*\,?[0-9]+|[0-9]+\,?[0-9]*)';

            money_raised =$('#big-goal.money-raised',extracted_content)
                                                                .text()
                                                                .match(regex)[0];

            money_goal = $('.money-raised.goal',extracted_content)
                                                              .text()
                                                              .match(regex)[0];

            time_left = $('.days-left',extracted_content).html();
            progress_width = parseFloat(money_raised.replace(',',''))/parseFloat(money_goal.replace(',',''))*100+"%";

          } catch(e) {
          }

          $('.time-left span',meter).html(time_left);
          $('.money-raised span',meter).html(money_raised);
          $('.money-goal span',meter).html(money_goal);
          $('.indicator',meter).css('width',progress_width);

      });
});


