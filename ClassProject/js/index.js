$(document).ready(function () {
    "use strict";
    //gpa
    (function(box) {
        box = $(box);
        var add = box.find(".s-add");
        var table_row = box.find("table tbody");
        var table_row_html = "<tr><td><input class='score' type='text'></td><td><input class='credits' type='text'></td></tr>";
        var table_row_last = table_row.find("tr:last");
        add.click(function() {
            table_row_last.before(table_row_html);
        });
        //calculate
        var calculate_btn = box.find(".s-begin");
        var result_box = box.find(".s-result");
        calculate_btn.click(function() {
            var result = 0;
            var all_score = 0;
            var all_credits = 0;
            var score = box.find(".score");
            var credits = box.find(".credits");
            var len = score.length;
            for (var i = 0; i < len; i++) {
                var score_val = parseFloat(score.eq(i).val());
                var credits_val = parseFloat(credits.eq(i).val());
                if (!score_val || !credits_val) {
                    alert("Wrong information");
                    return false;
                }
                all_score += score_val * credits_val;
                all_credits += credits_val;
            }
            result = all_score / all_credits;
            result_box.html(result);
        });
    })(".g-gpa");
    (function(box) {
        box = $(box);
        var submit = box.find(".s-submit");
        submit.click(function() {
            alert("Submit successfully");
        });
    })(".g-form");
});
