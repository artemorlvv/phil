function check_answer() {
    var sel = document.getElementById("answers");
    var val = sel.options[sel.selectedIndex].value;
    if (val == "")
    {
        alert("Выберите значение");
    }
    else if (val == "Фома Аквинский")
    {
        document.getElementById("start_screen").style = "display: none";
        document.getElementById("right_screen").style = "display: block";
    }
    else
    {
        document.getElementById("start_screen").style = "display: none";
        document.getElementById("false_screen").style = "display: block";
    }
}


count_hint = 3;

function addq() {
    var ul = document.getElementById("question_list");
    var li = document.createElement("li");

    switch(count_hint) {
        case 3:
            li.appendChild(document.createTextNode("Выдвинул пять доказательств существования бога"));
            break;
        case 2:
            li.appendChild(document.createTextNode("Систематизатор схоластики"));
            break;
        case 1:
            li.appendChild(document.createTextNode("Доминиканский монах, крупный теологический философ"));
            break;
    }
    count_hint--;

    li.setAttribute("class", "list_item");
    ul.appendChild(li);

    document.getElementById("add_btn").disabled = true;
    if (count_hint == 0) {
        document.getElementById("add_btn").innerHTML = "Нет подсказок";
        return;
    }

    count = 10;
    document.getElementById("add_btn").innerHTML = 0 + ":" + count;

    interval_ = setInterval(() => {
        if (count >10) document.getElementById("add_btn").innerHTML = "0" + ":" + --count;
        else document.getElementById("add_btn").innerHTML = "0" + ":" + "0" + --count;

        if (count == 0) {
            clearInterval(interval_);
            document.getElementById("add_btn").innerHTML = "Подсказка";
            document.getElementById("add_btn").disabled = false;
        }
    }, 1000);
}